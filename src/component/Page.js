import Nav from "./Nav";
import Main from './Main';
import Community from "./Community";
import Footer from "./Footer";
import { createContext } from "react";
import user from './userData';
import { useNavigate } from 'react-router-dom';
import darkmode from "./context";

function Page()
{
    const changeMode = () => {
        darkmode.state === true ? localStorage.setItem('mode', '0') : localStorage.setItem('mode', '1');
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