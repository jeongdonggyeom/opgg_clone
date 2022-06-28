import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styleComponent/main.css'
import data from './userData';

function Main(){

    const navigate = useNavigate();
    const [input, setInput] = useState(null);

    const onKeyDown = (e) =>{
        if(e.key === 'Enter'){
            for(let i=0;i<data.length;i++){
                if(input === data[i].name){
                    navigate('/search', { state: data[i] });
                    break;
                }
            }   
        }
    }
    return(
        <div className={"main"}>
            <div className={"search"}>
                <img className="search--logo" src="https://opgg-static.akamaized.net/logo/20220607053053.e823d8574562487b9f640b1716c5323c.png?image=q_auto,f_webp,w_auto&v=1654691863724" alt={"icon"}/>
                <div className={"search--div"}>
                    <input 
                        type="text" 
                        placeholder="소환사명, 소환사명, ..." 
                        className="search--text" 
                        onChange={(e)=>{ setInput(e.target.value) }} 
                        onKeyDown={onKeyDown}
                    />
                    <button className="search--gg">.GG</button>
                    <button className="search--kr">KR</button>
                    <img src={"triangle2.png"} alt={"icon"} className={"search--triangle"}/>
                </div>
            </div>

        </div>
    )
}
export default Main;
