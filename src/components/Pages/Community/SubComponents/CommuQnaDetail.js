// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import "./CommuQnaDetail.css";
// import { qnaPost, updateQnaPost } from '../SubComponents/CommuData';

// const CommuQnaDetail = () => {
//   const { id } = useParams();
//   const [qnaPosts, setQnaPosts] = useState(qnaPost);
//   const selectedPostIndex = qnaPosts.postIndex.findIndex((post) => post.id === parseInt(id));


//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(
//     () => localStorage.getItem(`editedContent_${id}`) || qnaPosts.postIndex[selectedPostIndex].content
//   );
//   const [editedAnswer, setEditedAnswer] = useState(
//     () => localStorage.getItem(`editedAnswer_${id}`) || qnaPosts.postIndex[selectedPostIndex].answer
//   );
//   const [editedQuestion, setEditedQuestion] = useState(
//     () => localStorage.getItem(`editedQuestion_${id}`) || qnaPosts.postIndex[selectedPostIndex].question
//   );

//   useEffect(() => {
//     localStorage.setItem(`editedContent_${id}`, editedContent);
//     localStorage.setItem(`editedAnswer_${id}`, editedAnswer);
//     localStorage.setItem(`editedQuestion_${id}`, editedQuestion);
//   }, [id, editedContent, editedAnswer, editedQuestion]);

//   const toggleEdit = () => {
//     setIsEditing((prev) => !prev);
//   };

//   const handleEditComplete = () => {
//     updateQnaPost(parseInt(id), editedQuestion, editedAnswer);

//     setIsEditing(false);
//   };

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
//         <h1>문의사항</h1>
//         <div className="CommuQnaTitleWrap">
//           <div className="CommuQnaTitle">
//             <div>{qnaPosts.postIndex[selectedPostIndex].title}</div>
//             <div>{qnaPosts.postIndex[selectedPostIndex].date}</div>
//           </div>
//         </div>

//         {/* 질문글 부분 */}
//         <div className="CommuQnaText">
//           {isEditing ? (
//             <textarea
//               value={editedQuestion}
//               onChange={(e) => setEditedQuestion(e.target.value)}
//             />
//           ) : (
//             qnaPosts.postIndex[selectedPostIndex].content
//           )}
//         </div>
        
//         <div className="CommuQnaTitle">
//           <div>문의답변</div>
//           <div>{qnaPosts.postIndex[selectedPostIndex].answerDate}</div>
//         </div>
//         <div className="CommuQnaText">
//           {isEditing ? (
//             <textarea
//               value={editedAnswer}
//               onChange={(e) => setEditedAnswer(e.target.value)}
//             />
//           ) : (
//             qnaPosts.postIndex[selectedPostIndex].answer
//           )}
//         </div>

//         <div className="CommuQnaButtonWrap">
//           <div>
//             <button onClick={isEditing ? handleEditComplete : toggleEdit}>
//               {isEditing ? "수정완료" : "답변수정"}
//             </button>
//             <button>답변삭제</button>
//           </div>
//           <Link to="/community/qna"><button className="CommuQnaButton">목록보기</button></Link>
//           <button onClick={isEditing ? handleEditComplete : toggleEdit}>글수정</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommuQnaDetail;

import React from "react";
import { Link } from "react-router-dom";
import "./CommuQnaDetail.css";


const CommuQnaDetail = () => {


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
        <h1>문의사항</h1>
        <div className="CommuQnaTitleWrap">
          <div className="CommuQnaTitle">
            <div>title</div>
            <div>date</div>
          </div>
        </div>

        {/* 질문글 부분 */}
        <div className="CommuQnaText">
         text
        </div>
        
        <div className="CommuQnaTitle">
          <div>문의답변</div>
          <div>answerDate</div>
        </div>
        <div className="CommuQnaText">answer</div>

        <div className="CommuQnaButtonWrap">
          <div>
            <button>답변수정</button>
            <button>답변삭제</button>
          </div>
          <Link to="/community/qna"><button className="CommuQnaButton">목록보기</button></Link>
          <button>글수정</button>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;
