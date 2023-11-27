import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommuQnaWrite.css';
import { addQnaPost, qnaPost } from './CommuData';

const CommuQnaWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostSubmit = () => {
    if (!title || !content || isSubmitting) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    const newPost = {
      id: qnaPost.postIndex.length + 1,
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    addQnaPost(newPost);

    setTitle('');
    setContent('');
    setIsSubmitting(false);

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
          <li><Link to='/community'>공지사항</Link></li>
          <li><Link to='/community/qna'>문의사항</Link></li>
          <li><Link to='/community/faq'>FAQ</Link></li>
        </ul>
      </div>

      <div className="CommuRight">
        <h1>문의사항 글 작성</h1>
        <p>문의 주의사항</p>
        <p>문의 주실 내용에 대한 답변이 이미 있을 수도 있으니 검색기능을 활용해주세요.</p>
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
        <Link to='/community/qna'>
        <button
          className="CommuWriteButton"
          onClick={handlePostSubmit}
          disabled={isSubmitting}
        >
          글쓰기
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CommuQnaWrite;
