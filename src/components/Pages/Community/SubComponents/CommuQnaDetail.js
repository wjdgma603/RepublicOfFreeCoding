import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CommuQnaDetail.css";
import { qnaPost } from '../SubComponents/CommuData';

const CommuQnaDetail = () => {
  const { id } = useParams();
  const [qnaPosts, setQnaPosts] = useState(qnaPost);
  const selectedPost = qnaPosts.postIndex.find((post) => post.id === parseInt(id));
  const navigate = useNavigate();

  const useForceUpdate = () => {
    const [, forceUpdate] = useState();
    return forceUpdate;
  };

  const forceUpdate = useForceUpdate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(selectedPost.content);
  const [editedAnswer, setEditedAnswer] = useState(selectedPost.answer);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEditComplete = () => {
    const updatedQnaPosts = {
      postIndex: qnaPosts.postIndex.map((post) =>
        post.id === selectedPost.id
          ? { ...post, content: isEditing ? editedContent : post.content, answer: isEditing ? post.answer : editedAnswer }
          : post
      ),
    };

    setQnaPosts(updatedQnaPosts);
    setIsEditing(false);
    forceUpdate();
  };

  const handleAnswerDelete = () => {
    const updatedQnaPosts = {
      postIndex: qnaPosts.postIndex.map((post) =>
        post.id === selectedPost.id ? { ...post, answer: "" } : post
      ),
    };

    setQnaPosts(updatedQnaPosts);
    setIsEditing(false);
  };

  useEffect(() => {
    console.log("Rendered - editedContent:", editedContent);
    console.log("Rendered - editedAnswer:", editedAnswer);
  }, [editedContent, editedAnswer, qnaPosts]);

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
            <div>{selectedPost.title}</div>
            <div>{selectedPost.date}</div>
          </div>
        </div>
        <div className="CommuQnaText">
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            selectedPost.content
          )}
        </div>
        <div className="CommuQnaTitle">
          <div>문의답변</div>
          <div>{selectedPost.answerDate}</div>
        </div>
        <div className="CommuQnaText">
          {isEditing ? (
            <textarea
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
            />
          ) : (
            selectedPost.answer
          )}
        </div>

        <div className="CommuQnaButtonWrap">
          <div>
            <button onClick={toggleEdit}>
              {isEditing ? "수정완료" : "답변수정"}
            </button>
            <button onClick={handleAnswerDelete}>답변삭제</button>
          </div>
          <button className="CommuQnaButton" onClick={handleEditComplete}>
            목록보기
          </button>
          <button>글수정</button>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;
