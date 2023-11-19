import React from 'react';

export const noticePost = {
  postIndex: [
    {
      id: 3,
      title: '세번째 공지사항',
      content: '세번째 공지사항 내용입니다!',
      date: '23.11.09',
      // date: new Date(23, 11, 9).toLocaleDateString(),
    },
    {
      id: 2,
      title: '두번째 공지사항',
      content: '두번째 공지사항 내용입니다!',
      date: '23.11.09',
      // date: new Date(23, 11, 9).toLocaleDateString(),
    },
    {
      id: 1,
      title: '첫번째 공지사항',
      content: '첫번째 공지사항 내용입니다!',
      date: '23.11.09',
      // date: new Date(23, 11, 9).toLocaleDateString(),
    },
  ],
};

export const qnaPost = {
    postIndex: [
      {
        id: 3,
        title: '세번째 qna',
        content: '세번째 qna입니다 질문이있습니다',
        date: '23.11.09',
        // date: new Date(23, 11, 9).toLocaleDateString(),
      },
      {
        id: 2,
        title: '두번째 qna',
        content: '두번째 qna입니다 질문이있습니다',
        date: '23.11.09',
        // date: new Date(23, 11, 9).toLocaleDateString(),
      },
      {
        id: 1,
        title: '첫번째 qna',
        content: '첫번째 qna입니다 질문이있습니다',
        date: '23.11.09',
        // date: new Date(23, 11, 9).toLocaleDateString(),
      },
    ],
  };

const CommuData = () => {
  return {
    noticePost,  qnaPost,
  };
};

export default CommuData;
