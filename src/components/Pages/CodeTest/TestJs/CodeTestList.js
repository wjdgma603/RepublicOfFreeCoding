import "../TestCss/CodeTestList.css"
import { Link } from "react-router-dom";
import { useState} from "react"
import CodeTestListJson from "../CodeTestList.json"

const CodeTestList = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listTestNum, setSelectedTest] = useState(null);

    const openModal = (testNumber) => {
        setSelectedTest(testNumber);
        setIsModalOpen(true);
    }

    return ( 
        <section className="CodeTestListSection">
            <article className="CodeTestListArticle">
                <div className="CodeTestListArticleDiv1">
                    <div><span className="CodeTestListArticleDiv1Span">언어</span><span>초기화</span></div>
                    <div><Link to="/test"><button className="CodeTestListTitleBtn">전체</button></Link></div>
                    <div><Link to="/codeTestHtml"><button className="CodeTestListTitleBtn">HTML</button></Link></div>
                    <div><Link to="/codeTestCss"><button className="CodeTestListTitleBtn">CSS</button></Link></div>
                    <div><Link to="/codeTestJs"><button className="CodeTestListTitleBtn">JAVASCRIPT</button></Link></div>
                    <div><span className="CodeTestListArticleDiv1Span">전자북 찾아보기</span><span>초기화</span></div>
                    <div><Link to="/ebook"><button className="CodeTestListTitleBtn">전자북 페이지</button></Link></div>
                </div>
                <div className="CodeTestListArticleDiv2">
                    <h1>ALL</h1>
                    {/*HTML, CSS, SCRIPT 바뀔 창들 */}
                    <div className="CodeTestListArticleDiv2Table">
                        <tr className="CodeTestListTitle">
                            <td>중단원</td>
                            <td>주제</td>
                            <td>문제 풀기</td>
                        </tr>
                        <tr className="CodeTestListText">
                            <td>중간 단계</td>
                            <td>
                                <p>{CodeTestListJson.Text.test1}</p>
                                <p>{CodeTestListJson.Text.test2}</p>
                                <p>{CodeTestListJson.Text.test3}</p>
                                <p>{CodeTestListJson.Text.test4}</p>
                                <p>{CodeTestListJson.Text.test5}</p>
                            </td>
                            <td className="CodeTestListPlay">
                                {Array.from({ length: 5 }, (_, index) => (
                                <p key={index}><span onClick={() => openModal(index + 1)}>문제 풀기</span></p>
                                ))}
                            </td>
                        </tr>
                        <tr className="CodeTestListText">
                            <td>상급 단계</td>
                            <td>
                                <p>{CodeTestListJson.Text.test6}</p>
                                <p>{CodeTestListJson.Text.test7}</p>
                                <p>{CodeTestListJson.Text.test8}</p>
                                <p>{CodeTestListJson.Text.test9}</p>
                                <p>{CodeTestListJson.Text.test10}</p>
                            </td>
                            <td className="CodeTestListPlay">
                            {Array.from({ length: 5 }, (_, index) => (
                                <p key={index}><span onClick={() => openModal(index + 6)}>문제 풀기</span></p>
                                ))}
                            </td>
                        </tr>
                        {/* 모달, 문제 내용*/}
                        {isModalOpen && (
                            <div className="listModal">
                                <div className="opacityModal"></div>
                                <div className="listModalWrap">
                                    <p className="listModalTitle">{CodeTestListJson.ListTestModal[`listTest${listTestNum}`]}</p>
                                    <p className="listModalContent">{CodeTestListJson.ListTestModal[`listTest${listTestNum}_1`]}</p>
                                    <p className="listModalContent">{CodeTestListJson.ListTestModal[`listTest${listTestNum}_2`]}</p>
                                    <p className="listModalContent">{CodeTestListJson.ListTestModal[`listTest${listTestNum}_3`]}</p>
                                    <p className="listModalContent">{CodeTestListJson.ListTestModal[`listTest${listTestNum}_4`]}</p>
                                    <input></input>
                                    <button onClick={() => setIsModalOpen(false)}>문제 닫기</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default CodeTestList;