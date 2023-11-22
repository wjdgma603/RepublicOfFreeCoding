import React, { useState } from 'react';

export const noticePost = {
  postIndex: [
    {
      id: 3,
      title: '세번째 공지사항',
      content: '세번째 공지사항 내용입니다!',
      date: '2023.11.09.',
    },
    {
      id: 2,
      title: '두번째 공지사항',
      content: '두번째 공지사항 내용입니다!',
      date: '2023.11.09.',
    },
    {
      id: 1,
      title: '첫번째 공지사항',
      content: '첫번째 공지사항 내용입니다!',
      date: '2023.11.09.',
    },
  ],
};


export const updateNoticePost = (id, updatedContent, updatedAnswer) => {
  noticePost.postIndex = noticePost.postIndex.map((post) =>
    post.id === id ? { ...post, content: updatedContent, answer: updatedAnswer } : post
  );
};


const addNoticePost = (newPost) => {
  noticePost.postIndex.unshift({
    id: noticePost.postIndex.length + 1, //id 4부터 시작
    title: newPost.title,
    content: newPost.content,
    date: new Date().toLocaleDateString(),
  });
};


/******************************************* */

export const qnaPost = {
  postIndex: [
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

const addQnaPost = (newPost) => {
  qnaPost.postIndex.unshift({
    id: qnaPost.postIndex.length + 1, //id 4부터시작임
    title: newPost.title,
    content: newPost.content,
    date: new Date().toLocaleDateString(),
  });
};

/************************************* */

// export const faqPost = {
//   postIndex: [
//     {
//       id: 3,
//       title: '세번째 FAQ',
//       content: '세번째 qna입니다 질문이있습니다',
//     },
//     {
//       id: 2,
//       title: '두번째 FAQ',
//       content: '두번째 qna입니다 질문이있습니다',
//     },
//     {
//       id: 1,
//       title: '첫번째 FAQ',
//       content: '첫번째 qna입니다 질문이있습니다',
//     },
//   ],
// };

const CommuData = () => {
  const [noticePosts, setNoticePosts] = useState(noticePost);
  const [qnaPosts, setQnaPosts] = useState(qnaPost);

  const addNoticePost = (newPost) => {
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

export { CommuData as default, addNoticePost, addQnaPost };
