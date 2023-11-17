
import './Main.css'
import Back from "./SubComponent/Back"
import Model from "./SubComponent/model"
import { useEffect, useState} from "react"

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