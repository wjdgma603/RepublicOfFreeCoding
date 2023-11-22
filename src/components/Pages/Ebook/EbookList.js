import DepthMenu from '../../Common/DepthMenu';
import EbookTab from './Json/EbookTab.json'
import EbookItem from './Json/EbookItem.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ebook.css'

const EbookList = () => {
    const [ TabMenu, setTabMenu ] = useState("전체")

    console.log(TabMenu)
    return ( 
        <section className="EbookSection">
            <DepthMenu setTabMenu={setTabMenu} Data={EbookTab} FilterName={'필터'}/>
            <article className='EbookList'>
                <div className='EbookTotalNum'>전체 <span className='Green'>{EbookItem.length}</span>개</div>
                {EbookItem.map((Ebook)=>
                    <div className='EbookItem' key={Ebook.id}>
                        <div className='ImgWrap'>
                            <img src={require(`./images/Book${Ebook.id}.jpg`)} alt={Ebook.BookName}/>
                        </div>
                        <div className='TopSection'>
                            <div className='EbookTitle'>{Ebook.OurCountry && "[국내도서] "}{Ebook.BookName}</div>
                            <div className='EbookSubTitle'>{Ebook.SubTitle}</div>
                        </div>
                        <div className='BottomSection'>
                            <div className='LeftSection'>
                                <div>
                                    {Ebook.Author}<span className='AuthorExplain'>저자(글)</span>
                                </div>
                                <div>
                                    {Ebook.Publisher}<span className='PublicationDate'>{Ebook.PublicationDate}</span>
                                </div>
                            </div>
                            <div className='RightSection'>
                                <Link to={`'/ebook/${Ebook.id}`} state={{Ebook : Ebook}}><div className='goEbookDetail'>내용 자세히 보기</div></Link>
                                <Link to=''><div className='goEbookViewer'>E-Book 읽기</div></Link>
                            </div>
                        </div>
                    </div>
                )}
            </article>
        </section>
     );
}   
 
export default EbookList;