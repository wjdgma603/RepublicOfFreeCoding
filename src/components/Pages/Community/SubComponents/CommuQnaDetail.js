import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CommuQnaDetail.css";
import CommuData from './CommuData';

const CommuQnaDetail = () => {
  const { id } = useParams(); // URL 파라미터로부터 id 추출
  const { qnaPosts } = CommuData();

  // id에 해당하는 게시글 찾기
  const selectedQna = qnaPosts.postIndex.find((post) => post.id === parseInt(id));

  // id에 해당하는 게시글이 없을 경우 처리
  if (!selectedQna) {
    return <div>게시글이 없습니다.</div>;
  }

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
          {/* 질문글 부분 */}
          <div className="CommuQnaTitle">
            <div>{selectedQna.title}</div>
            <div>{selectedQna.date}</div>
          </div>
        </div>
        <div className="CommuQnaText">{selectedQna.content}</div>

        {/* 답변글 부분 */}
        <div className="CommuQnaTitle">
          <div>문의답변</div>
          <div>{selectedQna.answerDate}</div>
        </div>
        <div className="CommuQnaText">{selectedQna.answer}</div>

        <div className="CommuQnaButtonWrap">
          <div>
            <button>답변수정</button>
            <button>답변삭제</button>
          </div>
          <Link to="/community/qna">
            <button className="CommuQnaButton">목록보기</button>
          </Link>
          <button>글수정</button>
        </div>
      </div>
    </div>
  );
};

export default CommuQnaDetail;
