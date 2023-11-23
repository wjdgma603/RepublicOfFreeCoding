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

  const [editedContent, setEditedContent] = useState(qnaPosts.postIndex[selectedPostIndex].content);
  const [editedAnswer, setEditedAnswer] = useState(qnaPosts.postIndex[selectedPostIndex].answer);
  const [editedQuestion, setEditedQuestion] = useState(qnaPosts.postIndex[selectedPostIndex].title);

  useEffect(() => {
    // 페이지 로딩 시 localStorage에서 수정된 데이터를 가져와서 상태에 적용
    const savedData = JSON.parse(localStorage.getItem(`editedQnaPost_${id}`));
    if (savedData) {
      setEditedQuestion(savedData.editedQuestion);
      setEditedContent(savedData.editedContent);
      setEditedAnswer(savedData.editedAnswer);
    }
  }, [id]);

  const toggleEditQuestion = () => {
    setIsEditingQuestion((prev) => !prev);
  };

  const toggleEditAnswer = () => {
    setIsEditingAnswer((prev) => !prev);
  };

  const handleEditComplete = () => {
    if (isEditingQuestion) {
      const updatedQnaPosts = [...qnaPosts.postIndex];
      updatedQnaPosts[selectedPostIndex].title = editedQuestion;
      updatedQnaPosts[selectedPostIndex].content = editedContent;
      setQnaPosts({ ...qnaPosts, postIndex: updatedQnaPosts });
    }

    updateQnaPost(parseInt(id), editedQuestion, editedAnswer);

    setIsEditingQuestion(false);
    setIsEditingAnswer(false);

    localStorage.setItem(`editedQnaPost_${id}`, JSON.stringify({
      editedQuestion,
      editedContent,
      editedAnswer,
    }));
  };

  const deletePost = () => {
    const confirmation = window.confirm("정말로 게시글을 삭제하시겠습니까?");
    if (confirmation) {
      const updatedQnaPosts = qnaPosts.postIndex.filter((post) => post.id !== parseInt(id));
      setQnaPosts({ ...qnaPosts, postIndex: updatedQnaPosts });
      setIsEditingQuestion(false);
      window.location.href = '/community/qna';
      localStorage.removeItem(`editedQnaPost_${id}`);
    }
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
                qnaPosts.postIndex[selectedPostIndex].title
              )}
            </div>
            <div>{qnaPosts.postIndex[selectedPostIndex].date}</div>
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
            qnaPosts.postIndex[selectedPostIndex].content
          )}
        </div>
        <div className="CommuDetailQuestionButtonWrap">
          <button
            className="CommuQuestionDetailButton"
            onClick={isEditingQuestion ? handleEditComplete : toggleEditQuestion}
          >
            {isEditingQuestion ? "질문수정완료" : "질문수정"}
          </button>
        </div>

        <div className="CommuQnaTitle">
          <div>문의답변</div>
          <div>{qnaPosts.postIndex[selectedPostIndex].answerDate}</div>
        </div>
        <div className="CommuQnaText">
          {isEditingAnswer ? (
            <textarea
              className="CommudetailAnswerText"
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
            />
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
            <button onClick={deletePost}>게시글 삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;
