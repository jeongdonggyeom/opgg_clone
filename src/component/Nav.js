import "../styleComponent/nav.css";
import { useState } from 'react';
import Modal from "./Modal";

function Nav(){

    const [modal, setModal] = useState(false);

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark")
    }
    
    const mo = () => {
        setModal(modal ? false : true);
    }
    
    const changeMode = () =>{
        document.documentElement.classList.toggle("dark")
    }

    return(
        <div>
            <nav className={"div--nav"}>
                <a href={"/"}>
                    <img src={"https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1654157118862"} className={"nav--opggLogo"} alt={"icon"}/>
                </a>
                <div className={"nav--loldiv"}>
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1654157118862"} className={"nav--lolLogo"} alt={"icon"}/>
                    <span className={"nav--loldiv--text"}>리그오브레전드</span>
                </div>
                <a className={"nav--duodiv"} href="https://duo.op.gg/">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-duo-gray.svg?image=q_auto,f_webp,w_48&v=1654157118862"} className={"nav--duoicon_special"} alt={"icon"}/>
                    <span className={"nav--duodiv--text"}>
                        <p>N</p>
                    </span>
                    <span>Duo</span>
                </a>
                <a className={"nav--duodiv"} href="https://qwer.gg/ko">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/opgg%20favicon%20white_220107.svg?image=q_auto,f_webp,w_48&v=1654157118862"} className={"nav--duoicon"} alt={"icon"}/>
                    <span className={"nav--duodiv--text"}>
                        <p>N</p>
                    </span>
                    <span>QWER (이스포츠 전적)</span>
                </a>
                <a className={"nav--duodiv"} href="https://valorant.op.gg/">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48&v=1654157118862"} className={"nav--duoicon"} alt={"icon"}/>
                    <span className={"nav--duodiv--text"}>
                        <p>B</p>
                    </span>
                    <span>발로란트</span>
                </a>
                <a className={"nav--duodiv"} href="https://pubg.op.gg/">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg?image=q_auto,f_webp,w_48&v=1654157118862"} className={"nav--duoicon"} alt={"icon"}/>
                    <span>배틀그라운드</span>
                </a>
                <a className={"nav--duodiv"} href="https://overwatch.op.gg/">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg?image=q_auto,f_webp,w_64&v=1654157118674"} className={"nav--duoicon"} alt={"icon"}/>
                    <span>오버워치</span>
                </a>
                <a className={"nav--duodiv2"} href="https://er.op.gg/">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/img_navi_bs.svg?image=q_auto,f_webp,w_64&v=1654157118674"} className={"nav--duoicon"} alt={"icon"}/>
                    <span>이터널 리턴</span>
                </a>
                <a className={"nav--duodiv2"} href="https://talk.op.gg/">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-gray.svg?image=q_auto,f_webp,w_64&v=1654157118674"} className={"nav--duoicon"} alt={"icon"}/>
                    <span>톡피지지</span>
                </a>
                <a className={"nav--duodiv2"} href="https://op.gg/desktop/">
                    <img src={"https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_64&v=1654157118674"} className={"nav--duoicon"} alt={"icon"}/>
                    <span>데스크톱</span>
                </a>
                <button className="moreButton" onClick={mo}>
                    <img src="https://s-lol-web.op.gg/images/icon/icon-more.svg?v=1655280878465" className="moreButton--img" alt="icon" />
                </button>
                <div className={"nav--language"}>
                    <button onClick={changeMode} style={{ backgroundColor: '#28344E', display: "flex", border: "none"}}>
                        <img className="nav--language-mode" src="https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524" alt="icon"/>
                    </button>
                    <img src={"https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1654157118862"} className={"nav--language--img"} alt={"icon"}/>
                    <button className={"nav--language--button"} >
                        <span>한국어</span>
                        <img src={"triangle.png"} alt={"icon"} className={"nav--language--triangle"} />
                    </button>
                </div>
                <div className={"nav--login"}>
                    <button className={"nav--login--button"}>로그인</button>
                </div>
            </nav>
            <nav className={"div--nav2"}>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link"}>홈</a>
                </div>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link"}>챔피언 분석</a>
                </div>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link2"}>게임 모드</a>
                </div>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link"}>통계</a>
                </div>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link"}>랭킹</a>
                </div>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link"}>프로관전</a>
                </div>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link"}>멀티서치</a>
                </div>
                <div className={"div--nav2--under"}>
                    <a href={"/"} className={"div--nav2--link"}>커뮤니티</a>
                </div>
            </nav>
            {modal ? <Modal /> : <div></div>}
        </div>
    )
}
export default Nav;
