import '../styleComponent/main.css'

function Main(){
    return(
        <div className={"main-root"}>
            <img src="https://opgg-static.akamaized.net/logo/20220704125408.e18db513dd164977be062de32cde10a6.png?image=q_auto,f_webp,w_auto&v=1657873251164" alt="icon" className="main-image" />
            <div className="main-search">
                <div className="main-language">
                    <p className="main-language--p">Region</p>
                    <div className="main-laguage-modal"><span className="main-laguage-modal--span">Korea</span><img src="triangle2.png" alt='icon' className="main-laguage-modal--img"/></div>
                </div>
                <div className="main-search-input">
                    <p className="main-search-input--p">Search</p>
                    <input type="text" placeholder='소환사명, 소환사명, ...' className="main-search-input--input" />
                </div>
                <img src="https://s-lol-web.op.gg/images/icon/icon-gg.svg" alt="icon" className="main-language-icon" />
            </div>
        </div>
    )
}
export default Main;
