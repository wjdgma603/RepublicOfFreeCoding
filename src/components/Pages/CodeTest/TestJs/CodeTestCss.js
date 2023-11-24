import "../TestCss/CodeTestCss.css"
import { Link } from "react-router-dom";
import CodeTestListJson from "../CodeTestList.json"

const CodeTestCss = () => {
    return ( 
        <section className="CodeTestCssSection">
            <article className="CodeTestCssArticle">
                <div className="CodeTestCssArticleDiv1">
                    <div><span className="CodeTestCssArticleDiv1Span">언어</span><span>초기화</span></div>
                    <div><Link to="/test"><button className="CodeTestCssTitleBtn">전체</button></Link></div>
                    <div><Link to="/codeTestHtml"><button className="CodeTestCssTitleBtn">HTML</button></Link></div>
                    <div><Link to="/codeTestCss"><button className="CodeTestCssTitleBtn">CSS</button></Link></div>
                    <div><Link to="/codeTestJs"><button className="CodeTestCssTitleBtn">JAVASCRIPT</button></Link></div>
                    <div><span className="CodeTestCssArticleDiv1Span">전자북 찾아보기</span><span>초기화</span></div>
                    <div><Link to="/ebook"><button className="CodeTestCssTitleBtn">전자북 페이지</button></Link></div>
                </div>
                <div className="CodeTestCssArticleDiv2">
                    <h1>CSS</h1>
                    {/*HTML, CSS, SCRIPT 바뀔 창들 */}
                    <div className="CodeTestCssArticleDiv2Table">
                        <tr className="CodeTestCssTitle">
                            <td>중단원</td>
                            <td>주제</td>
                            <td>문제 풀기</td>
                        </tr>
                        <tr className="CodeTestCssText">
                            <td>중간 단계</td>
                            <td>
                                <p>{CodeTestListJson.CssText.test1}</p>
                                <p>{CodeTestListJson.CssText.test2}</p>
                                <p>{CodeTestListJson.CssText.test3}</p>
                                <p>{CodeTestListJson.CssText.test4}</p>
                                <p>{CodeTestListJson.CssText.test5}</p>
                            </td>
                            <td className="CodeTestCssPlay">
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                            </td>
                        </tr>
                        <tr className="CodeTestCssText">
                            <td>상급 단계</td>
                            <td>
                                <p>{CodeTestListJson.CssText.test6}</p>
                                <p>{CodeTestListJson.CssText.test7}</p>
                                <p>{CodeTestListJson.CssText.test8}</p>
                                <p>{CodeTestListJson.CssText.test9}</p>
                                <p>{CodeTestListJson.CssText.test10}</p>
                            </td>
                            <td className="CodeTestCssPlay">
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