import '../styleComponent/main.css'

function Main() {
    return (
        <div className={"main"}>
            <div className={"search"}>
                <img className="search--logo" src="https://opgg-static.akamaized.net/logo/20220607053053.e823d8574562487b9f640b1716c5323c.png?image=q_auto,f_webp,w_auto&v=1654691863724" alt={"icon"} />
                <div className={"search--div"}>
                    <input type="text" placeholder="소환사명, 소환사명, ..." className="search--text"></input>
                    <button className="search--gg">.GG</button>
                    <button className="search--kr">KR</button>
                    <img src={"triangle.png"} alt={"icon"} className={"search--triangle"} />
                </div>
            </div>

        </div>
    )
}
export default Main;