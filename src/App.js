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
import { useEffect, useState } from 'react';

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

  return (
    <div className="App">
      <Header isHeaderLoaded={isHeaderLoaded}/>
      <Routes>
        <Route path='/*' element={<Main HeaderLoaded={HeaderLoaded} FooterLoaded={FooterLoaded}/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/introduce/*' element={<Introduce/>}/>
        <Route path='/ebook/*' element={<EbookList/>}/>
        <Route path='/test' element={<CodeTestList/>}/>
        <Route path='/community/*' element={<CommuList/>}/>
      </Routes>
      <Footer isFooterLoaded={isFooterLoaded}/>
    </div>
  );
}

export default App;
