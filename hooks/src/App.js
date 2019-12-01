import React,{useReducer} from 'react';
import './App.css';
// import Counter from './components/useState/Counter'
import PrevCounter from './components/useState/PrevCounter'
import UsestateObject from './components/useState/UsestateObject'
import UsestateArray from './components/useState/UsestateArray'
import UseeffectRender from './components/useEffect/UseeffectRender';
import Useeffect_once from './components/useEffect/Useeffect_once';
import UseeffectCleanup from './components/useEffect/UseeffectCleanup';
import FetchingData2 from './components/useEffect/FetchingData2'
// import ComponentC from "./components/Context_api/ComponentC";
import {UserProvider,ChannelProvider} from "./components/Context_api/ContextApi";
import Counter from './components/useReducer/Counter'
import Counter2 from './components/useReducer/Counter2'
import Counter3 from './components/useReducer/Counter3'
import ComponentA from "./components/UseContext+UseReducer/ComponentA";
import ComponentB from "./components/UseContext+UseReducer/ComponentB";
import ComponentC from './components/UseContext+UseReducer/ComponentC';
import UseStateFetching from './components/FetchingUseReducer/UseStateFetching';
import UseReducerFetching from './components/FetchingUseReducer/UseReducerFetching';
import ParentCallback from "./components/Callbackhook/ParentCallback";
import UseMemoHook from "./components/useMemoHook/UseMemoHook";
import NormalRef from "./components/UseRefHook/NormalRef";
import ClassInterval from "./components/UseRefHook/ClassInterval";
import FunctionalRefInterval from "./components/UseRefHook/FunctionalRefInterval";

export const countContext = React.createContext();

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'INCREMENT' :
            return state+1;
        case 'DECREMENT' :
            return state -1;
        case 'RESET' :
            return initialState;
        default :
            return state;
    }
}



function App() {
    const [count,dispatch] = useReducer(reducer,initialState);
  return (
   <countContext.Provider value={{stateValue : count , stateMethod : dispatch }}>
    <div className="App">
      {/*<Counter/>*/}
        {/*<Counter/>*/}
      {/*<UsestateObject/>*/}
      {/*<UsestateArray/>*/}
      {/*{<UseeffectRender/>}*/}
      {/*{<Useeffect_once/>}*/}
      {/*<UseeffectCleanup/>*/}
      {/*<FetchingData2/>*/}
      {/*<UserProvider value={'shubham'}>*/}
      {/*    <ChannelProvider value={"code"}>*/}
      {/*        <ComponentC/>*/}
      {/*    </ChannelProvider>*/}
      {/*</UserProvider>*/}
      {/*<Counter/>*/}
      {/*<Counter2/>*/}
      {/*<Counter3/>*/}
      {/*<ComponentA/>*/}
      {/*<ComponentB/>*/}
      {/*<ComponentC/>*/}
      {/*<UseStateFetching/>*/}
      {/*<UseReducerFetching/>*/}
      {/*<ParentCallback/>*/}
      {/*<UseMemoHook/>*/}
      {/*<NormalRef/>*/}
      <ClassInterval/>
      <FunctionalRefInterval/>
    </div>
   </countContext.Provider>
  );
}

export default App;
