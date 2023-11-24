import DepthMenu from '../../Common/DepthMenu';
import EbookTab from './Json/EbookTab.json'
import EbookItem from './Json/EbookItem.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ebook.css'

const EbookList = () => {
    const [ TabMenu, setTabMenu ] = useState("전체");
    const [ sortList, setSortList] = useState(EbookItem);
    const getSortList = ()=>{
        const sortcallBack = (item)=>{
            if(TabMenu === "Html"){
                return item.Category === "Html"
            }else if(TabMenu === "Css"){
                return item.Category === "Css"
            }else if(TabMenu === "Javascript"){
                return item.Category === "Javascript"
            }        
        }
        const SortList = TabMenu === '전체' ? sortList : sortList.filter((item)=>sortcallBack(item))
        return SortList;
    }
    return ( 
        <section className="EbookSection">
            <DepthMenu setTabMenu={setTabMenu} Data={EbookTab} FilterName={'필터'}/>
            <article className='EbookList'>
                <div className='EbookTotalNum'>전체 <span className='Green'>{getSortList().length}</span>개</div>
                {getSortList().map((Ebook)=>
                    <div className='EbookItem' key={Ebook.id}>
                        <div className='ImgWrap'>
                            <Link to={`/ebook/${Ebook.id}`} state={{Ebook : Ebook}}>
                                <img src={require(`./images/List/Book${Ebook.id}.jpg`)} alt={Ebook.BookName}/>
                            </Link>
                        </div>
                        <div className='ItemExplain'>
                            <div className='TopSection'>
                                <div className='EbookTitle'><Link to={`/ebook/${Ebook.id}`} state={{Ebook : Ebook}}>{Ebook.OurCountry && "[국내도서] "}{Ebook.BookName}</Link></div>
                                <div className='EbookSubTitle'>{Ebook.SubTitle}</div>
                            </div>
                            <div className='BottomSection'>
                                <div className='LeftSection'>
                                    <div>{Ebook.Author}<span>저자(글)</span></div>
                                    <div>{Ebook.Publisher}<span>{Ebook.PublicationDate}</span></div>
                                </div>
                                <div className='RightSection'>
                                    <Link to={`/ebook/${Ebook.id}`} state={{Ebook : Ebook}}>내용 자세히 보기</Link>
                                    <Link to={`/ebook/viewer/${Ebook.id}`} state={{Ebook : Ebook}}>E-Book 읽기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </article>
        </section>
     );
}   
 
export default EbookList;