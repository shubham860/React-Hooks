import React,{useState,useMemo} from 'react';

function UseMemoHook(props) {
    const [Counter1,setCounter1] = useState(0);
    const [Counter2,setCounter2] = useState(0);

    const incr1 = () => {
        setCounter1(Counter1+1)
    };

    const incr2 = () => {
        setCounter2(Counter2+1)
    };

    const isEven = useMemo(() => {
        return Counter1 % 2 === 0;
    },[Counter1]);


    return (
        <div>
            <div>
                <button onClick={incr1}>BTN1-{Counter1}</button>
                <span>{isEven ? "even" : "odd"}</span>
            </div>
            <div><button onClick={incr2}>BTN2-{Counter2}</button></div>
        </div>
    );
}

export default UseMemoHook;