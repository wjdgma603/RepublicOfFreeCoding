import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './CommuQnaDetail.css';
import { qnaPost, deleteQnaPost, updateQnaPost } from '../SubComponents/CommuData';

const CommuQnaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qnaPosts, setQnaPosts] = useState(qnaPost);

  const selectedPostIndex = qnaPosts.postIndex.findIndex((post) => post.id === parseInt(id));
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [isEditingAnswer, setIsEditingAnswer] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [editedAnswer, setEditedAnswer] = useState('');
  const [editedQuestion, setEditedQuestion] = useState('');


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

    setIsEditingQuestion(false);
    setIsEditingAnswer(false);

    // updateQnaPost 함수를 수정이 완료된 후에 호출
    updateQnaPost(parseInt(id), editedQuestion, editedContent, editedAnswer);
  };

  const handleDeletePost = () => {
    const confirmation = window.confirm("정말로 게시글을 삭제하시겠습니까?");
    if (confirmation) {
      const updatedQnaPosts = qnaPosts.postIndex.filter((post) => post.id !== parseInt(id));
      setQnaPosts({ ...qnaPosts, postIndex: updatedQnaPosts });
      deleteQnaPost(parseInt(id));

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
            {isEditingQuestion ? "저장" : "수정"}
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
          <button
            className="CommuQnaButton"
            onClick={goBack}
          >
            목록보기
          </button>

          <div>
            <button onClick={isEditingAnswer ? handleEditCompleteQuestion : handleEditAnswer}>
              {isEditingAnswer ? "저장" : "등록 및 수정"}
            </button>
            <button onClick={handleDeletePost}>게시글 삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;