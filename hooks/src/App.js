import React from 'react';
import './App.css';
import Counter from './components/Counter'
import PrevCounter from './components/PrevCounter'
import UsestateObject from './components/UsestateObject'
import UsestateArray from './components/UsestateArray'
import UseeffectRender from './components/UseeffectRender';
import Useeffect_once from './components/Useeffect_once';
import UseeffectCleanup from './components/UseeffectCleanup'

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
        {/*<Counter/>*/}
      {/*<UsestateObject/>*/}
      {/*<UsestateArray/>*/}
      {/*{<UseeffectRender/>}*/}
      {/*{<Useeffect_once/>}*/}
      <UseeffectCleanup/>
    </div>
  );
}

export default App;
