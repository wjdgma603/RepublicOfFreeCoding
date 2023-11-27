import './DepthMenu.css'

import { useEffect } from 'react';
const DepthMenu = ({FilterName, Data, setTabMenu}) => {
    // 상위컴포넌트 필요한 프롭 값 목록

    // FilterName = 필터 대신 사용할 이름

    // Data = Json 연결하여 Data프롭으로 전달
    // Json 내용은 id = 0부터 시작하는 인덱스, TabName = 메뉴이름

    // setTabMenu = setState에 해당하는 값 
    useEffect(()=>{
        const DepthMenu = document.querySelectorAll(".DepthComponent>.DepthWrap>.DepthMenu")
        DepthMenu[0].classList.add('Activate')
        DepthMenu.forEach((DepthItem)=>{
            DepthItem.addEventListener('click', ()=>{
            DepthMenu.forEach((DepthItem)=>{DepthItem.classList.remove('Activate')})
            DepthItem.classList.add('Activate')
            })
        })
    },[])
    const ReturnIndex = (index)=>{
        setTabMenu(index)
    }
    return ( 
        <div className="DepthComponent">
            <div className="DepthName">{FilterName? FilterName : "필터"}</div>
            <div className='DepthWrap'>
                {Data.map((DataItem)=>
                    <div className={`DepthMenu`} key={DataItem.id} onClick={()=>ReturnIndex(DataItem.TabName)}>{DataItem.TabName}</div>
                )}
            </div>
        </div>
     );
}
export default DepthMenu;