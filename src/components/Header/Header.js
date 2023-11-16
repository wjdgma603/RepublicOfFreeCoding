import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return ( 
        <header className="HeaderComponent">
            <section className="HeaderWrap">
                <article className="HeaderLogoWrap">
                    <Link to="/"><img src={require("./images/LogoEng.png")} alt="HeaderLogo"/></Link>
                </article>
                <nav className="HeaderNavigation">
                    <ul>
                        <li><Link to="/introduce">소개</Link></li>
                        <li><Link to="/ebook">전자북</Link></li>
                        <li><Link to="/test">문제집</Link></li>
                        <li><Link to="/community">커뮤니티</Link></li>
                    </ul>
                </nav>
                <article className="HeaderPersonalMenu">
                    {/* <div className="ProfileNickname">닉네임</div>
                    <div className="ProfileImage">프로필사진</div> */}
                    <div className="ToLogIn"><Link to='/login'>로그인</Link></div>
                    <div className="ToSignIn"><Link to=''>회원가입</Link></div>
                </article>
            </section>
        </header>
     );
}
 
export default Header;