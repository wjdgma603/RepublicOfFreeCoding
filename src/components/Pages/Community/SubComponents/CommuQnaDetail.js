import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CommuQnaDetail.css";
import { boardPost } from '../CommuQna';


const CommuQnaDetail = () => {
  const { id } = useParams();

  const selectedPost = boardPost.postIndex.find((post) => post.id === parseInt(id));
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
      <h2>문의사항</h2>
      <div className="CommuQnaTitle">{selectedPost.title}</div>
      <div className="CommuQnaText">{selectedPost.content}</div>
      <div className="CommuQnaTitle">문의 답변</div>
      <div className="CommuQnaText">
      국채를 모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는 미리 국회의 의결을 얻어야 한다. 
대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다. 
국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 
그 경영을 통제 또는 관리할 수 없다.

정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다. 
국가는 평생교육을 진흥하여야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관
이 발부한 영장을 제시하여야 한다. 
      </div>

        <div className="CommuQnaButtonWrap">
            <div>
                <button>답변수정</button>
                <button>답변삭제</button>
            </div>
            <button>글수정</button>
        </div>

      </div>
      
    </div>
  );
};

export default CommuQnaDetail;