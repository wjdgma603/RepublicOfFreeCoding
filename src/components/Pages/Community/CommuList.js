import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommuData from "./SubComponents/CommuData";
import "./CommuList.css";

const CommuList = () => {
  const { noticePosts } = CommuData();
  const { page } = useParams();
  const [searchTerm, setSearchTerm] = useState(""); // eslint-disable-line no-unused-vars
  const [filteredPosts, setFilteredPosts] = useState(noticePosts.postIndex);

  useEffect(() => {
    const originalPosts = noticePosts.postIndex;
    const updatedPosts = originalPosts.map((post) => {
      const savedData = JSON.parse(localStorage.getItem(`editedPost_${post.id}`)) || {};
      return savedData.editedTitle ? { ...post, title: savedData.editedTitle } : post;
    });

    setFilteredPosts(updatedPosts);
  }, [noticePosts.postIndex]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = noticePosts.postIndex
      .map((post) => {
        const savedData = JSON.parse(localStorage.getItem(`editedPost_${post.id}`));
        if (savedData && savedData.editedTitle) {
          return { ...post, title: savedData.editedTitle };
        } else {
          return post;
        }
      })
      .filter((post) => post.title.includes(searchTerm));

    setFilteredPosts(filtered);
  };

  const postsPerPage = 10;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPage = page ? parseInt(page) : 1;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const pageGroupSize = 5;
  const currentGroup = Math.ceil(currentPage / pageGroupSize);
  const startPage = (currentGroup - 1) * pageGroupSize + 1;
  const endPage = Math.min(currentGroup * pageGroupSize, totalPages);

  const moveToPrevGroup = () => {
    const prevGroupFirstPage = startPage - pageGroupSize;
    const targetPage = Math.max(prevGroupFirstPage, 1);
    window.location.href = `/community/notice/${targetPage}`;
  };

  const moveToNextGroup = () => {
    const nextGroupFirstPage = startPage + pageGroupSize;
    const targetPage = Math.min(nextGroupFirstPage, totalPages);
    window.location.href = `/community/notice/${targetPage}`;
  };

  const moveToLastPage = () => {
    const lastPage = totalPages;
    window.location.href = `/community/notice/${lastPage}`;
  };

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <Link to={`/community/notice/${i}`} key={i} className={i === currentPage ? "active" : ""}>
        <div>{i}</div>
      </Link>
    );
  }

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
          {currentPosts.map((post) => (
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
          <div className="CommuBottomPrevWrap">
            {currentGroup > 1 && (
              <Link to={`/community/notice/1`} className="CommuFirstPageButton">
                &lt;&lt;
              </Link>
            )}
            {currentGroup > 1 && (
              <div className="CommuPrevPageButton" onClick={moveToPrevGroup}>
                &lt;
              </div>
            )}
          </div>

              {pageButtons.slice(startPage - 1, endPage).map((button, index) => (
                <React.Fragment key={index}>{button}</React.Fragment>
              ))}

             <div className="CommuBottomNextWrap">
            {currentGroup < Math.ceil(totalPages / pageGroupSize) && (
              <div className="CommuNextPageButton" onClick={moveToNextGroup}>
                &gt;
              </div>
            )}
            {currentGroup * pageGroupSize < totalPages && (
              <div className="CommuLastPageButton" onClick={moveToLastPage}>
                &gt;&gt;
              </div>
            )}
          </div>
          </div>

          <Link to="/community/noticeWrite">
            <div className="CommuWrite">글쓰기</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommuList;










// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import CommuData from "./SubComponents/CommuData";
// import "./CommuList.css";

// const CommuList = () => {
//   const { noticePosts } = CommuData();
//   const { page } = useParams();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredPosts, setFilteredPosts] = useState(noticePosts.postIndex);

//   useEffect(() => {
//     const originalPosts = noticePosts.postIndex;
//     const updatedPosts = originalPosts.map((post) => {
//       const savedData = JSON.parse(localStorage.getItem(`editedPost_${post.id}`)) || {};
//       return savedData.editedTitle ? { ...post, title: savedData.editedTitle } : post;
//     });
  
//     setFilteredPosts(updatedPosts);
//   }, [noticePosts.postIndex]);
  

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     const filtered = noticePosts.postIndex
//       .map((post) => {
//         const savedData = JSON.parse(localStorage.getItem(`editedPost_${post.id}`));
//         if (savedData && savedData.editedTitle) {
//           return { ...post, title: savedData.editedTitle };
//         } else {
//           return post;
//         }
//       })
//       .filter((post) => post.title.includes(searchTerm));

//     setFilteredPosts(filtered);
//   };

  
//   const postsPerPage = 10;
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
//   const currentPage = page ? parseInt(page) : 1;
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const endIndex = startIndex + postsPerPage;
//   const currentPosts = filteredPosts.slice(startIndex, endIndex);


//   const pageButtons = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageButtons.push(
//       <Link to={`/community/notice/${i}`} key={i}>
//         <div>{i}</div>
//       </Link>
//     );
//   }

//   return (
//     <section className="CommuSection">
//       <div>
//         <div>
//           <div>커뮤니티</div>
//           <div>초기화</div>
//         </div>
//         <ul className="CommuNav">
//           <li><Link to='/community'>공지사항</Link></li>
//           <li><Link to='/community/qna'>문의사항</Link></li>
//           <li><Link to='/community/faq'>FAQ</Link></li>
//         </ul>
//       </div>

//       <div className="CommuRight">
//         <div className="CommuRightHeaderWrap">
//           <h1>공지사항</h1>
//           <div className="CommuRightHeaderSearchWrap">
//             <input
//               className="CommuRightSearch"
//               type="text"
//               placeholder="검색어를 입력해주세요."
//               onChange={handleSearch}
//             />
//           </div>
//         </div>
//         <div className="CommuBoardHeader">
//           <p className="CommuBoardNumber">번호</p>
//           <p className="CommuBoardTitle">제목</p>
//           <p className="CommuBoardDate">등록일</p>
//         </div>

//         <table className="CommuBoard">
//           {currentPosts.map((post) => (
//             <Link to={`/community/notice/detail/${post.id}`} key={post.id}>
//               <tr>
//                 <td>{post.id}</td>
//                 <td>{post.title}</td>
//                 <td>{post.date}</td>
//               </tr>
//             </Link>
//           ))}
//         </table>

//         <div className="CommuBottomWrap">
//           <div></div>
//           <button className="CommuFirstPageButton">제일앞</button>
//             <button className="CommuPrevPageButton">왼쪽</button>
//           <div className="CommuPageButtonWrap">{pageButtons}</div>
//           <button className="CommuNextPageButton">오른쪽</button>
//           <button className="CommulastPageButton">제일끝</button>

//           <Link to="/community/noticeWrite">
//             <div className="CommuWrite">글쓰기</div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommuList;