// CommuData.js

import React, { useState, useRef } from 'react';

export const noticePost = {
  postIndex: [
    {
      id: 3,
      title: '세번째 공지사항',
      content: '세번째 공지사항 내용입니다!',
      date: '23.11.09',
    },
    {
      id: 2,
      title: '두번째 공지사항',
      content: '두번째 공지사항 내용입니다!',
      date: '23.11.09',
    },
    {
      id: 1,
      title: '첫번째 공지사항',
      content: '첫번째 공지사항 내용입니다!',
      date: '23.11.09',
    },
  ],
};

export const qnaPost = {
  postIndex: [
    {
      id: 3,
      title: '세번째 qna',
      content: '세번째 qna입니다 질문이있습니다',
      answer: '세번째 질문에대한 답변입니다.',
      date: '23.11.09',
    },
    {
      id: 2,
      title: '두번째 qna',
      content: '두번째 qna입니다 질문이있습니다',
      answer: '두번째 질문에대한 답변입니다.',
      date: '23.11.09',
    },
    {
      id: 1,
      title: '첫번째 qna',
      content: '첫번째 qna입니다 질문이있습니다',
      answer: '첫번째 질문에대한 답변입니다.',
      date: '23.11.09',
    },
  ],
};
const CommuData = () => {
    console.log("CommuData hook called");
  
    const [noticePosts, setNoticePosts] = useState(noticePost);
    const [qnaPosts, setQnaPosts] = useState(qnaPost);
  
    const addNoticePost = (newPost, callback) => {
      setNoticePosts((prevNoticePosts) => {
        console.log("prevNoticePosts:", prevNoticePosts);
        
        return {
          ...prevNoticePosts,
          postIndex: [...prevNoticePosts.postIndex, newPost],
        };
      });
  
      if (callback) {
        callback();
      }
    };
  
    const addQnaPost = (newPost) => {
      setQnaPosts((prevPosts) => {
        const updatedPosts = [newPost, ...prevPosts.postIndex];
        return { postIndex: updatedPosts };
      });
    };
  
    return {
      noticePosts,
      qnaPosts,
      addNoticePost,
      addQnaPost,
    };
  };
  
  export default CommuData;