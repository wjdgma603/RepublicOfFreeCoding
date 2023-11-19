import React from 'react';
import { Link } from 'react-router-dom';
import './CommuFaq.css';

const CommuFaq = () => {
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
    <h1>자주하는 질문</h1>
    </div>
  </div>
);
};


export default CommuFaq;