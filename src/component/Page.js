import Nav from "./Nav";
import Main from './Main';
import Community from "./Community";
import Footer from "./Footer";
import { useState } from "react";
import user from './userData';
import { useNavigate } from 'react-router-dom';

function Page()
{ 
    const [darkmode, setDarkmode] = useState({
        state: false,
        img: 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1658292954524',
        navimg: 'https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524',
        footerimg: 'https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1658292954340'
    })

    const changeMode = () => {
        if(darkmode.state === true){
            setDarkmode(()=>({
                state: false,
                img: 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1658292954524',
                navimg: 'https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524',
                footerimg: 'https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1658292954340'
            }))
            localStorage.setItem('mode', '0')
        }
        if(darkmode.state === false){
            setDarkmode(()=>({
                state: true,
                img: 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-gray.svg?v=1658394404870',
                navimg: 'https://s-lol-web.op.gg/images/icon/icon-darkmode.svg?image=q_auto,f_webp,w_48&v=1658394404870',
                footerimg: 'https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1658394404870',
            }))
            localStorage.setItem('mode', '1')
        }
        document.querySelector('html').classList.toggle('dark');
    }

    const nav = useNavigate();

    const searchSummoner = (input) => {
        console.log(input);
        for(let i=0;i<user.length;i++){
            if(user[i].name === input){
                nav('/search', {state: user[user[i].index]});
                return ;
            }
        }
        alert('없는 소환사명입니다.');
    }

    return(
        <div className="root-div">
            <Nav func={changeMode} img={darkmode.navimg} />
            <Main func={searchSummoner} />
            <Community />
            <Footer img={darkmode.img} footer={darkmode.footerimg} />
        </div>
    )
}
export default Page;