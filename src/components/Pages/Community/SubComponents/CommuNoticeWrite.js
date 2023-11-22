import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addNoticePost } from "./CommuData";
import "./CommuNoticeWrite.css";

const CommuNoticeWrite = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostSubmit = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    addNoticePost(newPost);
    setTitle('');
    setContent('');
    alert('글이 성공적으로 작성되었습니다.');
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
        <h1>공지사항 글 작성</h1>
        <input
          className="CommuWriteTitle"
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div>
          <textarea
            className="CommuWriteText"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <Link to='/community'>
          <button className="CommuWriteButton" onClick={handlePostSubmit}>
            글쓰기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CommuNoticeWrite;