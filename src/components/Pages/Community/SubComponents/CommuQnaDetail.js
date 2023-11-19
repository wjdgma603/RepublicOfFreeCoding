import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CommuQnaDetail.css";
import { qnaPost } from '../SubComponents/CommuData';


const CommuQnaDetail = () => {
  const { id } = useParams();

  const selectedPost = qnaPost.postIndex.find((post) => post.id === parseInt(id));
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
      <div className="CommuQnaTitle">{selectedPost.title}</div>
      <div className="CommuQnaText">{selectedPost.content}</div>
      <div className="CommuQnaTitle">문의 답변</div>
      <div className="CommuQnaText">{selectedPost.answer}</div>
      
        <div className="CommuQnaButtonWrap">
            <div>
                <button>답변수정</button>
                <button>답변삭제</button>
            </div>
            <button>글수정</button>
        </div>

      </div>
      
    </div>
  );
};

export default CommuQnaDetail;