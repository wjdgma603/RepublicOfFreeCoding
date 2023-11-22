import DepthMenu from '../../Common/DepthMenu';
import EbookTab from './Json/EbookTab.json'
import { useState } from 'react';
import './Ebook.css'

const EbookList = () => {
    const [ TabMenu, setTabMenu ] = useState("전체")

    console.log(TabMenu)
    return ( 
        <section className="EbookSection">
            <DepthMenu setTabMenu={setTabMenu} Data={EbookTab} FilterName={'필터'}/>
        
        </section>
     );
}
 
export default EbookList;