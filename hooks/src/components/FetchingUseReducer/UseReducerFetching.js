import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading : false,
    post : {},
    error : ''
}
const reducer = (state,action) => {
    switch(action.type){
        case 'SUCCESS' :
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'ERROR' :
            return {
                loading : false,
                post : {},
                error : 'Something went wrong'
            }
        default : return state
    }
}
const UseReducerFetching = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/9')
            .then(res=>{
                dispatch({type:'SUCCESS',payload : res.data})
            })
            .catch(error=>{
                dispatch({type:'ERROR'})
            })
    },[]);

    return (
        <div>
            {
                state.loading ? 'Loading.....' : state.post.title
            }
            {
                state.error ?  state.error : null
            }
        </div>
    );
};

export default UseReducerFetching;
