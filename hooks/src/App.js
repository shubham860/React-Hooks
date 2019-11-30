import React from 'react';
import './App.css';
// import Counter from './components/useState/Counter'
import PrevCounter from './components/useState/PrevCounter'
import UsestateObject from './components/useState/UsestateObject'
import UsestateArray from './components/useState/UsestateArray'
import UseeffectRender from './components/useEffect/UseeffectRender';
import Useeffect_once from './components/useEffect/Useeffect_once';
import UseeffectCleanup from './components/useEffect/UseeffectCleanup';
import FetchingData2 from './components/useEffect/FetchingData2'
import ComponentC from "./components/Context_api/ComponentC";
import {UserProvider,ChannelProvider} from "./components/Context_api/ContextApi";
import Counter from './components/useReducer/Counter'
import Counter2 from './components/useReducer/Counter2'
import Counter3 from './components/useReducer/Counter3'

function App() {
  return (
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
      <Counter3/>
    </div>
  );
}

export default App;
