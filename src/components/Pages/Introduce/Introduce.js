// import React, { useEffect, useState } from 'react';
import './Introduce.css';

import image1 from './images/IntroBook1.png';
import image2 from './images/IntroBook2.png';
import image3 from './images/IntroBook3.png';
import image4 from './images/IntroBook4.png';
import image5 from './images/IntroBook5.png';
import image6 from './images/IntroBook6.png';

const CombinedComponent = () => {
  const sliderImages = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="Introduce">
      <div className="IntroImg Flex">
        <div>
          <p className="Intro_40px_w IntroTextCenter">우리는 때로 무언가를 배워야만 합니다.</p>
          <p className="Intro_16px_w IntroTextCenter">
            자유코딩공화국은 누구나, 경제적으로 시간적 제약없이 내가 원하는 것을 배우고
            지식을 나눌 수 있는 공간입니다.
          </p>
        </div>
      </div>
      <section className="IntroWrap">
        <div className="IntroFirstSection">
          <p className="Intro_title">The best way to learn to code</p>
          <div className="Flex">
            <div>
              <p className="Intro_30px_b IntroTextCenter">우리는 성장기회의 평등을 추구합니다.</p>
              <p className="IntroTextCenter Intro_16px_b">
                언제 어디서나 학습가능한 생태계를 만들어<br />
                누구나 성장의 기회를 평등하게 갖도록 돕는게<br />
                자유코딩공화국의 목표입니다.
              </p>
            </div>
            <div>
              <p className="Intro_30px_b IntroTextCenter">Free Republic of the Coding</p>
              <p className="IntroTextCenter Intro_16px_b">
                자유롭게 프로그래밍 문제를 풀고<br />
                온라인으로 채점 받을 수 있는 곳입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="IntroSecondSection">
          <p className="Intro_title">The best way to learn to code</p>
          <div className="Flex">
            <div>
              <div className="IntroImgHtml"></div>
              <p className="IntroClass IntroFontHtml">Introduction to HTML</p>
              <p className="IntroTextCenter Intro_16px_b IntroClassFont">
                HTML은 모든 웹페이지의 핵심입니다.
                프론트엔드 웹 개발에 관심이 있다면 이 과정을
                시작하는 것이 좋습니다.
              </p>
            </div>
            <div>
              <div className="IntroImgCss"></div>
              <p className="IntroClass IntroFontCss">Introduction to CSS</p>
              <p className="IntroTextCenter Intro_16px_b IntroClassFont">
                CSS는 HTML과 JavaScript를 배우는 사람들에게
                완벽한 파트너입니다.배우기가 간단하므로
                곧 나만의 아름다운 디지털 경험을
                만들어볼 수 있습니다.
              </p>
            </div>
            <div>
              <div className="IntroImgJs"></div>
              <p className="IntroClass IntroFontJs">Introduction to JavaScript</p>
              <p className="IntroTextCenter Intro_16px_b IntroClassFont">
                대화형 웹사이트를 만들고, 재미있는 모바일 앱을 코딩하고,
                간단한 게임을 만들고 싶었던 적이 있나요?
                JavaScript를 사용하면
                이 모든 것을 할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='IntroThirdSection'>
        <p className="Intro_title">e-book</p>
        <div className="introSlider">
        <div className="introSliderContainer">
            {sliderImages.map((image, index) => (
            <img className='sliderImages1 slideImages' key={index} src={image} alt={`Intro Book ${index + 1}`} />
            ))}
            {sliderImages.map((image, index) => (
            <img className='sliderImages2 slideImages' key={`duplicate-${index}`} src={image} alt={`Intro Book ${index + 1}`} />
            ))}
        </div>
        </div>
    </div>
    </section>
  );
};

export default CombinedComponent;
