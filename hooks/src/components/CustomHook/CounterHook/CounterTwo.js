import React from 'react';
import useCounter from './useCounter'

function CounterTwo(props) {
    const [count,Increment,Decrement,Reset] = useCounter(0)
    return (
        <div>
            Count - {count}
            <div>
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </div>
    );
}

export default CounterTwo;