import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { noticePost, updateNoticePost } from './CommuData';
import './CommuNoticeDetail.css';

const CommuNoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticePosts, setNoticePosts] = useState(noticePost);
  const [isEditing, setIsEditing] = useState(false);
  const selectedPost = noticePosts?.postIndex?.find((post) => post.id === parseInt(id));
  const [editedTitle, setEditedTitle] = useState(selectedPost?.title || '');
  const [editedContent, setEditedContent] = useState(selectedPost?.content || '');

  useEffect(() => {
    // 페이지 진입 시, 로컬 스토리지에서 편집된 정보를 가져와 초기 상태로 설정
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
      const updatedPosts = prevNoticePosts?.postIndex?.map((post) => {
        if (post.id === parseInt(id)) {
          return { ...post, title: editedTitle, content: editedContent };
        } else {
          return post;
        }
      });

      return { ...prevNoticePosts, postIndex: updatedPosts };
    });

    setIsEditing(false);


    // 수정된 내용을 updateNoticePost 함수에 전달
    updateNoticePost(parseInt(id), editedTitle, editedContent);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };


  const deletePost = () => {
    const confirmation = window.confirm("정말로 게시글을 삭제하시겠습니까?");
    if (confirmation) {
      const updatedNoticePosts = noticePosts?.postIndex?.filter((post) => post.id !== parseInt(id));
      const updatedNoticePostsObject = {
        ...noticePosts,
        postIndex: updatedNoticePosts,
      };
      setNoticePosts(updatedNoticePostsObject);
      const storedNoticePosts = JSON.parse(localStorage.getItem('noticePosts'));
      const updatedStoredNoticePosts = storedNoticePosts.postIndex.filter((post) => post.id !== parseInt(id));
      localStorage.setItem('noticePosts', JSON.stringify({ postIndex: updatedStoredNoticePosts }));
      localStorage.removeItem(`editedPost_${id}`);
      navigate('/community');
    }
  };

  const goBack = () => {
    navigate(-1);
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
           
              <button className="CommuNoticePageButton" onClick={goBack}>목록보기</button>

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