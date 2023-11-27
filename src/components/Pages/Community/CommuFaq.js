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
            <p>회원가입은 어떻게 하나요?</p>
          </div>
          <div
            className={`CommuFaqArrow ${selectedQuestion === 0 ? "rotate" : ""
              }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${selectedQuestion === 0 ? "show" : ""
            }`}
        >
          <h1>A</h1>
          <p>우측 상단의 "회원가입" 버튼을 누르면, 새로운 여정이 시작됩니다.<br/><br/>

자유코딩 공화국은 여러분을 환영합니다. <br/>회원으로 가입하시면, 우리의 다양한 컨텐츠를 편안하게 즐기실 수 있습니다. 함께하는 회원 여러분들과의 소통과 협업, 그리고 새로운 지식과 경험을 만나보세요. 여러분의 참여로, 더욱 다채로워지는 자유코딩 공화국을 만들어갑니다. 지금 바로 시작해보세요. 더 많은 가능성이 여러분을 기다리고 있습니다.</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 1 ? "show" : ""}`}
          onClick={() => handleQuestionClick(1)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>아이디와 비밀번호를 분실했을 때 어떻게 찾을 수 있나요?</p>
          </div>
          <div
            className={`CommuFaqArrow ${selectedQuestion === 1 ? "rotate" : ""
              }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${selectedQuestion === 1 ? "show" : ""
            }`}
        >
          <h1>A</h1>
          <p>아이디나 패스워드를 잊어버리셨나요?<br />
            홈페이지 메인 로그인 화면 하단에 보이는 [아이디/비밀번호 찾기] 버튼을 통해 가입 당시 등록하신 이름과 이메일을 입력하시면 아이디와 비밀번호를 찾을 수 있어요! <br /><br />
            [아이디 찾기]<br />
            아이디를 분실한 경우 [아이디 찾기]에서 개인정보보호를 위하여 본인 여부를 확인 후 아이디를 확인하실 수 있습니다.<br /><br />
            [비밀번호 찾기]<br />
            비밀번호를 분실한 경우 [비밀번호 찾기]에서 개인정보보호를 위하여 본인 여부를 확인한 후, 가입 당시 입력하신 이메일로 임시 비밀번호를 발송해 드립니다.
            임시로 발송된 비밀번호로 로그인하신 후 [마이페이지] - [회원정보 수정]에서 비밀번호를 꼭 변경해 주세요.</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 2 ? "show" : ""}`}
          onClick={() => handleQuestionClick(2)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>코딩 테스트는 어떻게 진행되나요?</p>
          </div>
          <div
            className={`CommuFaqArrow ${selectedQuestion === 2 ? "rotate" : ""
              }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${selectedQuestion === 2 ? "show" : ""
            }`}
        >
          <h1>A</h1>
          <p>코딩테스트 페이지에서는 HTML, CSS, 그리고 JavaScript의 다양한 난이도의 코딩 문제에 도전할 수 있습니다. 각 문제를 풀고 나면, 여러분의 답안을 제출할 수 있습니다. 제출하면 정답 여부를 확인할 수 있을 뿐만 아니라, 자세한 해설을 통해 더 나은 코드를 작성하는 방법을 배울 수 있습니다.<br/><br/>

한 문제를 풀면, 바로 다음 문제로 넘어갈 수 있어 여러분은 끊임없는 도전과 성장을 경험할 수 있습니다. 테스트의 난이도는 다양하게 준비되어 있어 여러분의 실력을 효과적으로 향상시킬 수 있습니다. 지금 바로 시작하여 자신의 능력을 펼쳐보세요. 여러분의 코드가 어떤 모양으로 진화하는지 기대됩니다. 함께 즐겁게 코딩에 도전해보아요!</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 3 ? "show" : ""}`}
          onClick={() => handleQuestionClick(3)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>테스트 결과는 어떻게 확인할 수 있나요?</p>
          </div>
          <div
            className={`CommuFaqArrow ${selectedQuestion === 3 ? "rotate" : ""
              }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${selectedQuestion === 3 ? "show" : ""
            }`}
        >
          <h1>A</h1>
          <p>각 문제를 푼 후, 정답과 함께 자세한 답안을 실시간으로 확인할 수 있습니다. HTML, CSS, 그리고 JavaScript 각 섹션에 해당하는 문제를 모두 푼 경우, 여러분은 맞힌 문제와 틀린 문제에 대한 상세한 내용을 자세하게 살펴볼 수 있습니다.<br/><br/>

마이페이지에서는 여러분이 푼 문제들에 대한 정답 여부, 어떤 답안을 선택해서 틀렸는지, 그리고 어떤 부분을 놓치고 있는지에 대한 통계적인 정보도 확인할 수 있습니다. 이를 통해 여러분은 자신만의 학습 경로를 찾아가며 지속적인 성장을 이룰 수 있습니다. 즐겁게 코딩 여정을 걸어가세요. 함께 여러분의 노력을 응원합니다.





</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 4 ? "show" : ""}`}
          onClick={() => handleQuestionClick(4)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>사이트에서 어떤 기능을 사용할 수 있나요?</p>
          </div>
          <div
            className={`CommuFaqArrow ${selectedQuestion === 4 ? "rotate" : ""
              }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${selectedQuestion === 4 ? "show" : ""
            }`}
        >
          <h1>A</h1>
          <p>자유코딩 공화국에서 여러분이 즐길 수 있는 다양한 기능이 있습니다.<br/><br/>

1.전자북 문제집 안내:<br/>

코딩을 쉽게 공부하고자 하는 분들을 위해 전자북 문제집을 제공하고 있습니다. 다양한 주제와 난이도의 문제들이 담겨있어 여러분의 학습에 도움이 될 것입니다.<br/><br/>
2.코딩 문제 페이지:<br/>

자신의 코딩 실력을 점검하고 향상시키고자 하는 분들을 위해 코딩 문제 페이지를 운영하고 있습니다. 다양한 난이도의 문제를 풀며 실전에 대비해보세요.<br/><br/>
3.커뮤니티 페이지:<br/>

여러분의 불만사항과 궁금증을 해결하고자 커뮤니티 페이지를 운영하고 있습니다. 함께 정보를 공유하고 소통하며 더 나은 코딩 환경을 만들어가는 공간입니다.<br/><br/>
4.공지사항 및 문의사항 FAQ:<br/>

홈페이지의 공지사항과 문의사항, 그리고 FAQ를 통해 여러분에게 필요한 정보를 신속하게 제공하고 있습니다. 언제든지 홈페이지를 통해 소식을 확인하고 궁금증을 해소해보세요.<br/><br/>
자유코딩 공화국은 여러분의 코딩 학습을 지원하고자 다양한 기능을 제공하고 있습니다. 함께 성장하고 즐거운 코딩 여정을 만들어가요!</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 5 ? "show" : ""}`}
          onClick={() => handleQuestionClick(5)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>코딩 테스트의 제한 시간이 있나요?</p>
          </div>
          <div
            className={`CommuFaqArrow ${selectedQuestion === 5 ? "rotate" : ""
              }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${selectedQuestion === 5 ? "show" : ""
            }`}
        >
          <h1>A</h1>
          <p>코딩 테스트에는 제한 시간이 부여되어 있지 않습니다.<br/> 여러분은 충분한 시간을 가지고 문제를 심도 있게 고민하고, 자신만의 고찰을 통해 최적의 코드를 작성할 수 있습니다. 편안한 환경에서 여러가지 시도를 통해 문제에 대한 답을 찾아보세요. 당신의 창의성과 논리적 사고가 최대한 발휘될 수 있도록 마음껏 도전해보세요.</p>
        </div>

        <div
          className={`CommuFaqQuestion ${selectedQuestion === 6 ? "show" : ""}`}
          onClick={() => handleQuestionClick(6)}
        >
          <div className="CommuFaqQuestionLeft">
            <h1>Q</h1>
            <p>문의나 불만사항을 어떻게 제출할 수 있나요?</p>
          </div>
          <div
            className={`CommuFaqArrow ${selectedQuestion === 6 ? "rotate" : ""
              }`}
          ></div>
        </div>
        <div
          className={`CommuFaqQuestionAnswer ${selectedQuestion === 6 ? "show" : ""
            }`}
        >
          <h1>A</h1>
          <p>고객 여러분의 소중한 의견을 기다리고 있습니다. 문의나 불만사항을 손쉽게 제출하실 수 있는 방법은 다양합니다. <br/><br/>

1.문의사항 게시판 활용:<br />

홈페이지 내 '고객센터'에서 운영 중인 문의사항 게시판을 통해 글을 작성해주세요. 운영자가 신속하게 확인하고 답변드릴 것입니다.<br/><br/>
2.전화 및 이메일 문의:<br />

홈페이지 하단에 제공된 전화번호로 언제든지 연락 주시거나, 이메일로 문의사항을 보내주세요. 친절한 상담원이 최대한 신속하게 답변 도와드릴 것입니다.<br/><br/>
3.고객센터 방문:<br />

만약 오프라인 상담이 필요하다면, 고객센터를 직접 방문하셔서 원하시는 도움을 받을 수 있습니다. 운영시간을 확인하고 방문해주세요.
우리는 언제나 사용자 분들의 의견에 귀 기울이며, 보다 나은 서비스를 제공하기 위해 최선을 다하고 있습니다. 늘 빠른 처리와 친절한 서비스로 보답드리겠습니다. 감사합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default CommuFaq;