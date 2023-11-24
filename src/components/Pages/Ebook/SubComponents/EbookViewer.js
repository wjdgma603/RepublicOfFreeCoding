import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const EbookViewer = () => {
    const location = useLocation();
    const Ebook = location.state.Ebook;

    const Data = Ebook.EbookViewer;
    const DesktopEnv = 2;
    const Start = 0;
    const [readSpeed, setReadSpeed] = useState(1)
    const End = Data.Slide.length
    const SlideRef = useRef();
    const [slideState, setSlideState] = useState(0)
    function changeReadSpeed(index) {
        setReadSpeed(index);
    }
    function RightArrow() {
        if(slideState >= End - DesktopEnv - 1){setSlideState(End - DesktopEnv)}
        else{setSlideState(slideState+readSpeed);}
    }
    function LeftArrow() {
        if(slideState <= Start){setSlideState(0)}
        else{setSlideState(slideState-readSpeed);}
    }
    useEffect(()=>{
        const Button = document.querySelectorAll('.ButtonWrap>div');
        Button.forEach((button)=>{
            button.addEventListener('click', ()=>{
                Button.forEach((buttons)=>{buttons.classList.remove('Activate')})
                button.classList.toggle('Activate')
            })
        })
        let Progressbar = document.querySelector('.Progressbar');
        let Progress = document.querySelector('.Progress');
        Progress.style.width = `${(Progressbar.clientWidth / (End - DesktopEnv)) * slideState}px`
        const SlideWidth = 1280 / DesktopEnv;
        SlideRef.current.style.transform = `translateX(-${slideState * SlideWidth}px)`
    }, [slideState, End])
    console.log(Data)
    return ( 
        <section className="EbookViewer">
            <article className="TitleWrap">
                <div className="title">{Ebook.BookName}</div>
                <div className="ButtonWrap">
                    <div className="ChangeReadSpeedLow Activate" onClick={()=>changeReadSpeed(1)}>
                        <svg version="1.1" viewBox="0 0 290 388.7" enableBackground="new 0 0 290 388.7">
                            <g>
                                <path className="Border" d="M18.1,194.3c0-57.5,0-114.9,0-172.4c0-9.5,2.4-11.9,11.8-11.9c55,0,109.9,0,164.9-0.1c4.8,0,8.4,1.5,11.8,4.9 c22,22.2,44.1,44.3,66.4,66.3c3.3,3.3,4.8,6.7,4.8,11.4c-0.1,91.6-0.1,183.2-0.1,274.8c0,8.6-2.7,11.3-11.2,11.3 c-79,0-158.1,0-237.1,0c-8.6,0-11.2-2.7-11.2-11.3C18.1,309.7,18.1,252,18.1,194.3z M189.7,27.2c-52,0-103.3,0-154.7,0 c0,111.6,0,223,0,334.3c75.4,0,150.6,0,225.7,0c0-87.9,0-175.6,0-263.6c-1.6,0-3.1,0-4.5,0c-18.6,0-37.2,0-55.8,0 c-8,0-10.8-2.8-10.8-10.9c0-18.5,0-36.9,0-55.4C189.7,30.2,189.7,28.8,189.7,27.2z M206.8,40.1c0,13.6,0,27.3,0,40.9 c13.9,0,27.6,0,40.9,0C234.1,67.4,220.5,53.8,206.8,40.1z"/>
                                <path fill="#FFFFFF" d="M189.7,27.2c0,1.6,0,3,0,4.5c0,18.5,0,36.9,0,55.4c0,8.1,2.7,10.9,10.8,10.9c18.6,0,37.2,0,55.8,0 c1.4,0,2.8,0,4.5,0c0,88,0,175.6,0,263.6c-75.2,0-150.3,0-225.7,0c0-111.4,0-222.7,0-334.3C86.3,27.2,137.7,27.2,189.7,27.2z"/>
                                <path fill="#FFFFFF" d="M206.8,40.1c13.7,13.7,27.3,27.3,40.9,40.9c-13.3,0-27,0-40.9,0C206.8,67.4,206.8,53.7,206.8,40.1z"/>
                            </g>
                        </svg>
                        <div>한 쪽씩 읽기</div>
                    </div>
                    <div className="ChangeReadSpeedHigh" onClick={()=>changeReadSpeed(2)}>
                        <svg version="1.1" viewBox="0 0 290 388.7" enableBackground="new 0 0 290 388.7">
                            <g>
                                <path className="Border" d="M39.2,208.7c0-54.9,0-109.7,0-164.6c0-9.1,2.3-11.4,11.2-11.4c52.5,0,105,0,157.5-0.1c4.6,0,8,1.5,11.3,4.7 c21,21.2,42.2,42.3,63.4,63.4c3.1,3.1,4.6,6.4,4.6,10.9c-0.1,87.5-0.1,175-0.1,262.4c0,8.2-2.5,10.8-10.7,10.8 c-75.5,0-151,0-226.5,0c-8.2,0-10.7-2.6-10.7-10.8C39.2,319,39.2,263.9,39.2,208.7z M203.1,49.2c-49.6,0-98.7,0-147.7,0 c0,106.6,0,212.9,0,319.3c72,0,143.8,0,215.5,0c0-84,0-167.7,0-251.7c-1.6,0-2.9,0-4.3,0c-17.7,0-35.5,0-53.2,0 c-7.7,0-10.3-2.7-10.3-10.4c0-17.6,0-35.2,0-52.9C203.1,52.1,203.1,50.7,203.1,49.2z M219.5,61.5c0,13,0,26,0,39.1 c13.3,0,26.3,0,39.1,0C245.6,87.6,232.6,74.6,219.5,61.5z"/>
                                <path fill="#FFFFFF" d="M203.1,49.2c0,1.6,0,2.9,0,4.3c0,17.6,0,35.2,0,52.9c0,7.8,2.6,10.4,10.3,10.4c17.7,0,35.5,0,53.2,0 c1.4,0,2.7,0,4.3,0c0,84,0,167.7,0,251.7c-71.8,0-143.5,0-215.5,0c0-106.3,0-212.7,0-319.3C104.4,49.2,153.4,49.2,203.1,49.2z"/>
                                <path fill="#FFFFFF" d="M219.5,61.5c13.1,13,26.1,26.1,39.1,39.1c-12.7,0-25.8,0-39.1,0C219.5,87.5,219.5,74.5,219.5,61.5z"/>
                            </g>
                            <g>
                                <path className="Border" d="M2.6,179.9c0-54.9,0-109.7,0-164.6c0-9.1,2.3-11.4,11.2-11.4c52.5,0,105,0,157.5-0.1c4.6,0,8,1.5,11.3,4.7 c21,21.2,42.2,42.3,63.4,63.4c3.1,3.1,4.6,6.4,4.6,10.9c-0.1,87.5-0.1,175-0.1,262.4c0,8.2-2.5,10.8-10.7,10.8 c-75.5,0-151,0-226.5,0c-8.2,0-10.7-2.6-10.7-10.8C2.6,290.1,2.6,235,2.6,179.9z M166.4,20.4c-49.6,0-98.7,0-147.7,0 c0,106.6,0,212.9,0,319.3c72,0,143.8,0,215.5,0c0-84,0-167.7,0-251.7c-1.6,0-2.9,0-4.3,0c-17.7,0-35.5,0-53.2,0 c-7.7,0-10.3-2.7-10.3-10.4c0-17.6,0-35.2,0-52.9C166.4,23.3,166.4,21.9,166.4,20.4z M182.9,32.7c0,13,0,26,0,39.1 c13.3,0,26.3,0,39.1,0C208.9,58.8,195.9,45.7,182.9,32.7z"/>
                                <path fill="#FFFFFF" d="M166.4,20.4c0,1.6,0,2.9,0,4.3c0,17.6,0,35.2,0,52.9c0,7.8,2.6,10.4,10.3,10.4c17.7,0,35.5,0,53.2,0 c1.4,0,2.7,0,4.3,0c0,84,0,167.7,0,251.7c-71.8,0-143.5,0-215.5,0c0-106.3,0-212.7,0-319.3C67.8,20.4,116.8,20.4,166.4,20.4z"/>
                                <path fill="#FFFFFF" d="M182.9,32.7c13.1,13,26.1,26.1,39.1,39.1c-12.7,0-25.8,0-39.1,0C182.9,58.7,182.9,45.7,182.9,32.7z"/>
                            </g>
                        </svg>
                        <div>한 장씩 읽기</div>  
                    </div>
                    <div className="GotoList"><Link to="/ebook">목록</Link></div>
                </div>
            </article>
            <article className="ViewerSlide">
                <article className="ViewerSlideSection">
                    <div className="ViewerSlideWrap" ref={SlideRef}>
                        {Data.Slide.map((IndexArray, index)=>
                            <div className="SlideItem" key={Data.idx = index}>
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