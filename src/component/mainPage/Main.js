import '../../styleComponent/mainStyle/main.css'

function Main(){
    return(
        <div className={"main-root"}>
            <img src="https://opgg-static.akamaized.net/logo/20220704125408.e18db513dd164977be062de32cde10a6.png?image=q_auto,f_webp,w_auto&v=1657873251164" alt="icon" className="main-image" />
            <div className="main-search">
                <div className="main-language">
                    <span className="main-language--p">Region</span>
                    <div className="main-language-modal"><span className="main-language-modal--span">Korea</span><img src="triangle2.png" alt='icon' className="main-language-modal--img"/></div>
                </div>
                <div className="main-search-input">
                    <p className="main-search-input--p">HOME Search</p>
                    <input type="text" placeholder='소환사명, 소환사명, ...' className="main-search-input--input"/>
                </div>
                <img src="https://s-lol-web.op.gg/images/icon/icon-gg.svg" alt="icon" className="main-language-icon" />
            </div>
            <div className="main-button-div">
                <a className="main-button" href="https://op.gg/desktop/?utm_source=opgg&utm_medium=button&utm_campaign=korean">
                    <img src="https://s-lol-web.op.gg/static/images/icon/logo/icon-window-white.svg?v=1658124806837" alt="icon" className="main-button-img"/>
                    <span className="main-button-text">데스크탑 무료 다운로드</span>
                </a>
            </div>
        </div>
    )
}
export default Main;
