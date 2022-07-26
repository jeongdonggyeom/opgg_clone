import Nav from "./Nav";
import Main from './Main';
import Community from "./Community";
import Footer from "./Footer";
import { useState } from 'react';

function Page()
{
    const [theme, setTheme] = useState({
        state: localStorage.getItem('mode') === '0' ? false : true,
        img: localStorage.getItem('mode') === '0' ? 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1658292954524' : 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-gray.svg?v=1658394404870',
        navimg: localStorage.getItem('mode') === '0' ? 'https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524' : 'https://s-lol-web.op.gg/images/icon/icon-darkmode.svg?image=q_auto,f_webp,w_48&v=1658394404870',
        footerimg: localStorage.getItem('mode') === '0' ? 'https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1658292954340' : 'https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1658394404870',
    })

    if(localStorage.getItem('mode') === '1') document.querySelector('html').classList.add('dark')

    const changeMode = () => {
        console.log(theme)
        document.querySelector('html').classList.toggle('dark');
        if(theme.state === true || localStorage.getItem('mode') === '1'){
            localStorage.setItem('mode', '0')
            setTheme(()=>({
                state: false,
                img: 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1658292954524',
                navimg: 'https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524',
                footerimg: 'https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1658292954340',
            }))
        }
        else{
            localStorage.setItem('mode', '1');
            setTheme(()=>({
                state: true,
                img: 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-gray.svg?v=1658394404870',
                navimg: 'https://s-lol-web.op.gg/images/icon/icon-darkmode.svg?image=q_auto,f_webp,w_48&v=1658394404870',
                footerimg: 'https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1658394404870',
            }))
        }
    }

    return(
        <div className="root-div">
            <Nav func={changeMode} img={theme.navimg} />
            <Main/>
            <Community />
            <Footer img={theme.img} footer={theme.footerimg} />
        </div>
    )
}
export default Page;