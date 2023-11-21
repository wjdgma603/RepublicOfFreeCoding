import "./CodeTestList.css"

const CodeTestList = () => {
    return ( 
        <section className="CodeTestSection">
            <article className="CodeTestArticle">
                <div className="CodeTestArticleDiv1">
                    <div><span className="CodeTestArticleDiv1Span">언어</span><span>초기화</span></div>
                    <div><button className="CodeTestTitleBtn">전체</button></div>
                    <div><button className="CodeTestTitleBtn">HTML</button></div>
                    <div><button className="CodeTestTitleBtn">CSS</button></div>
                    <div><button className="CodeTestTitleBtn">JAVA SCRIPT</button></div>
                    <div><span className="CodeTestArticleDiv1Span">전자북 찾아보기</span><span>초기화</span></div>
                </div>
                <div>HTML</div>
            </article>
        </section>
     );
}
 
export default CodeTestList;