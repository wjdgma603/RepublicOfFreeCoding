import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommuFaq.css';

const CommuFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswerVisibility = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="CommuSection">
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
        <h1>자주하는 질문</h1>

        <div className="CommuFaqQuestion" onClick={() => toggleAnswerVisibility(0)}>
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>첫번째 FAQ</p>
          </div>
          <div className="CommuFaqArrow"></div>
        </div>
        {activeIndex === 0 && (
          <div className="CommuFaqQuestionAnswer">
            <h1>A</h1>
            <p>첫번째 FAQ에대한 답변</p>
          </div>
        )}

        <div className="CommuFaqQuestion" onClick={() => toggleAnswerVisibility(1)}>
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>두번째 FAQ</p>
          </div>
          <div className="CommuFaqArrow"></div>
        </div>
        {activeIndex === 1 && (
          <div className="CommuFaqQuestionAnswer">
            <h1>A</h1>
            <p>두번째 FAQ에대한 답변</p>
          </div>
        )}

        <div className="CommuFaqQuestion" onClick={() => toggleAnswerVisibility(2)}>
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>세번째 FAQ</p>
          </div>
          <div className="CommuFaqArrow"></div>
        </div>
        {activeIndex === 2 && (
          <div className="CommuFaqQuestionAnswer">
            <h1>A</h1>
            <p>세번째 FAQ에대한 답변</p>
          </div>
        )}

        <div className="CommuFaqQuestion" onClick={() => toggleAnswerVisibility(3)}>
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>네번째 FAQ</p>
          </div>
          <div className="CommuFaqArrow"></div>
        </div>
        {activeIndex === 3 && (
          <div className="CommuFaqQuestionAnswer">
            <h1>A</h1>
            <p>네번째 FAQ에대한 답변</p>
          </div>
        )}

        <div className="CommuFaqQuestion" onClick={() => toggleAnswerVisibility(4)}>
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>다섯번째 FAQ</p>
          </div>
          <div className="CommuFaqArrow"></div>
        </div>
        {activeIndex === 4 && (
          <div className="CommuFaqQuestionAnswer">
            <h1>A</h1>
            <p>다섯번째 FAQ에대한 답변</p>
          </div>
        )}

        <div className="CommuFaqQuestion" onClick={() => toggleAnswerVisibility(5)}>
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>여섯번째 FAQ</p>
          </div>
          <div className="CommuFaqArrow"></div>
        </div>
        {activeIndex === 5 && (
          <div className="CommuFaqQuestionAnswer">
            <h1>A</h1>
            <p>여섯번째 FAQ에대한 답변</p>
          </div>
        )}

        <div className="CommuFaqQuestion" onClick={() => toggleAnswerVisibility(6)}>
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>일곱번째 FAQ</p>
          </div>
          <div className="CommuFaqArrow"></div>
        </div>
        {activeIndex === 6 && (
          <div className="CommuFaqQuestionAnswer">
            <h1>A</h1>
            <p>일곱번째 FAQ에대한 답변</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommuFaq;
