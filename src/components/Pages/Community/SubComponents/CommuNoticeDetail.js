import React from 'react';
import { Link, useParams } from "react-router-dom";
import { noticePost } from './CommuData';
import './CommuNoticeDetail.css';

const CommuNoticeDetail = () => {
    const { id } = useParams();

  const selectedPost = noticePost.postIndex.find((post) => post.id === parseInt(id));
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
        <h2>공지사항</h2>
        <div className="CommuQnaTitle">{selectedPost.title}</div>
        <div className="CommuQnaText">{selectedPost.content}</div>
        
        <button className="CommuNoticeButton"><Link to='/community'>목록보기</Link></button>
  
        </div>
        
      </div>
    );
  };
  
    
export default CommuNoticeDetail;