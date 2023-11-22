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
                    <div><button className="CodeTestTitleBtn">전자북 페이지</button></div>
                </div>
                <div className="CodeTestArticleDiv2">
                    <h1>HTML</h1>
                    <div className="CodeTestArticleDiv2Table">
                        <tr className="CodeTestTitle">
                            <td>중단원</td>
                            <td>주제</td>
                            <td>문제 풀기</td>
                        </tr>
                        <tr className="CodeTestText">
                            <td>중간 단계</td>
                            <td>
                                <p>01. 시멘틱태그가 아닌 것은?</p>
                                <p>02. Check Box를 만들기 위한 올바른 HTML을 고르세요.</p>
                                <p>03. input type 중 알맞지 않은 것은?</p>
                                <p>04. tag의 스펠링이 틀린 것은?</p>
                                <p>05. html5 에서 새롭게 도입된 요소 중 하나는?</p>
                            </td>
                            <td className="CodeTestPlay">
                                <p>문제 풀기</p>
                                <p>문제 풀기</p>
                                <p>문제 풀기</p>
                                <p>문제 풀기</p>
                                <p>문제 풀기</p>
                            </td>
                        </tr>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default CodeTestList;