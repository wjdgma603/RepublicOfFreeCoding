import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommuData from './SubComponents/CommuData';

const CommuQna = () => {
  const { qnaPosts } = CommuData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const originalPosts = qnaPosts.postIndex;

    // Check for any edited posts and update the title accordingly
    const updatedPosts = originalPosts.map((post) => {
      const savedData = JSON.parse(localStorage.getItem(`editedPost_${post.id}`));
      if (savedData) {
        return { ...post, title: savedData.editedTitle };
      } else {
        return post;
      }
    });

    setFilteredPosts(updatedPosts);
  }, [qnaPosts.postIndex]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = qnaPosts.postIndex.filter((post) =>
      post.title.includes(searchTerm)
    );

    setFilteredPosts(filtered);
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
        <div className="CommuRightHeaderWrap">
          <h1>문의사항</h1>
          <input
            className="CommuRightSearch"
            type="text"
            placeholder="검색어를 입력해주세요."
            onChange={handleSearch}
          />
        </div>
        <div className="CommuBoardHeader">
          <p className="CommuBoardNumber">번호</p>
          <p className="CommuBoardTitle">제목</p>
          <p className="CommuBoardDate">등록일</p>
        </div>
        <table className="CommuBoard">
          {filteredPosts.map((post) => (
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
