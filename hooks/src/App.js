import React from 'react';
import './App.css';
import Counter from './components/Counter'
import PrevCounter from './components/PrevCounter'
import UsestateObject from './components/UsestateObject'
import UsestateArray from './components/UsestateArray'

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      {/*<PrevCounter/>*/}
      {/*<UsestateObject/>*/}
      {<UsestateArray/>}
    </div>
  );
}

export default App;
