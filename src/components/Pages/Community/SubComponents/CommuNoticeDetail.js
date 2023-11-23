import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { noticePost, updateNoticePost } from './CommuData';
import './CommuNoticeDetail.css';

const CommuNoticeDetail = () => {
  const { id } = useParams();
  const [noticePosts, setNoticePosts] = useState(noticePost);
  const selectedPost = noticePosts.postIndex.find((post) => post.id === parseInt(id));

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(selectedPost.content);
  const [editedTitle, setEditedTitle] = useState(selectedPost.title);


  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(`editedPost_${id}`));
    if (savedData) {
      setEditedTitle(savedData.editedTitle);
      setEditedContent(savedData.editedContent);
    }
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {

    setNoticePosts((prevNoticePosts) => {
      const updatedPosts = prevNoticePosts.postIndex.map((post) => {
        if (post.id === parseInt(id)) {
          return { ...post, title: editedTitle, content: editedContent };
        } else {
          return post;
        }
      });

      return { ...prevNoticePosts, postIndex: updatedPosts };
    });

    setIsEditing(false);
    localStorage.setItem(`editedPost_${id}`, JSON.stringify({ editedTitle, editedContent }));
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const deletePost = () => {
    const confirmation = window.confirm("정말로 게시글을 삭제하시겠습니까?");
    if (confirmation) {
      const updatedNoticePosts = noticePosts.postIndex.filter((post) => post.id !== parseInt(id));
      setNoticePosts(prevNoticePosts => ({
        ...prevNoticePosts,
        postIndex: updatedNoticePosts
      }));
      setIsEditing(false);
      window.location.href = '/community';
      localStorage.removeItem(`editedPost_${id}`);
    }
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
        <h1>공지사항</h1>

        {isEditing ? (
          <div>
            <input
              className="CommuQnaEditTitle"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </div>
        ) : (
          <div className="CommuQnaTitle">
            <div>{editedTitle}</div>
            <div></div>
          </div>
        )}

        {isEditing ? (
          <textarea
            className="CommuQnaEditText"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <div className="CommuQnaText">{editedContent}</div>
        )}

        {isEditing ? (
          <div>
            <div className="CommuQnaEditDetailButtonWrap">
              <button className="CommuQnaEditDetailButton" onClick={handleSaveClick}>
                저장
              </button>
              <button className="CommuQnaEditDetailButton" onClick={handleCancelClick}>
                취소
              </button>
            </div>
          </div>
        ) : (
          <div className="CommuNoticeDetailButtonWrap">
            <div></div>
            <Link to="/community">
              <button className="CommuNoticePageButton">목록보기</button>
            </Link>
            <div>
              <button className="CommuNoticeEditButton" onClick={handleEditClick}>
                글수정
              </button>
              <button className="CommuDetailDeleteButton" onClick={deletePost}>게시글 삭제</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommuNoticeDetail;