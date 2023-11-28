import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const EbookDetail = () => {
    const location = useLocation();
    const Ebook = location.state.Ebook;

    useEffect(()=>{
        const BackGround = document.querySelector('.BackGround')
        BackGround.style.backgroundImage = `url('${require(`../images/List/Book${Ebook.id}.jpg`)}')`
    },[Ebook])
    
    let suggestArray = ["집중돼요","도움돼요","쉬웠어요","최고에요","추천해요"]
    return ( 
        <section className="EbookDetailPage">
            <article className="TitleWrap">
                <div className="Title">{Ebook.BookName}</div>
                <div className="SubTitle">{Ebook.SubTitle}</div>
            </article>
            <article className="MainItemWrap">
                <div className="Suggest">
                    <div className="Review">
                        <div className="ReviewScore">
                            <svg version="1.1" x="0px" y="0px"viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                                <path fill="#01D57A" d="M492.1,194.1c0,2.8,0,5.7,0,8.5c-1.1,5-4,8.5-7.9,11.8c-24.3,20.6-48.5,41.1-72.8,61.7 c-12.6,10.7-25.2,21.4-37.8,32.1c-3.3,2.8-3.2,6.1-2.3,9.9c5.6,22.2,11.1,44.3,16.6,66.5c6.5,26,13.1,51.9,19.4,77.9 c2,8-0.7,15.2-7,19c-6.1,3.7-12.3,3.5-18.3-0.3c-10.6-6.5-21.1-13.2-31.6-19.8c-31.2-19.5-62.6-38.9-93.7-58.7 c-4.9-3.1-8.9-3.1-13.8,0.1c-39.8,25.2-79.7,50.1-119.7,75c-4.3,2.7-8.4,6.1-14,6.2c-11.8,0.2-19.7-9.1-16.9-20.6 c4.7-19.9,9.9-39.7,14.8-59.6c7-28,13.8-56,21.1-83.9c1.6-6.2,0.3-10.1-4.7-14.2c-31.1-25.9-61.7-52.3-92.7-78.3 c-6.1-5.2-12-10.7-18.4-15.6c-3.1-2.4-3.2-6-4.6-9c0-3.2,0-6.3,0-9.5c2-9,8.5-11.2,16.8-11.9c20.1-1.6,40.2-2.9,60.2-4.3 c16-1.1,32-2.3,48-3.3c12.7-0.7,25.4-1.7,38.1-2.8c4.1-0.3,6-2.9,7.4-6.3c5.5-13.6,10.8-27.2,16.4-40.8C208,91.6,220.7,59.2,234,27 c2.7-6.6,7.6-10.7,15.1-11c7.9-0.3,13.9,3.5,17,11c11,26.8,21.7,53.8,32.6,80.6c7.4,18.2,14.8,36.5,21.9,54.8 c2.3,5.9,5.6,8.4,12.1,8.8c20.1,1.4,40.2,2.7,60.2,4.2c15.7,1.2,31.4,2.1,47.1,3.2c13,0.9,26.1,1.5,39.1,2.9 C486.6,182.4,490.9,186.6,492.1,194.1z"/>
                            </svg> 
                            {Ebook.Review[0]}
                        </div>
                        <div className="ReviewTotal">&#40;<span>{Ebook.Review[1]}</span>개의 리뷰&#41;</div>
                    </div>
                    <div className="Buyer">
                        <div className="BuyerReview">{suggestArray[Ebook.Buyers[0]]}</div>
                        <div className="BuyerPer">&#40;<span>{Ebook.Buyers[1]}&#37;</span>의 구매자&#41;</div>
                    </div>
                </div>
                <div className="ImgWrap">
                    <div className="BackGround"></div>
                    <img src={require(`../images/List/Book${Ebook.id}.jpg`)} alt={Ebook.BookName}/>
                </div>
                <div className="ExplainEbookViewer">
                    <div className="Author">{Ebook.Author} 저자&#40;글&#41;</div>
                    <div className="Publisher">{Ebook.Publisher} · {Ebook.PublicationDate}</div>
                    <div className="AuthorExplain">{Ebook.AuthorExplain}</div>
                    <div className="GotoEbookPage">
                        <Link to={`/ebook/viewer/${Ebook.id}`} state={{Ebook : Ebook}}>
                            <svg viewBox="0 0 15 19">
                                <path d="M2.14286 0C1.99286 0 1.86429 0.022556 1.73571 0.0676679C0.9 0.248116 0.235714 0.947351 0.0642857 1.82703C0 1.96237 0 2.09771 0 2.2556V14.6614C0 16.5335 1.43571 18.0448 3.21429 18.0448H15V15.7892H3.21429C2.61429 15.7892 2.14286 15.293 2.14286 14.6614C2.14286 14.0298 2.61429 13.5336 3.21429 13.5336H15V1.1278C15 0.496232 14.5286 0 13.9286 0H12.8571V6.76679L10.7143 4.5112L8.57143 6.76679V0H2.14286Z" fill="#00D67A"/>
                            </svg>
                            E-Book 독서 시작하기
                        </Link>
                    </div>
                </div>
            </article>
            <article className="ExplainWrap">
                <div className="BookSuggest">
                    <div className="BookSuggestText">
                        <div className="Title">{Ebook.BookSuggest[0]}</div>
                        <div className="Content">{Ebook.BookSuggest[1]}</div>
                    </div>
                    <div className="BookSuggestImg">
                        <img src={require(`../images/Common/${Ebook.Category.toUpperCase()}.png`)} alt={Ebook.Category}/>
                    </div>
                </div>
                <div className="PublisherSuggest">
                    <div className="PublisherSuggestImg">
                        <img src={require(`../images/Common/Books.png`)} alt="Books"/>
                    </div>
                    <div className="PublisherSuggestText">
                        <div className="Title">출판사 서평</div>
                        <div className="Content">{Ebook.PublisherSuggest}</div>
                    </div>
                </div>
            </article>
            <article className="BookBasicInfo">
                <div className="Title">기본정보</div>
                <div className="BasicInfo">
                    <div className="ISBN"><span>국제 표준 도서 번호 &#40;ISBN&#41;</span>{Ebook.BasicData[0]}</div>
                    <div className="PublicationDate"><span>발행&#40;출시&#41;일자</span>{Ebook.PublicationDate}</div>
                    <div className="TotalPage"><span>쪽수</span>{Ebook.BasicData[1]}쪽</div>
                    <div className="NumberOfTheBook"><span>총 권수</span>{Ebook.BasicData[2]}권</div>
                </div>
            </article>
            <div className="GotoList">
                <Link to='/ebook'>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none">
                        <g clipPath="url(#clip0_132_659)">
                            <path d="M0.0332031 0.748742C0.254692 0.268064 0.523307 0.0701374 0.923872 0.103125C1.32444 0.136113 1.62133 0.423578 1.66845 0.81943C1.71558 1.22471 1.47995 1.58286 1.09352 1.70067C0.716521 1.81378 0.320668 1.64884 0.136879 1.30482C0.103891 1.23885 0.0709034 1.17287 0.0379157 1.11161C0.0332031 0.989082 0.0332031 0.871268 0.0332031 0.748742Z" fill="#00D67A"/>
                            <path d="M0.0332031 7.33239C0.179292 6.97895 0.400781 6.71505 0.815484 6.6962C1.2349 6.67735 1.58834 6.9601 1.65903 7.35596C1.73443 7.78009 1.50823 8.1618 1.10295 8.29375C0.707096 8.42099 0.28768 8.2372 0.108604 7.85077C0.085041 7.79894 0.0567658 7.7471 0.0332031 7.69055C0.0332031 7.57273 0.0332031 7.45021 0.0332031 7.33239Z" fill="#00D67A"/>
                            <path d="M0.0332031 13.9109C0.0567658 13.8685 0.0803285 13.8214 0.103891 13.779C0.278255 13.4114 0.655258 13.2182 1.02755 13.303C1.41398 13.3925 1.68259 13.7271 1.67788 14.1136C1.67317 14.4953 1.39984 14.8346 1.03226 14.9053C0.62227 14.9854 0.24998 14.7874 0.085041 14.3963C0.0661909 14.3539 0.0473407 14.3162 0.0332031 14.2738C0.0332031 14.1513 0.0332031 14.0287 0.0332031 13.9109Z" fill="#00D67A"/>
                            <path d="M14.0341 1.74314C11.3244 1.74314 8.61001 1.74314 5.9003 1.74314C5.33008 1.74314 4.96251 1.38498 4.99078 0.861893C5.00963 0.489603 5.28767 0.173863 5.65525 0.117313C5.76364 0.0984625 5.88145 0.09375 5.98984 0.09375C11.3621 0.09375 16.7297 0.09375 22.102 0.09375C22.2528 0.09375 22.4036 0.103175 22.545 0.145588C22.9078 0.253976 23.1435 0.621554 23.1058 0.998557C23.0681 1.38498 22.7618 1.6913 22.3706 1.73843C22.2811 1.74785 22.1915 1.74314 22.102 1.74314C19.4111 1.74314 16.725 1.74314 14.0341 1.74314Z" fill="#00D67A"/>
                            <path d="M14.0525 13.2793C16.7622 13.2793 19.4767 13.2793 22.1864 13.2793C22.6576 13.2793 22.9639 13.4914 23.077 13.8872C23.209 14.3538 22.9027 14.8344 22.422 14.9098C22.3089 14.9287 22.1958 14.9287 22.0874 14.9287C16.7245 14.9287 11.3617 14.9287 5.99882 14.9287C5.84802 14.9287 5.69722 14.9193 5.55584 14.8816C5.18355 14.7732 4.96206 14.4103 4.99976 14.0097C5.03275 13.6374 5.33906 13.3358 5.72078 13.2887C5.81503 13.2793 5.91399 13.2793 6.01296 13.2793C8.68968 13.2793 11.3711 13.2793 14.0525 13.2793Z" fill="#00D67A"/>
                            <path d="M14.0529 8.33086C11.3621 8.33086 8.67591 8.33086 5.98505 8.33086C5.85781 8.33086 5.72586 8.33557 5.60334 8.30729C5.20748 8.21776 4.95772 7.85018 4.99071 7.43076C5.02369 7.03962 5.34415 6.72859 5.74943 6.70032C5.82954 6.69561 5.91436 6.69561 5.99919 6.69561C11.3621 6.69561 16.7249 6.69561 22.0878 6.69561C22.2244 6.69561 22.3611 6.69089 22.4931 6.71917C22.8795 6.80871 23.1434 7.181 23.1104 7.57214C23.0774 7.98213 22.757 8.29787 22.347 8.32614C22.248 8.33086 22.1538 8.33086 22.0548 8.33086C19.3828 8.33086 16.7155 8.33086 14.0529 8.33086Z" fill="#00D67A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_132_659">
                                <rect width="23.0773" height="15" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    목록으로 돌아가기
                </Link>
            </div>
        </section>
     );
}
 
export default EbookDetail;