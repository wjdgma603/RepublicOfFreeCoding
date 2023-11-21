import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CommuQnaDetail.css";
import { qnaPost } from '../SubComponents/CommuData';

const CommuQnaDetail = () => {
  const { id } = useParams();
  const [qnaPosts, setQnaPosts] = useState(qnaPost);
  const selectedPostIndex = qnaPosts.postIndex.findIndex((post) => post.id === parseInt(id));
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(qnaPosts.postIndex[selectedPostIndex].content);
  const [editedAnswer, setEditedAnswer] = useState(qnaPosts.postIndex[selectedPostIndex].answer);
  const [editedQuestion, setEditedQuestion] = useState(qnaPosts.postIndex[selectedPostIndex].content);

  useEffect(() => {
    console.log("Rendered - editedContent:", editedContent);
    console.log("Rendered - editedAnswer:", editedAnswer);
    console.log("Rendered - editedQuestion:", editedQuestion);
  }, [editedContent, editedAnswer, editedQuestion, qnaPosts]);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEditComplete = () => {
    const updatedQnaPosts = {
      postIndex: qnaPosts.postIndex.map((post, index) =>
        index === selectedPostIndex
          ? { ...post, content: editedQuestion, answer: editedAnswer }
          : post
      ),
    };

    setQnaPosts(updatedQnaPosts); // 수정된 상태를 즉시 반영
    setIsEditing(false);
  };

  const handleQuestionDelete = () => {
    const updatedQnaPosts = {
      postIndex: qnaPosts.postIndex.filter((post) => post.id !== parseInt(id)),
    };

    setQnaPosts(updatedQnaPosts);
    navigate("/community/qna");
  };

  const handleAnswerDelete = () => {
    const updatedQnaPosts = {
      postIndex: qnaPosts.postIndex.map((post, index) =>
        index === selectedPostIndex
          ? { ...post, answer: "" }
          : post
      ),
    };

    setQnaPosts(updatedQnaPosts);
    setIsEditing(false);
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
            <div>{qnaPosts.postIndex[selectedPostIndex].title}</div>
            <div>{qnaPosts.postIndex[selectedPostIndex].date}</div>
          </div>
        </div>

        {/* 질문글 부분 */}
        <div className="CommuQnaText">
          {isEditing ? (
            <textarea
              value={editedQuestion}
              onChange={(e) => setEditedQuestion(e.target.value)}
            />
          ) : (
            qnaPosts.postIndex[selectedPostIndex].content
          )}
        </div>

        
        <div className="CommuQnaTitle">
          <div>문의답변</div>
          <div>{qnaPosts.postIndex[selectedPostIndex].answerDate}</div>
        </div>
        <div className="CommuQnaText">
          {isEditing ? (
            <textarea
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
            />
          ) : (
            qnaPosts.postIndex[selectedPostIndex].answer
          )}
        </div>

        <div className="CommuQnaButtonWrap">
          <div>
            <button onClick={isEditing ? handleEditComplete : toggleEdit}>
              {isEditing ? "수정완료" : "답변수정"}
            </button>
            <button onClick={handleAnswerDelete}>답변삭제</button>
          </div>
          <Link to="/community/qna"><button className="CommuQnaButton">목록보기</button></Link>
          <button onClick={isEditing ? handleEditComplete : toggleEdit}>글수정</button>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;
