
import './Main.css'
import Back from "./SubComponent/Back"
import Loading from './SubComponent/Loading'
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
          <Loading/>
        ) : (
        <div>
          <Back/>
          <Model/>
        </div>)}
      </div>
    );
}
 
export default Main;