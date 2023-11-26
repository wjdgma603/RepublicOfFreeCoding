import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './CommuQnaDetail.css';
import { qnaPost, updateQnaPost } from '../SubComponents/CommuData';

const CommuQnaDetail = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const [qnaPosts, setQnaPosts] = useState(qnaPost);
  const selectedPostIndex = qnaPosts.postIndex.findIndex((post) => post.id === parseInt(id));
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [isEditingAnswer, setIsEditingAnswer] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [editedAnswer, setEditedAnswer] = useState('');
  const [editedQuestion, setEditedQuestion] = useState('');

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(`editedQnaPost_${id}`));
    if (savedData) {
      setEditedQuestion(savedData.editedQuestion || '');
      setEditedContent(savedData.editedContent || '');
      setEditedAnswer(savedData.editedAnswer || '');
    } else {
      // 편집 중이 아닐 때만 로컬스토리지에서 데이터 불러오기
      const storedData = JSON.parse(localStorage.getItem('qnaPosts')) || qnaPost;
      setQnaPosts(storedData);
    }
  }, [id]);


  const handleEditQuestion = () => {
    setEditedQuestion(qnaPosts.postIndex[selectedPostIndex]?.title || '');
    setEditedContent(qnaPosts.postIndex[selectedPostIndex]?.content || '');
    setEditedAnswer(qnaPosts.postIndex[selectedPostIndex]?.answer || '');
    setIsEditingQuestion(true);
    setIsEditingAnswer(false);
  };

  const handleEditAnswer = () => {
    setEditedAnswer(qnaPosts.postIndex[selectedPostIndex]?.answer || '');
    setEditedQuestion(qnaPosts.postIndex[selectedPostIndex]?.title || '');
    setEditedContent(qnaPosts.postIndex[selectedPostIndex]?.content || '');
    setIsEditingAnswer(true);
    setIsEditingQuestion(false);
  };

  const handleEditCompleteQuestion = () => {
    const updatedQnaPosts = qnaPosts.postIndex.map((post) =>
      post.id === parseInt(id)
        ? {
            ...post,
            title: editedQuestion,
            content: editedContent,
            answer: editedAnswer,
          }
        : post
    );

    setQnaPosts({ ...qnaPosts, postIndex: updatedQnaPosts });
    updateQnaPost(parseInt(id), editedQuestion, editedContent, editedAnswer);

    setIsEditingQuestion(false);
    setIsEditingAnswer(false);

    localStorage.setItem(`editedQnaPost_${id}`, JSON.stringify({ editedQuestion, editedContent, editedAnswer }));
  };

  const handleDeletePost = () => {
    const confirmation = window.confirm("정말로 게시글을 삭제하시겠습니까?");
    if (confirmation) {
      const updatedQnaPosts = qnaPosts.postIndex.filter((post) => post.id !== parseInt(id));
      setQnaPosts({ ...qnaPosts, postIndex: updatedQnaPosts });

      const storedQnaPosts = JSON.parse(localStorage.getItem('qnaPosts'));
      const updatedStoredQnaPosts = storedQnaPosts.postIndex.filter((post) => post.id !== parseInt(id));
      localStorage.setItem('qnaPosts', JSON.stringify({ postIndex: updatedStoredQnaPosts }));

      localStorage.removeItem(`editedQnaPost_${id}`);

      navigate(-1);
    }
  };

  const goBack = () => {
    navigate(-1);
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
        <h1>문의사항</h1>
        <div className="CommuQnaTitleWrap">
          <div className="CommuQnaTitle">
            <div>
              {isEditingQuestion ? (
                <textarea
                  className="CommudetailQuestionTitle"
                  value={editedQuestion}
                  onChange={(e) => setEditedQuestion(e.target.value)}
                />
              ) : (
                qnaPosts.postIndex[selectedPostIndex]?.title || ''
              )}
            </div>
            <div>{qnaPosts.postIndex[selectedPostIndex]?.date || ''}</div>
          </div>
        </div>
        <div className="CommuQnaText">
          {isEditingQuestion ? (
            <textarea
              className="CommudetailQuestionText"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            qnaPosts.postIndex[selectedPostIndex]?.content || ''
          )}
        </div>
        <div className="CommuDetailQuestionButtonWrap">
          <button
            className="CommuQuestionDetailButton"
            onClick={isEditingQuestion ? handleEditCompleteQuestion : handleEditQuestion}
          >
            {isEditingQuestion ? "수정완료" : "수정"}
          </button>
        </div>

        <div className="CommuQnaTitle">
          <div>문의답변</div>
          <div>{qnaPosts.postIndex[selectedPostIndex]?.answerDate || ''}</div>
        </div>
        <div className="CommuQnaText">
          {isEditingAnswer ? (
            <textarea
              className="CommudetailAnswerText"
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
            />
          ) : (
            qnaPosts.postIndex[selectedPostIndex]?.answer || ''
          )}
        </div>

        <div className="CommuQnaButtonWrap">
          <div></div>
          <button className="CommuQnaButton" onClick={goBack}>
            목록보기
          </button>

          <div>
            <button onClick={isEditingAnswer ? handleEditCompleteQuestion : handleEditAnswer}>
              {isEditingAnswer ? "수정완료" : "수정"}
            </button>
            <button onClick={handleDeletePost}>게시글 삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;















// // CommuQnaDetail.jsx

// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import './CommuQnaDetail.css';
// import { qnaPost, updateQnaPost } from '../SubComponents/CommuData';

// const CommuQnaDetail = () => {
//   const { id, page } = useParams();
//   const navigate = useNavigate();
//   const [qnaPosts, setQnaPosts] = useState(qnaPost);
//   const selectedPostIndex = qnaPosts.postIndex.findIndex((post) => post.id === parseInt(id));
//   const [isEditingQuestion, setIsEditingQuestion] = useState(false);
//   const [isEditingAnswer, setIsEditingAnswer] = useState(false);
//   const [editedContent, setEditedContent] = useState('');
//   const [editedAnswer, setEditedAnswer] = useState('');
//   const [editedQuestion, setEditedQuestion] = useState('');

//   const getSavedData = () => {
//     const storedData = localStorage.getItem(`editedQnaPost_${id}`);
//     return storedData ? JSON.parse(storedData) : {};
//   };

//   const setSavedData = (data) => {
//     const storedData = getSavedData();
//     const mergedData = { ...storedData, ...data };
//     const storageKey = `editedQnaPost_${id}`;
    
//     if (Object.keys(mergedData).length > 0) {
//       localStorage.setItem(storageKey, JSON.stringify(mergedData));
//     } else {
//       localStorage.removeItem(storageKey);
//     }
//   };

//   useEffect(() => {
//     // 페이지 진입 시, 로컬 스토리지에서 편집된 정보를 가져와 초기 상태로 설정
//     const savedData = JSON.parse(localStorage.getItem(`editedQnaPost_${id}`));
//     if (savedData) {
//       setEditedQuestion(savedData.editedQuestion || '');
//       setEditedContent(savedData.editedContent || '');
//       setEditedAnswer(savedData.editedAnswer || '');
//     }
//   }, [id]);

//   useEffect(() => {
//     setSavedData({ editedQuestion, editedContent, editedAnswer });
//   }, [id, editedQuestion, editedContent, editedAnswer]);

//   const handleEditCompleteQuestion = () => {
//     const updatedQnaPosts = [...qnaPosts.postIndex];
//     updatedQnaPosts[selectedPostIndex].title = editedQuestion;
//     updatedQnaPosts[selectedPostIndex].content = editedContent;
//     setQnaPosts({ ...qnaPosts, postIndex: updatedQnaPosts });

//     updateQnaPost(parseInt(id), editedQuestion, editedAnswer);

//     setSavedData({ editedQuestion, editedContent, editedAnswer });

//     setQnaPosts((prevQnaPosts) => {
//       const updatedQnaPosts = [...prevQnaPosts.postIndex];
//       updatedQnaPosts[selectedPostIndex].title = editedQuestion;
//       updatedQnaPosts[selectedPostIndex].content = editedContent;
//       updatedQnaPosts[selectedPostIndex].answer = editedAnswer;
//       return { ...prevQnaPosts, postIndex: updatedQnaPosts };
//     });

//     setIsEditingQuestion(false);
//     setIsEditingAnswer(false);
//   };

//   const handleDeletePost = () => {
//     const confirmation = window.confirm("정말로 게시글을 삭제하시겠습니까?");
//     if (confirmation) {
//       const updatedQnaPosts = qnaPosts.postIndex.filter((post) => post.id !== parseInt(id));
//       setQnaPosts(prevQnaPosts => ({
//         ...prevQnaPosts,
//         postIndex: updatedQnaPosts
//       }));
//       setIsEditingQuestion(false);
//       setIsEditingAnswer(false);
//       navigate(`/community/qna/${page}`);
//       localStorage.removeItem(`editedQnaPost_${id}`);
//     }
//   };

//   const goBack = () => {
//     navigate(-1);
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
//             <div>
//               {isEditingQuestion ? (
//                 <textarea
//                   className="CommudetailQuestionTitle"
//                   value={editedQuestion}
//                   onChange={(e) => setEditedQuestion(e.target.value)}
//                 />
//               ) : (
//                 qnaPosts.postIndex[selectedPostIndex]?.title || ''
//               )}
//             </div>
//             <div>{qnaPosts.postIndex[selectedPostIndex]?.date || ''}</div>
//           </div>
//         </div>
//         <div className="CommuQnaText">
//           {isEditingQuestion ? (
//             <textarea
//               className="CommudetailQuestionText"
//               value={editedContent}
//               onChange={(e) => setEditedContent(e.target.value)}
//             />
//           ) : (
//             qnaPosts.postIndex[selectedPostIndex]?.content || ''
//           )}
//         </div>
//         <div className="CommuDetailQuestionButtonWrap">
//           <button
//             className="CommuQuestionDetailButton"
//             onClick={isEditingQuestion ? handleEditCompleteQuestion : setIsEditingQuestion}
//           >
//             {isEditingQuestion ? "수정완료" : "수정"}
//           </button>
//         </div>

//         <div className="CommuQnaTitle">
//           <div>문의답변</div>
//           <div>{qnaPosts.postIndex[selectedPostIndex]?.answerDate || ''}</div>
//         </div>
//         <div className="CommuQnaText">
//           {isEditingAnswer ? (
//             <textarea
//               className="CommudetailAnswerText"
//               value={editedAnswer}
//               onChange={(e) => setEditedAnswer(e.target.value)}
//             />
//           ) : (
//             qnaPosts.postIndex[selectedPostIndex]?.answer || ''
//           )}
//         </div>

//         <div className="CommuQnaButtonWrap">
//           <div></div>
//           <button className="CommuQnaButton" onClick={goBack}>
//             목록보기
//           </button>

//           <div>
//             <button onClick={isEditingAnswer ? handleEditCompleteQuestion : setIsEditingAnswer}>
//               {isEditingAnswer ? "수정완료" : "수정"}
//             </button>
//             <button onClick={handleDeletePost}>게시글 삭제</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommuQnaDetail











