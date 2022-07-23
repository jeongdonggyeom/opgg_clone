import Nav from "./Nav";
import Main from './Main';
import Community from "./Community";
import Footer from "./Footer";
import { useState } from "react";

function Page()
{ 
    const [darkmode, setDarkmode] = useState(false);
    const [img, setImg] = useState('https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1658292954524');
    const [navimg, setNavimg] = useState('https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524');
    const [footerimg, setFooterimg] = useState('https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1658292954340');
    
    const changeMode = () => {
        setDarkmode(!darkmode);
        if(darkmode === true){
            console.log(darkmode)
            setImg('https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1658292954524');
            setNavimg('https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524');
            setFooterimg('https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1658292954340');
        }
        if(darkmode === false){
            console.log(darkmode)
            setImg('https://s-lol-web.op.gg/images/icon/icon-opgglogo-gray.svg?v=1658394404870');
            setNavimg('https://s-lol-web.op.gg/images/icon/icon-darkmode.svg?image=q_auto,f_webp,w_48&v=1658394404870');
            setFooterimg('https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1658394404870');
        }
        document.querySelector('html').classList.toggle('dark');
    }

    return(
        <div className="root-div">
            <Nav func={changeMode} img={navimg} />
            <Main/>
            <Community />
            <Footer img={img} footer={footerimg} />
        </div>
    )
}
export default Page;