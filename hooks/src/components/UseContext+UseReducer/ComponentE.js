import React,{useContext} from 'react';
import {countContext} from '../../App';

const ComponentE = (props) => {
    const context = useContext(countContext);
    return (
        <div>
            ComponentE - {context.stateValue} &#160;
            <button onClick={()=>context.stateMethod('INCREMENT')}>Increment</button>
            <button onClick={()=>context.stateMethod('DECREMENT')}>Decrement</button>
            <button onClick={()=>context.stateMethod('RESET')}>Reset</button>
        </div>
    );
};

export default ComponentE;
