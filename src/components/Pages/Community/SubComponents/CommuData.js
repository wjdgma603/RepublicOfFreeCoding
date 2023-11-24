import React, { useState } from 'react';

export const noticePost = {
  
  postIndex: [
    {
      id: 5,
      title: '5번째 공지사항',
      content: '다섯번째 공지사항 내용입니다',
      date: '2023.11.09.',
    },

    {
      id: 4,
      title: '4번째 공지사항',
      content: '네번째 공지사항 내용입니다',
      date: '2023.11.12.',
    },
    {
      id: 3,
      title: '3번째 공지사항',
      content: '세번째 공지사항 내용입니다',
      date: '2023.11.09.',
    },

    {
      id: 2,
      title: '2번째 공지사항',
      content: '두번째 공지사항 내용입니다',
      date: '2023.11.12.',
    },

    {
      id: 1,
      title: '1번째 공지사항',
      content: '첫번째 공지사항 내용입니다',
      date: '2023.11.18.',
    },

  ],
};


export const updateNoticePost = (id, updatedContent, updatedAnswer) => {
  noticePost.postIndex = noticePost.postIndex.map((post) =>
    post.id === id ? { ...post, content: updatedContent, answer: updatedAnswer } : post
  );
};

export const addNoticePost = (newPost) => {
  const updatedPosts = [
    { id: noticePost.postIndex.length + 1, ...newPost },
    ...noticePost.postIndex
  ];
  noticePost.postIndex = updatedPosts;

  localStorage.setItem('noticePosts', JSON.stringify({ postIndex: updatedPosts }));
};




// export const addNoticePost = (newPost) => {
//   noticePost.postIndex.unshift({
//     id: noticePost.postIndex.length + 1,
//     title: newPost.title,
//     content: newPost.content,
//     date: new Date().toLocaleDateString(),
//   });

//   // 로컬 스토리지에 데이터 저장
//   const updatedPosts = [newPost, ...noticePost.postIndex];
//   localStorage.setItem('noticePosts', JSON.stringify({ postIndex: updatedPosts }));
// };






/******************************************* */


export const qnaPost = {
  postIndex: [
    {
      id: 5,
      title: '다섯번째qna',
      content: '다섯번째 qna입니다 질문이있습니다',
      answer: '다섯번째 질문에대한 답변입니다.',
      date: '2023.11.09.',
      answerDate: '2023.11.10',
    },
    {
      id: 4,
      title: '네번째qna',
      content: '네번째 qna입니다 질문이있습니다',
      answer: '네번째 질문에대한 답변입니다.',
      date: '2023.11.09.',
      answerDate: '2023.11.10',
    },
    {
      id: 3,
      title: '세번째 qna',
      content: '세번째 qna입니다 질문이있습니다',
      answer: '세번째 질문에대한 답변입니다.',
      date: '2023.11.09.',
      answerDate: '2023.11.10',
    },

    {
      id: 2,
      title: '두번째 qna',
      content: '두번째 qna입니다 질문이있습니다',
      answer: '두번째 질문에대한 답변입니다.',
      date: '2023.11.09.',
      answerDate: '2023.11.10',
    },

    {
      id: 1,
      title: '첫번째 qna',
      content: '첫번째 qna입니다 질문이있습니다',
      answer: '첫번째 질문에대한 답변입니다.',
      date: '2023.11.09.',
      answerDate: '2023.11.10',
    },

  ],
};

export const updateQnaPost = (id, updatedContent, updatedAnswer) => {
  qnaPost.postIndex = qnaPost.postIndex.map((post) =>
    post.id === id ? { ...post, content: updatedContent, answer: updatedAnswer } : post
  );
};

export const addQnaPost = (newPost) => {
  qnaPost.postIndex.unshift({
    id: qnaPost.postIndex.length + 1,
    title: newPost.title,
    content: newPost.content,
    date: new Date().toLocaleDateString(),
  });

  const updatedPosts = [newPost, ...qnaPost.postIndex];
  localStorage.setItem('qnaPosts', JSON.stringify({ postIndex: updatedPosts }));
};

const CommuData = () => {
  const storedNoticePosts = JSON.parse(localStorage.getItem('noticePosts'));
  const [noticePosts, setNoticePosts] = useState(storedNoticePosts || noticePost);

  const [qnaPosts, setQnaPosts] = useState(qnaPost);
  
  const addNoticePost = (newPost) => {
    setNoticePosts((prevPosts) => {
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
