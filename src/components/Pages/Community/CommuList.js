import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useCommuData from "./SubComponents/CommuData";
import "./CommuList.css";

const CommuList = () => {
  const { noticePosts, addNoticePost } = useCommuData();

  useEffect(() => {
    console.log("noticePosts updated:", noticePosts);
  }, [noticePosts]);

  if (!noticePosts || !noticePosts.postIndex) {
    return null;
  }

  const postIndex = noticePosts.postIndex;

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
        <h1>공지사항</h1>
        <div className="CommuBoardHeader">
          <p className="CommuBoardNumber">번호</p>
          <p className="CommuBoardTitle">제목</p>
          <p className="CommuBoardDate">등록일</p>
        </div>
        <table className="CommuBoard">
            {noticePosts.postIndex.map((post) => (
   
              <tr key={post.id}>
               <td><Link to={`/community/notice/${post.id}`}>{post.id}</Link></td>
               <td><Link to={`/community/notice/${post.id}`}>{post.title}</Link></td>
                <td>{post.date}</td>
              </tr>

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
          <div className="CommuWrite"><Link to='/community/noticeWrite'>글쓰기</Link></div>
        </div>
      </div>
    </section>
  );
};

export default CommuList;
