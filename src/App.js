import { Routes, Route } from 'react-router-dom';
import './App.css';
import './font.css';

import Header from './components/Header/Header';
import Main from './components/Pages/Main/Main';
import Login from './components/Pages/Login/Login';
import Introduce from './components/Pages/Introduce/Introduce';
import EbookList from './components/Pages/Ebook/EbookList';
import CommuList from './components/Pages/Community/CommuList';
import CodeTestList from './components/Pages/CodeTest/CodeTestList';
import Footer from './components/Footer/Footer';
import CommuQnaWrite from './components/Pages/Community/SubComponents/CommuQnaWrite';
import CommuQna from './components/Pages/Community/CommuQna';

import CommuQnaDetail from './components/Pages/Community/SubComponents/CommuQnaDetail';
import CommuNoticeDetail from './components/Pages/Community/SubComponents/CommuNoticeDetail';
import CommuFaq from './components/Pages/Community/CommuFaq';
import CommuNoticeWrite from './components/Pages/Community/SubComponents/CommuNoticeWrite';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/*' element={<Main/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/introduce/*' element={<Introduce/>}/>
        <Route path='/ebook/*' element={<EbookList/>}/>
        <Route path='/test' element={<CodeTestList/>}/>
        <Route path='/community/*' element={<CommuList/>}/>
        <Route path='/community/notice' element={<CommuList/>}/>
        <Route path='/community/noticeWrite' element={<CommuNoticeWrite />}/>
        <Route path="/community/notice/:id" element={<CommuNoticeDetail />} />
        <Route path='/community/qnaWrite' element={<CommuQnaWrite />}/>
        <Route path='/community/qna' element={<CommuQna />}/>
        <Route path="/community/qna/:id" element={<CommuQnaDetail />} />
        <Route path='/community/faq' element={<CommuFaq />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
