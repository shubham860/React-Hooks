import React,{useReducer} from 'react';

const initialstate = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state,action) => {
    switch(action.type){
        case 'INCREMENT1' :
            return {...state,firstCounter : state.firstCounter + action.value};
        case 'DECREMENT1' :
            return {...state,firstCounter : state.firstCounter - action.value};
        case 'INCREMENT2' :
            return {...state,secondCounter : state.secondCounter + action.value};
        case 'DECREMENT2' :
            return {...state,secondCounter : state.secondCounter - action.value};
        case 'RESET' :
            return initialstate;
        default :
            return state;
    }
}

function Counter2(props) {
    const [count,dispatch] = useReducer(reducer,initialstate)
    return (
        <div style={{border:'5px solid black',margin:'250px',padding:'100px'}}>
            {count.firstCounter} === {count.secondCounter}
            <div style={{marginTop:'20px'}}>
                <button onClick={()=>dispatch({type:'INCREMENT1',value:1})}>Increment</button>
                <button onClick={()=>dispatch({type:'DECREMENT1',value:1})}>Decrement</button>
                <div>
                    <button onClick={()=>dispatch({type:'INCREMENT2',value:5})}>Increment 5</button>
                    <button onClick={()=>dispatch({type:'DECREMENT2',value:5})}>Decrement 5</button>
                </div>
                <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
            </div>
        </div>
    );
}

export default Counter2;