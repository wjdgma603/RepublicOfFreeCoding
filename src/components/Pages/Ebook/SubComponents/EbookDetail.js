import { useLocation } from "react-router-dom";


const EbookDetail = () => {
    const location = useLocation();
    const Ebook = location.state.Ebook;
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
                    <img src={require(`../images/Book${Ebook.id}.jpg`)} alt={Ebook.BookName}/>
                </div>
                <div className="ExplainEbookViewer">
                    <div className="Author">{Ebook.Author} 저자&#40;글&#41;</div>
                    <div className="Publisher">{Ebook.Publisher} · {Ebook.PublicationDate}</div>
                    <div className="AuthorExplain">{Ebook.AuthorExplain}</div>
                </div>
            </article>
            <article className="ExplainWrap">
                <div className="BookSuggest">{Ebook.BookSuggest[0]}{Ebook.BookSuggest[1]}</div>
                <div className="PublisherSuggest">출판사 서평 {Ebook.PublisherSuggest}</div>
            </article>
            <article className="BookBasicInfo">
                <div className="Title">기본정보</div>
                <div className="BasicInfo">
                    <div className="ISBN">{Ebook.BasicData[0]}</div>
                    <div className="PublicationDate">{Ebook.PublicationDate}</div>
                    <div className="TotalPage">{Ebook.BasicData[1]}</div>
                    <div className="NumberOfTheBook">{Ebook.BasicData[2]}</div>
                </div>
            </article>
            <></>
        </section>
     );
}
 
export default EbookDetail;