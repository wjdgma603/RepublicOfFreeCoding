
import { useNavigate } from 'react-router-dom'
import './NotFound.css'
const NotFound = ({HeaderDisable, FooterLoaded}) => {
    HeaderDisable()
    FooterLoaded()
    const Navigate = useNavigate();
    return ( 
        <div className="WrongURLPage">
            <div className='NotFound'>404 Not Found</div>
            <div className="MovetoPrev" onClick={()=>Navigate(-1)}>Move to Previous Page &lt;-</div>
            <div className="MovetoMain" onClick={()=>Navigate("/")}>Move to Main Page -&gt;</div>
        </div> 
     );
}
 
export default NotFound;