import React from 'react';
import { Link } from 'react-router-dom';
import CommuData from './SubComponents/CommuData';
import CommuQnaWrite from './SubComponents/CommuQnaWrite'; // 적절한 경로로 수정하세요

const CommuQna = () => {
  const { qnaPosts, addQnaPost } = CommuData(); // addQnaPost 추가

  const handlePostSubmit = (newPost) => {
    // CommuQna에서 새로운 Q&A 게시물을 추가
    addQnaPost(newPost);
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
            <Link to='/community'>공지사항</Link>
          </li>
          <li>
            <Link to='/community/qna'>문의사항</Link>
          </li>
          <li>
            <Link to='/community/faq'>FAQ</Link>
          </li>
        </ul>
      </div>

      <div className="CommuRight">
        <h1>문의사항</h1>
        <div className="CommuBoardHeader">
          <p className="CommuBoardNumber">번호</p>
          <p className="CommuBoardTitle">제목</p>
          <p className="CommuBoardDate">등록일</p>
        </div>
        <table className="CommuBoard">
        {/* <CommuQnaWrite onPostSubmit={handlePostSubmit} /> */}
          {qnaPosts.postIndex.map((post) => (
            <Link to={`/community/qna/${post.id}`} key={post.id}>
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.date}</td>
              </tr>
            </Link>
          ))}
        </table>
        <div className="CommuBottomWrap">
          <div></div>
          <div className="CommuPageButtonWrap">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <Link to='/community/qnaWrite'>
            <div className="CommuWrite">글쓰기</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommuQna;