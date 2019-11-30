import React ,{useReducer} from 'react';
const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'INCREMENT' :
            return state+1;
        case 'DECREMENT' :
            return state-1;
        case 'RESET' :
            return initialState;
        default :
            return  state;
    }
}
function Counter3(props) {
    const [count1,dispatch1] = useReducer(reducer,initialState);
    const [count2,dispatch2] = useReducer(reducer,initialState);
    return (
        <div style={{border:'1px solid black',margin:'250px',padding:'100px'}}>
            Count1-{count1} -------Count2-{count2}
            <div style={{marginTop:'20px'}}>
                <button onClick={()=>dispatch1('INCREMENT')}>Increment</button>
                <button onClick={()=>dispatch1('DECREMENT')}>Decrement</button>
                <button onClick={()=>dispatch1('RESET')}>Reset</button>
            </div>

            <div style={{marginTop:'20px'}}>
                <button onClick={()=>dispatch2('INCREMENT')}>Increment</button>
                <button onClick={()=>dispatch2('DECREMENT')}>Decrement</button>
                <button onClick={()=>dispatch2('RESET')}>Reset</button>
            </div>
        </div>
    );
}

export default Counter3;