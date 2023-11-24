import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommuData from "./SubComponents/CommuData";
import "./CommuList.css";

const CommuList = () => {
  const { noticePosts } = CommuData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(noticePosts.postIndex);

  useEffect(() => {



    // window.onbeforeunload = () => {              //페이지 이동시 로컬스토리지 초기화
    //   localStorage.clear();
    // };

    const originalPosts = noticePosts.postIndex;
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
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = noticePosts.postIndex.map((post) => {
      const savedData = JSON.parse(localStorage.getItem(`editedPost_${post.id}`));
      if (savedData && savedData.editedTitle) {
        return { ...post, title: savedData.editedTitle };
      } else {
        return post;
      }
    }).filter((post) => post.title.includes(searchTerm));

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
            <Link to={`/community/notice/detail/${post.id}`} key={post.id}>
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
