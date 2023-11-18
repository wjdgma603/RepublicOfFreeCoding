
import './Main.css'
import Back from "./SubComponent/Back"
import Model from "./SubComponent/model"
import {useEffect,useState} from "react"

const Main = ({HeaderLoaded}) => {
    HeaderLoaded()
    const [LodingPage, setLodingPage] = useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setLodingPage(false)
      },3000)
    })
    return (
      <div className="Main">
        {LodingPage ? (
          <div id='loading'>
            <p className='loadingText'>Current date is Tue   1-01-1980</p>
            <p className='loadingText'>Enter new date :</p>
            <p className='loadingText'>Current time is 21:35:24.18</p>
            <p className='loadingText'>Enter new time:</p>
            <p className='loadingText'>The Republic Of Coding DOS</p>
            <p className='loadingText'>Version 0.80 (C)Copyright ROFC Corp 1981, 1982, 1983</p>
            <p className='loadingText'>A&gt;dir</p>
            <p className='loadingText'>&nbsp;&nbsp;Volume in drive A has no label</p>
            <p className='loadingText'>&nbsp;&nbsp;Directory of A:\</p>
            <p className='loadingText'>COMMAND COM&nbsp;&nbsp;&nbsp;&nbsp;17664 3-08-83 12:00p</p>
          </div>
        ) : (
        <div>
          <Back/>
          <Model/>
        </div>)}
      </div>
    );
}
 
export default Main;