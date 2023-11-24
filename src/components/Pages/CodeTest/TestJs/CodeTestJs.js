import "../TestCss/CodeTestJs.css"
import { Link } from "react-router-dom";

const CodeTestJs = () => {
    return ( 
        <section className="CodeTestJsSection">
            <article className="CodeTestJsArticle">
                <div className="CodeTestJsArticleDiv1">
                    <div><span className="CodeTestJsArticleDiv1Span">언어</span><span>초기화</span></div>
                    <div><Link to="/test"><button className="CodeTestJsTitleBtn">전체</button></Link></div>
                    <div><Link to="/codeTestHtml"><button className="CodeTestJsTitleBtn">HTML</button></Link></div>
                    <div><Link to="/codeTestCss"><button className="CodeTestJsTitleBtn">CSS</button></Link></div>
                    <div><Link to="/codeTestJs"><button className="CodeTestJsTitleBtn">JAVASCRIPT</button></Link></div>
                    <div><span className="CodeTestJsArticleDiv1Span">전자북 찾아보기</span><span>초기화</span></div>
                    <div><Link to="/ebook"><button className="CodeTestJsTitleBtn">전자북 페이지</button></Link></div>
                </div>
                <div className="CodeTestJsArticleDiv2">
                    <h1>JAVASCRIPT</h1>
                    {/*HTML, CSS, SCRIPT 바뀔 창들 */}
                    <div className="CodeTestJsArticleDiv2Table">
                        <tr className="CodeTestJsTitle">
                            <td>중단원</td>
                            <td>주제</td>
                            <td>문제 풀기</td>
                        </tr>
                        <tr className="CodeTestJsText">
                            <td>중간 단계</td>
                            <td>
                                <p>01. 시멘틱태그가 아닌 것은?</p>
                                <p>02. Check Box를 만들기 위한 올바른 HTML을 고르세요.</p>
                                <p>03. input type 중 알맞지 않은 것은?</p>
                                <p>04. tag의 스펠링이 틀린 것은?</p>
                                <p>05. html5 에서 새롭게 도입된 요소 중 하나는?</p>
                            </td>
                            <td className="CodeTestJsPlay">
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                            </td>
                        </tr>
                        <tr className="CodeTestJsText">
                            <td>상급 단계</td>
                            <td>
                                <p>06. iframe의 기능으로 알맞은 것을 고르세요.</p>
                                <p>07. html5 에서 더 이상 지원되지 않는 태그를 고르세요.</p>
                                <p>08. html5 에서 새롭게 추가된 태그를 고르세요.</p>
                                <p>09. meta 태그에 대한 설명으로 틀린 것을 고르세요.</p>
                                <p>10. noscript 태그에 대한 설명으로 틀린 것을 고르세요.</p>
                            </td>
                            <td className="CodeTestJsPlay">
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                            </td>
                        </tr>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default CodeTestJs;