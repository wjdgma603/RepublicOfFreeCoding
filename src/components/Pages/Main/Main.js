
import './Main.css'
import Back from "./SubComponent/Back"
import Model from "./SubComponent/model"
import { useEffect, useState} from "react"

const Main = () => {
    const [LodingPage, setLodingPage] = useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setLodingPage(false)
      },100)
    })
    return (
      <div className="App">
        {LodingPage ? (
          <div id='loading'>
            <Back/>
            <p id='loadingText'>Welcome To Republic Of Free Coding</p>
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