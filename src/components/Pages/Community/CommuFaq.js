import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CommuFaq.css";

const CommuFaq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
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
        <h1>자주하는 질문</h1>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 0 ? "show" : ""}`}
          onClick={() => handleQuestionClick(0)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>첫번째 FAQ</p>
          </div>
          <div
            className={`CommuFaqArrow ${
              selectedQuestion === 0 ? "rotate" : ""
            }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${
            selectedQuestion === 0 ? "show" : ""
          }`}
        >
          <h1>A</h1>
          <p>첫번째 FAQ에 대한 답변</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 1 ? "show" : ""}`}
          onClick={() => handleQuestionClick(1)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>두번째 FAQ</p>
          </div>
          <div
            className={`CommuFaqArrow ${
              selectedQuestion === 1 ? "rotate" : ""
            }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${
            selectedQuestion === 1 ? "show" : ""
          }`}
        >
          <h1>A</h1>
          <p>두번째 FAQ에 대한 답변</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 2 ? "show" : ""}`}
          onClick={() => handleQuestionClick(2)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>세번째 FAQ</p>
          </div>
          <div
            className={`CommuFaqArrow ${
              selectedQuestion === 2 ? "rotate" : ""
            }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${
            selectedQuestion === 2 ? "show" : ""
          }`}
        >
          <h1>A</h1>
          <p>세번째 FAQ에 대한 답변</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 3 ? "show" : ""}`}
          onClick={() => handleQuestionClick(3)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>네번째 FAQ</p>
          </div>
          <div
            className={`CommuFaqArrow ${
              selectedQuestion === 3 ? "rotate" : ""
            }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${
            selectedQuestion === 3 ? "show" : ""
          }`}
        >
          <h1>A</h1>
          <p>네번째 FAQ에 대한 답변</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 4 ? "show" : ""}`}
          onClick={() => handleQuestionClick(4)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>다섯번째 FAQ</p>
          </div>
          <div
            className={`CommuFaqArrow ${
              selectedQuestion === 4 ? "rotate" : ""
            }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${
            selectedQuestion === 4 ? "show" : ""
          }`}
        >
          <h1>A</h1>
          <p>다섯번째 FAQ에 대한 답변</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 5 ? "show" : ""}`}
          onClick={() => handleQuestionClick(5)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>여섯번째 FAQ</p>
          </div>
          <div
            className={`CommuFaqArrow ${
              selectedQuestion === 5 ? "rotate" : ""
            }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${
            selectedQuestion === 5 ? "show" : ""
          }`}
        >
          <h1>A</h1>
          <p>여섯번째 FAQ에 대한 답변</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 6 ? "show" : ""}`}
          onClick={() => handleQuestionClick(6)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>일곱번째 FAQ</p>
          </div>
          <div
            className={`CommuFaqArrow ${
              selectedQuestion === 6 ? "rotate" : ""
            }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${
            selectedQuestion === 6 ? "show" : ""
          }`}
        >
          <h1>A</h1>
          <p>일곱번째 FAQ에 대한 답변</p>
        </div>
      </div>
    </div>
  );
};

export default CommuFaq;