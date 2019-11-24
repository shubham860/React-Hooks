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
function Counter(props) {
    const [count,dispatch] = useReducer(reducer,initialState);
    return (
        <div style={{border:'5px solid black',margin:'250px',padding:'100px'}}>
            Count-{count}
            <div style={{marginTop:'20px'}}>
                <button onClick={()=>dispatch('INCREMENT')}>Increment</button>
                <button onClick={()=>dispatch('DECREMENT')}>Decrement</button>
                <button onClick={()=>dispatch('RESET')}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;