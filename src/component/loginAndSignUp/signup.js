import axios from "axios";
import { useState } from 'react';
import BirthInput from "./birthInput";
import '../../styleComponent/loginAndSignupStyle/signup.css';

export default function Signup()
{
    const [username, setUsername] = useState('');
    const [userpass, setUserpass] = useState('');
    const [userbirth, setUserbirth] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [sequence, setSequence] = useState(0);
    
 
    const signup = () => {
        const form = new FormData()
        form.append('userName', username);
        form.append('userPass', userpass);
        form.append('userBirth', userbirth);
        form.append('userEmail', userEmail);

        axios.post("/user/create", form).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error);
        })
    }

    const controlSequence = (num) =>{
        console.log(num);
        setSequence(num);
    }

    return(
        <div className="signup-root">
            <div className="signup-div">
                <img src="https://member.op.gg/img_opgglogo.1924961d.svg" alt="icon" className="signup-img"/>
                <div className="signup-circle-div">
                    <div className="signup-circle"></div>
                    <div className="signup-circle"></div>
                    <div className="signup-circle"></div>
                    <div className="signup-circle"></div>
                    <div className="signup-circle"></div>
                </div>
                {sequence === 0 ? <BirthInput input={userbirth} setInput={setUserbirth} func={controlSequence} /> : <></>}
            </div>
        </div>
    )
}