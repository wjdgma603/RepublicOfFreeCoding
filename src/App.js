import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './font.css';

import Header from './components/Header/Header';
import Main from './components/Pages/Main/Main';
import Login from './components/Pages/Login/Login';
import Introduce from './components/Pages/Introduce/Introduce';
import EbookList from './components/Pages/Ebook/EbookList';
import EbookDetail from './components/Pages/Ebook/SubComponents/EbookDetail';
import CommuList from './components/Pages/Community/CommuList';
import CodeTestList from './components/Pages/CodeTest/CodeTestList';
import Footer from './components/Footer/Footer';

//codeTest
import CodeTestHtml from "./components/Pages/CodeTest/CodeTestHtml"
import CodeTestCss from "./components/Pages/CodeTest/CodeTestCss"
import CodeTestJs from "./components/Pages/CodeTest/CodeTestJs"
import { useEffect, useState } from 'react'; 
import NotFound from './components/Common/NotFound';

function App() {

  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  function HeaderLoaded() {
    useEffect(() => {
      setIsHeaderLoaded(true);
      return () => {
        setIsHeaderLoaded(false);
      };
    }, []);
    return isHeaderLoaded;
  }
  const [headerDisable, setHeaderDisable] = useState(false);
  function HeaderDisable() {
    useEffect(() => {
      setHeaderDisable(true);
      return () => {
        setHeaderDisable(false);
      };
    }, []);
    return headerDisable;
  }
  // Header용 컴포넌트 마운트 관리함수
  const [isFooterLoaded, setIsFooterLoaded] = useState(false);
  function FooterLoaded() {
    useEffect(() => {
      setIsFooterLoaded(true);
      return () => {
        setIsFooterLoaded(false);
      };
    }, []);
    return isFooterLoaded;
  }
  // Footer용 컴포넌트 마운트 관리함수

  // 로그인 기능 구현
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    Nickname : ''
  });
  const [isLogin, setIsLogin] = useState(false);
  const {Kakao} = window;

  const KakaoLogin = async()=>{
      await Kakao.Auth.login({
          success(res){
              Kakao.Auth.setAccessToken(res.access_token) 
              Kakao.API.request({
                  url : '/v2/user/me',
                  success(res){
                      console.log('카카오 데이터 인가 요청 성공')
                      const KakaoAccount = res.kakao_account;
                      setUser({
                        Nickname: KakaoAccount.profile.nickname,
                      });
                      setIsLogin(true);
                      Navigate('/')
                  }
              })
          },
          fail(err){
              console.log(err)
          }
      })
  } // 카카오 로그인 함수 
  
  const KakaoLogout = ()=>{
    Kakao.API.request({
      url : '/v1/user/unlink',
      success : function(response) {
        setUser({
          Nickname : ''
        });
        setIsLogin(false); 
      },
      fail: function(error) {
        alert('정상적으로 로그아웃 되지 않았습니다. 다시 로그인 해주세요.')
        console.log(error)
        Navigate('/login')
      }
    })
  }
  //카카오 로그아웃 함수
    useEffect(()=>{
      const {Kakao} = window;
      const initKakao = async()=>{
        const jsKey = "12ba0647517f7c2ec68bec6dd945c6df";
        if(Kakao && !Kakao.isInitialized()){
            await Kakao.init(jsKey) 
        }
      }
      initKakao();
      // Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false)
      // 카카오 엑세스 토큰이 만료되지않아서 상태에 저장된 이름이 만료되었는데도 계속 로그인되어보이는 오류 발생으로 주석처리
    },[])
  return (
    <div className="App">
      <Header isHeaderLoaded={isHeaderLoaded} headerDisable={headerDisable} KakaoLogout={KakaoLogout} isLogin={isLogin} user={user}/>
      <Routes>
        <Route exact path='/*' element={<Main HeaderLoaded={HeaderLoaded} FooterLoaded={FooterLoaded} HeaderDisable={HeaderDisable}/>}/>
        <Route exact path='/login/*' element={<Login FooterLoaded={FooterLoaded} HeaderDisable={HeaderDisable} KakaoLogin={KakaoLogin}/>}/>
        <Route exact path='/introduce/*' element={<Introduce/>}/>
        <Route exact path='/ebook/*' element={<EbookList/>}/>
        <Route exact path='/ebook/:Ebookid' element={<EbookDetail/>}/>
        <Route exact path='/test/*' element={<CodeTestList/>}/>
        <Route exact path='/community/*' element={<CommuList/>}/>
        <Route exact path='*' element={<NotFound HeaderDisable={HeaderDisable} FooterLoaded={FooterLoaded}/>}/>
        <Route path='/codeTestHtml' element={<CodeTestHtml/>}/>
        <Route path='/codeTestCss' element={<CodeTestCss/>}/>
        <Route path='/codeTestJs' element={<CodeTestJs/>}/>
      </Routes>
      <Footer isFooterLoaded={isFooterLoaded}/>
    </div>
  );
}

export default App;
