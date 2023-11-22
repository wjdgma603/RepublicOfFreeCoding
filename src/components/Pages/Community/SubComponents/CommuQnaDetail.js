import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CommuQnaDetail.css";
import { qnaPost, updateQnaPost } from '../SubComponents/CommuData';

const CommuQnaDetail = () => {
  const { id } = useParams();
  const [qnaPosts, setQnaPosts] = useState(qnaPost);
  const selectedPostIndex = qnaPosts.postIndex.findIndex((post) => post.id === parseInt(id));

  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [isEditingAnswer, setIsEditingAnswer] = useState(false);

  const [editedContent, setEditedContent] = useState(
    () => localStorage.getItem(`editedContent_${id}`) || qnaPosts.postIndex[selectedPostIndex].content
  );
  const [editedAnswer, setEditedAnswer] = useState(
    () => localStorage.getItem(`editedAnswer_${id}`) || qnaPosts.postIndex[selectedPostIndex].answer
  );
  const [editedQuestion, setEditedQuestion] = useState(
    () => localStorage.getItem(`editedQuestion_${id}`) || qnaPosts.postIndex[selectedPostIndex].question
  );

  useEffect(() => {
    localStorage.setItem(`editedContent_${id}`, editedContent);
    localStorage.setItem(`editedAnswer_${id}`, editedAnswer);
    localStorage.setItem(`editedQuestion_${id}`, editedQuestion);
  }, [id, editedContent, editedAnswer, editedQuestion]);

  const toggleEditQuestion = () => {
    setIsEditingQuestion((prev) => !prev);
  
    if (!isEditingQuestion) {
      setEditedQuestion(qnaPosts.postIndex[selectedPostIndex].title);
      setEditedContent(qnaPosts.postIndex[selectedPostIndex].content);
    }
  };

  const toggleEditAnswer = () => {
    setIsEditingAnswer((prev) => !prev);
  };

  const handleEditComplete = () => {
    updateQnaPost(parseInt(id), editedQuestion, editedAnswer);
    setIsEditingQuestion(false);
    setIsEditingAnswer(false);
  };

  return (
    <div className="CommuSection">
      <div>
        <div>
          <div>커뮤니티</div>
          <div>초기화</div>
        </div>
        <ul className="CommuNav">
          <li>
            <Link to="/community">공지사항</Link>
          </li>
          <li>
            <Link to="/community/qna">문의사항</Link>
          </li>
          <li>
            <Link to="/community/faq">FAQ</Link>
          </li>
        </ul>
      </div>

      <div className="CommuRight">
        <div className="CommuQnaTitleWrap">
          <div className="CommuQnaTitle">
            <div>
              {isEditingQuestion ? (
                <textarea
                  value={editedQuestion}
                  onChange={(e) => setEditedQuestion(e.target.value)}
                />
              ) : (
                qnaPosts.postIndex[selectedPostIndex].title
              )}
            </div>
            <div>{qnaPosts.postIndex[selectedPostIndex].date}</div>
          </div>
        </div>
        <div className="CommuQnaText">
          {isEditingQuestion ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            qnaPosts.postIndex[selectedPostIndex].content
          )}
          <button onClick={isEditingQuestion ? handleEditComplete : toggleEditQuestion}>
            {isEditingQuestion ? "질문수정완료" : "질문수정"}
          </button>
        </div>

        <div className="CommuQnaTitle">
          <div>문의답변</div>
          <div>{qnaPosts.postIndex[selectedPostIndex].answerDate}</div>
        </div>
        <div className="CommuQnaText">
          {isEditingAnswer ? (
            <>
              <textarea
                value={editedAnswer}
                onChange={(e) => setEditedAnswer(e.target.value)}
              />
        
            </>
          ) : (
            qnaPosts.postIndex[selectedPostIndex].answer
          )}
        </div>

        <div className="CommuQnaButtonWrap">
          <div></div>
          <Link to="/community/qna">
            <button className="CommuQnaButton">목록보기</button>
          </Link>

          <div>
            <button onClick={isEditingAnswer ? handleEditComplete : toggleEditAnswer}>
              {isEditingAnswer ? "답변수정완료" : "답변수정"}
            </button>
            <button>답변삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;

















// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import "./CommuQnaDetail.css";
// import CommuData from './CommuData';

// const CommuQnaDetail = () => {
//   const { id } = useParams(); // URL 파라미터로부터 id 추출
//   const { qnaPosts } = CommuData();

//   // id에 해당하는 게시글 찾기
//   const selectedQna = qnaPosts.postIndex.find((post) => post.id === parseInt(id));

//   // id에 해당하는 게시글이 없을 경우 처리
//   if (!selectedQna) {
//     return <div>게시글이 없습니다.</div>;
//   }

//   return (
//     <div className="CommuSection">
//       <div>
//         <div>
//           <div>커뮤니티</div>
//           <div>초기화</div>
//         </div>
//         <ul className="CommuNav">
//           <li>
//             <Link to="/community">공지사항</Link>
//           </li>
//           <li>
//             <Link to="/community/qna">문의사항</Link>
//           </li>
//           <li>
//             <Link to="/community/faq">FAQ</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="CommuRight">
        // <h1>문의사항</h1>
        // <div className="CommuQnaTitleWrap">
        //   {/* 질문글 부분 */}
        //   <div className="CommuQnaTitle">
        //     <div>{selectedQna.title}</div>
        //     <div>{selectedQna.date}</div>
        //   </div>
        // </div>
        // <div className="CommuQnaText">{selectedQna.content}</div>

//         {/* 답변글 부분 */}
//         <div className="CommuQnaTitle">
//           <div>문의답변</div>
//           <div>{selectedQna.answerDate}</div>
//         </div>
//         <div className="CommuQnaText">{selectedQna.answer}</div>

//         <div className="CommuQnaButtonWrap">
//           <div>
//             <button>답변수정</button>
//             <button>답변삭제</button>
//           </div>
//           <Link to="/community/qna">
//             <button className="CommuQnaButton">목록보기</button>
//           </Link>
//           <button>글수정</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommuQnaDetail;
