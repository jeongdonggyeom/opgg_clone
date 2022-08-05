import { useEffect, useState } from "react";

export default function BirthInput(props)
{
    let set = [];
    const [disable, setDisable] = useState(false);
    const [text, setText] = useState('생년월일 정보는 가입 연령 확인에만 이용됩니다.');
    const date = new Date();
    const month = date.getMonth()+1;
    const day = date.getDay() > 9 ? date.getDay() : "0" + date.getDay();
    const today = `생년월일ex(-${date.getFullYear()}/${month > 9 ? month : "0" + month}/${day})`
    console.log(today);

    const input = () => {
        props.func(1);
    }

    const inputClick = (e) => {
        e.target.value = set;
    }

    useEffect(()=>{
        if(props.input.length === 10){
            const word = props.input.split('-');
            if(!(Number(word[1]) > Number(date.getMonth())+1) && !(Number(word[2]) > Number(date.getDay))){
                setDisable(false);
                setText('생년월일 정보는 가입 연령 확인에만 이용됩니다.');
            }
        }
        else{
            setDisable(true);
            setText('생년월일 형식에 맞추어 입력해 주세요(년/월/일).');
        }
    },[props.input])

    return(
        <div className="birth-root">
            <p className="birth-p">생년월일 입력</p>
            <label>{today}</label>
            <input type="tel" className="birth-input" onChange={(e)=>{props.setInput(e.target.value)}} value={''} onClick={(e)=>{inputClick(e)}} />
            <span className="birth-span">{text}</span>
            <button className="birth-button" onClick={input} disabled={disable}>다음</button>
            <span className="birth-span2">이미 회원이신가요?</span>
            <a href="/" className="birth-a">로그인으로 돌아가기</a>
        </div>
    )
}