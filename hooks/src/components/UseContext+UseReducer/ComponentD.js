import React,{useContext} from 'react';
import {countContext} from '../../App';

const ComponentD = (props) => {
    const context = useContext(countContext);
    return (
        <div>
            ComponentD - {context.stateValue} &#160;
            <button onClick={()=>context.stateMethod('INCREMENT')}>Increment</button>
            <button onClick={()=>context.stateMethod('DECREMENT')}>Decrement</button>
            <button onClick={()=>context.stateMethod('RESET')}>Reset</button>
        </div>
    );
};

export default ComponentD;
