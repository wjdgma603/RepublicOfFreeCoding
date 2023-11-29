import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { noticePost, updateNoticePost, deleteNoticePost } from './CommuData';
import './CommuNoticeDetail.css';

const CommuNoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticePosts, setNoticePosts] = useState(noticePost);
  const [deletedNoticePosts, setDeletedNoticePosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    const selectedPost = noticePost.postIndex.find((post) => post.id === parseInt(id));
    if (selectedPost) {
      setEditedTitle(selectedPost.title || '');
      setEditedContent(selectedPost.content || '');
    }
  }, [id]);

  const handleSaveClick = () => {
    updateNoticePost(parseInt(id), editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const goBack = () => {
    navigate('/community');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    const confirmation = window.confirm("정말로 게시글을 삭제하시겠습니까?");
    if (confirmation) {
      const deletedPost = noticePosts.postIndex.find((post) => post.id === parseInt(id));
      const updatedNoticePosts = noticePosts.postIndex.filter((post) => post.id !== parseInt(id));
      setNoticePosts({ ...noticePosts, postIndex: updatedNoticePosts });
      setDeletedNoticePosts((prevDeletedPosts) => [...prevDeletedPosts, deletedPost]);
      deleteNoticePost(parseInt(id));
      navigate('/community');
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

            <button className="CommuNoticePageButton" onClick={goBack}>
              <div className="CommuNoticePageButtonIcon"></div>
              <div>목록보기</div>
            </button>

            <div className="CommuNoticeRightButtonWrap">
              <button className="CommuNoticeEditButton" onClick={handleEditClick}>
                <div className="CommuNoticeEditButtonIcon"></div>
                <div>수정</div>
              </button>


              <button className="CommuDetailDeleteButton" onClick={handleDeleteClick}>
                <div className="CommuNoticePageButtonDeleteIcon"></div>
                <div>게시글 삭제</div>
              </button>
            </div>


          </div>
        )}
      </div>
    </div>
  );
};

export default CommuNoticeDetail;