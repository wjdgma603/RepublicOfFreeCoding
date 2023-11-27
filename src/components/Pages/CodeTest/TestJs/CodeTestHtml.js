import "../TestCss/CodeTestHtml.css"
import { Link } from "react-router-dom";
import { useState} from "react"
import CodeTestListJson from "../CodeTestList.json"

const CodeTestHtml = () => {

    // 모달 띄우기
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listTestNum, setSelectedTest] = useState(null);
    const [answeredQuestions, setAnsweredQuestions] = useState(
        Array.from({ length: 10 }, () => ({ isAnswered: false, isCorrect: false }))
      );
    const openModal = (testNumber) => {
        setSelectedTest(testNumber);
        setIsModalOpen(true);
    }

    //정답 여부 확인
    const checkAnswer = (selectedAnswer) => {
        // json 에서 가져와서 문자열임 숫자로 바꿔준거임
        const correctAnswer = Number(CodeTestListJson.correctList[`correct${listTestNum}`]);
        //문제풀기 버튼 바꾸기
        setAnsweredQuestions((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[listTestNum - 1] = { isAnswered: true, isCorrect: selectedAnswer === correctAnswer };
            return newAnswers;
          });

        if (selectedAnswer === correctAnswer) {
            //정답일시 alert 뜨고 모달 닫기
            alert("정답입니다!");
            setIsModalOpen(false);
        } else {
          alert("틀렸습니다.");
        }
      };

    return ( 
        <section className="CodeTestHtmlSection">
            <article className="CodeTestHtmlArticle">
                <div className="CodeTestHtmlArticleDiv1">
                    <div><span className="CodeTestHtmlArticleDiv1Span">언어</span></div>
                    <div><Link to="/test"><button className="CodeTestHtmlTitleBtn">전체</button></Link></div>
                    <div><Link to="/codeTestHtml"><button className="CodeTestHtmlTitleBtn">HTML</button></Link></div>
                    <div><Link to="/codeTestCss"><button className="CodeTestHtmlTitleBtn">CSS</button></Link></div>
                    <div><Link to="/codeTestJs"><button className="CodeTestHtmlTitleBtn">JAVASCRIPT</button></Link></div>
                    <div><span className="CodeTestHtmlArticleDiv1Span">전자북 찾아보기</span></div>
                    <div><Link to="/ebook"><button className="CodeTestHtmlTitleBtn">전자북 페이지</button></Link></div>
                </div>
                <div className="CodeTestHtmlArticleDiv2">
                    <h1>HTML</h1>
                    {/*HTML, CSS, SCRIPT 바뀔 창들 */}
                    <div className="CodeTestHtmlArticleDiv2Table">
                        <tr className="CodeTestHtmlTitle">
                            <td>중단원</td>
                            <td>주제</td>
                            <td>문제 풀기</td>
                        </tr>
                        <tr className="CodeTestHtmlText">
                            <td>중간 단계</td>
                            <td>
                                <p>{CodeTestListJson.Text.test1}</p>
                                <p>{CodeTestListJson.Text.test2}</p>
                                <p>{CodeTestListJson.Text.test3}</p>
                                <p>{CodeTestListJson.Text.test4}</p>
                                <p>{CodeTestListJson.Text.test5}</p>
                            </td>
                            <td className="CodeTestHtmlPlay">
                            {Array.from({ length: 5 }, (_, index) => (
                                <p key={index}>
                                {answeredQuestions[index].isAnswered ? (
                                    <span className={answeredQuestions[index].isCorrect ? "codeTestHtmlCorrect" : "codeTestHtmlNoCorrect"}>
                                    {answeredQuestions[index].isCorrect ? "정답 완료" : "오답 완료"}
                                    </span>
                                ) : (
                                    <span className="CodeTestHtmlPlayBtn" onClick={() => openModal(index + 1)}>문제 풀기</span>
                                )}
                                </p>
                            ))}
                            </td>
                        </tr>
                        <tr className="CodeTestHtmlText">
                            <td>상급 단계</td>
                            <td>
                            <p>{CodeTestListJson.Text.test6}</p>
                                <p>{CodeTestListJson.Text.test7}</p>
                                <p>{CodeTestListJson.Text.test8}</p>
                                <p>{CodeTestListJson.Text.test9}</p>
                                <p>{CodeTestListJson.Text.test10}</p>
                            </td>
                            <td className="CodeTestHtmlPlay">
                            {Array.from({ length: 5 }, (_, index) => (
                                <p key={index}>
                                {answeredQuestions[index + 5].isAnswered ? (
                                    <span className={answeredQuestions[index + 5].isCorrect ? "codeTestListCorrect" : "codeTestListNoCorrect"}>
                                    {answeredQuestions[index + 5].isCorrect ? "정답 완료" : "오답 완료"}
                                    </span>
                                ) : (
                                    <span className="CodeTestHtmlPlayBtn" onClick={() => openModal(index + 6)}>문제 풀기</span>
                                )}
                                </p>
                            ))}
                            </td>
                        </tr>
                        {/* 모달, 문제 내용*/}
                        {isModalOpen && (
                            <div className="listModal">
                                <div className="opacityModal"></div>
                                <div className="listModalWrap">
                                    <div className="listModalCloseWrap">
                                        <button className="listModalClose" onClick={() => setIsModalOpen(false)}>X</button>
                                    </div>

                                    <p className="listModalTitle">{CodeTestListJson.ListTestModal[`listTest${listTestNum}`]}</p>
                                    {Array.from({ length: 4 }, (_, index) => (
                                    <p key={index} className="listModalContent" onClick={() => checkAnswer(index + 1)}>
                                        {CodeTestListJson.ListTestModal[`listTest${listTestNum}_${index + 1}`]}
                                    </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default CodeTestHtml;