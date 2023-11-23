import "./CodeTestCss.css"
import { Link } from "react-router-dom";

const CodeTestCss = () => {
    return ( 
        <section className="CodeTestSection">
            <article className="CodeTestArticle">
                <div className="CodeTestArticleDiv1">
                    <div><span className="CodeTestArticleDiv1Span">언어</span><span>초기화</span></div>
                    <div><Link to="/test"><button className="CodeTestTitleBtn">전체</button></Link></div>
                    <div><Link to="/codeTestHtml"><button className="CodeTestTitleBtn">HTML</button></Link></div>
                    <div><Link to="/codeTestCss"><button className="CodeTestTitleBtn">CSS</button></Link></div>
                    <div><Link to="/codeTestJs"><button className="CodeTestTitleBtn">JAVASCRIPT</button></Link></div>
                    <div><span className="CodeTestArticleDiv1Span">전자북 찾아보기</span><span>초기화</span></div>
                    <div><Link to="/ebook/*"><button className="CodeTestTitleBtn">전자북 페이지</button></Link></div>
                </div>
                <div className="CodeTestArticleDiv2">
                    <h1>CSS</h1>
                    {/*HTML, CSS, SCRIPT 바뀔 창들 */}
                    <div className="CodeTestArticleDiv2TableHTML">
                        <tr className="CodeTestTitle">
                            <td>중단원</td>
                            <td>주제</td>
                            <td>문제 풀기</td>
                        </tr>
                        <tr className="CodeTestText">
                            <td>중간 단계</td>
                            <td>
                                <p>01. 다음 중 존재하지 않는 속성을 고르세요.</p>
                                <p>02. background-size 속성에 대한 설명으로 올바른것을 고르시오.</p>
                                <p>03. 선택자의 우선순위가 제일 낮은 것은?</p>
                                <p>04. 캐모마일의 텍스트 색상을 red로 변경하려고 할 때 올바른 사용은?</p>
                                <p>05. 다음 중 a 태그를 선택해야 할 때 선택자로 올바르지 않은 것은?</p>
                            </td>
                            <td className="CodeTestPlay">
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                            </td>
                        </tr>
                        <tr className="CodeTestText">
                            <td>상급 단계</td>
                            <td>
                                <p>06. 다음과 같은 선택자를 사용했을 때, 선택되는 요소는?</p>
                                <p>07. CSS 속성 중 설명과 맞지 않는 속성을 고르세요.</p>
                                <p>08. html5 에서 새롭게 추가된 태그를 고르세요.</p>
                                <p>09. meta 태그에 대한 설명으로 틀린 것을 고르세요.</p>
                                <p>10. noscript 태그에 대한 설명으로 틀린 것을 고르세요.</p>
                            </td>
                            <td className="CodeTestPlay">
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
 
export default CodeTestCss;