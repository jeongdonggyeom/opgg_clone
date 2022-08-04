import axios from "axios";
import { useState } from 'react';
import BirthInput from "./birthInput";

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
            {/* <input type="text" placeholder="userName" onChange={(e)=>{setUsername(e.target.value)}} value={username} />
            <input type="text" placeholder="userPass" onChange={(e)=>{setUserpass(e.target.value)}} value={userpass} />
            <input type="date" placeholder="userBirth" onChange={(e)=>{setUserbirth(e.target.value)}} value={userbirth} />
            <input type="email" placeholder="userEmail" onChange={(e)=>{setUserEmail(e.target.value)}} value={userEmail} />
            <button onClick={signup}>제출</button> */}
            <div className="signup-div">
                <img src="https://member.op.gg/img_opgglogo.1924961d.svg" alt="icon" className="signup-img"/>
                {sequence === 0 ? <BirthInput input={userbirth} setInput={setUserbirth} func={controlSequence} /> : <></>}
            </div>
        </div>
    )
}