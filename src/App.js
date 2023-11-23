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

//codeTest
import CodeTestHtml from "./components/Pages/CodeTest/CodeTestHtml"
import CodeTestCss from "./components/Pages/CodeTest/CodeTestCss"
import CodeTestJs from "./components/Pages/CodeTest/CodeTestJs"



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


  
  return (
    <div className="App">
      <Header isHeaderLoaded={isHeaderLoaded}/>
      <Routes>
        <Route path='/*' element={<Main HeaderLoaded={HeaderLoaded}/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/introduce/*' element={<Introduce/>}/>
        <Route path='/ebook/*' element={<EbookList/>}/>
        <Route path='/test' element={<CodeTestList/>}/>
        <Route path='/community/*' element={<CommuList/>}/>
        <Route path='/codeTestHtml' element={<CodeTestHtml/>}/>
        <Route path='/codeTestCss' element={<CodeTestCss/>}/>
        <Route path='/codeTestJs' element={<CodeTestJs/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
