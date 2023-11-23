import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommuData from "./SubComponents/CommuData";
import "./CommuList.css";

const CommuList = () => {
  const { noticePosts } = CommuData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(noticePosts.postIndex);

  useEffect(() => {
    // 페이지가 새로고침되면 localStorage를 초기화
    window.onbeforeunload = () => {
      localStorage.clear();
    };

    // 초기에는 공지사항 데이터를 그대로 사용
    const originalPosts = noticePosts.postIndex;

    // 각 공지사항에 대해 localStorage에 저장된 편집된 제목이 있는지 확인하고 업데이트
    const updatedPosts = originalPosts.map((post) => {
      const savedData = JSON.parse(localStorage.getItem(`editedPost_${post.id}`));
      if (savedData && savedData.editedTitle) {
        return { ...post, title: savedData.editedTitle };
      } else {
        return post;
      }
    });

    setFilteredPosts(updatedPosts);
  }, [noticePosts.postIndex]);

  const handleSearch = (e) => {
    // 검색어를 업데이트하고, 해당하는 게시물로 필터링
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filtered = noticePosts.postIndex.filter((post) =>
      post.title.includes(searchTerm)
    );
    setFilteredPosts(filtered);
  };


  return (
    <section className="CommuSection">
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
        <div className="CommuRightHeaderWrap">
          <h1>공지사항</h1>
          <div className="CommuRightHeaderSearchWrap">
            <input
              className="CommuRightSearch"
              type="text"
              placeholder="검색어를 입력해주세요."
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="CommuBoardHeader">
          <p className="CommuBoardNumber">번호</p>
          <p className="CommuBoardTitle">제목</p>
          <p className="CommuBoardDate">등록일</p>
        </div>

        <table className="CommuBoard">
          {filteredPosts.map((post) => (
            <Link to={`/community/notice/${post.id}`} key={post.id}>
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
          <Link to='/community/noticeWrite'>
            <div className="CommuWrite">글쓰기</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommuList;
