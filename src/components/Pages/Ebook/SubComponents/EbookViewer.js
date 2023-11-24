import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const EbookViewer = () => {
    const location = useLocation();
    const Ebook = location.state.Ebook;

    const Data = Ebook.EbookViewer;
    const DesktopEnv = 2;
    const Start = 0;
    let ReadSpeed = 1;
    const End = Data.Slide.length
    const SlideRef = useRef();
    const [slideState, setSlideState] = useState(0)
    function changeReadSpeed(index) {
        ReadSpeed = index;
    }
    function RightArrow() {
        if(slideState === End - DesktopEnv){return;}else{setSlideState(slideState+ReadSpeed);}
    }
    function LeftArrow() {
        if(slideState === Start){return;}else{setSlideState(slideState-ReadSpeed);}
    }
    useEffect(()=>{
        let Progressbar = document.querySelector('.Progressbar');
        let Progress = document.querySelector('.Progress');
        Progress.style.width = `${(Progressbar.clientWidth / (End - DesktopEnv)) * slideState}px`
        const SlideWidth = 1280 / DesktopEnv;
        SlideRef.current.style.transform = `translateX(-${slideState * SlideWidth}px)`
    }, [slideState])
    
    return ( 
        <section className="EbookViewer">
            <article className="TitleWrap">
                <div className="title">{Ebook.BookName}</div>
                <div className="ButtonWrap">
                    <div className="ChangeReadSpeedLow"onClick={changeReadSpeed(1)}>한 쪽씩 읽기</div>
                    <div className="ChangeReadSpeedHigh"onClick={changeReadSpeed(2)}>한 장씩 읽기</div>
                    <div className="GotoList"><Link to="/ebook">목록으로 돌아가기</Link></div>
                </div>
            </article>
            <article className="ViewerSlide">
                <article className="ViewerSlideSection">
                    <div className="ViewerSlideWrap" ref={SlideRef}>
                        {Data.Slide.map((EbookItem, index)=>
                            <div className="SlideItem" key={EbookItem[index]}>
                                <img src={require(`../images/Ebook/Ebook${Ebook.id}/${index+1}.jpg`)} alt="Ebook"/>
                            </div>
                        )}
                    </div>
                </article>
                <div className='ViewerSlide_BtnWrap'>
                    <div className='MainSlide_PrevBtn' onClick={LeftArrow}>
                        <svg viewBox="0 0 40 74" fill="none">
                            <path d="M38.5 2L3 37L38 72" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className='MainSlide_NextBtn' onClick={RightArrow}>
                        <svg viewBox="0 0 40 74" fill="none">
                            <path d="M38.5 2L3 37L38 72" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                <div className="Progressbar">
                    <div className="Progress"></div>
                </div>
            </article>

        </section>
     );
}
 
export default EbookViewer;