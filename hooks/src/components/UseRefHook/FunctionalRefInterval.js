import React,{useEffect,useState,useRef} from 'react';

function FunctionalRefInterval(props) {

    const timerRefs = useRef()
    const [timer,setTimer] = useState(0);

    useEffect(()=>{
        timerRefs.current = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000);

        return() => {
            clearInterval(timerRefs.current)
        }
    },[]);
    return (
        <div>
            <br/>Timer :- {timer}<br/><br/>
            <button onClick={()=> clearInterval(timerRefs.current)}>Clear</button>
        </div>
    );
}

export default FunctionalRefInterval;