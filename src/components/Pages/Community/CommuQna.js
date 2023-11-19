import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CommuQnaWrite from './SubComponents/CommuQnaWrite';

export const boardPost = {
    postIndex: [
      {
        id: 3,
        title: '세번째 질문',
        content: '세번째 질문에 대한 문의사항',
        date:'23.11.09'
        // date: new Date(23, 11, 9).toLocaleDateString(),
      },
      {
        id: 2,
        title: '두번째 질문',
        content: '두번째 질문에 대한 문의사항',
        date:'23.11.09'
        // date: new Date(23, 11, 9).toLocaleDateString(),
      },
      {
        id: 1,
        title: '첫번째 질문',
        content: '첫번째 질문에 대한 문의사항',
        date:'23.11.09'
        // date: new Date(23, 11, 9).toLocaleDateString(),
      },
    ],
  };


const CommuQna = () => {
    const [posts, setPosts] = useState(boardPost.postIndex);

  // CommuWrite 컴포넌트에서 호출할 함수
  const handlePostSubmit = (newPost) => {
    // 새로운 게시글을 기존 게시글에 추가합니다.
    setPosts([...posts, newPost]);
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
        <h1>문의사항</h1>
        <div className="CommuBoardHeader">
          <p className="CommuBoardNumber">번호</p>
          <p className="CommuBoardTitle">제목</p>
          <p className="CommuBoardDate">등록일</p>
        </div>
        <table className="CommuBoard">
        {/* {boardPost.postIndex.map((post) => ( */}
        {posts.map((post) => (
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
          <Link to='/community/qnaWrite'><div className="CommuWrite">글쓰기</div></Link>
        </div>
      </div>
    </div>
    );
};

export default CommuQna;