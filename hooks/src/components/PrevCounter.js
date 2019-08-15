import React,{useState} from 'react'
import PropTypes from 'prop-types'

const PrevCounter = (props) => {
  const initial = 0
  const [count,setCount] = useState(initial)

  const increment = () =>{
    for(let i=0; i< 5; i++) {
      setCount(prevCount=>prevCount+1)
    }
  }
  return (
     <div>
     count : {count}
      <button onClick={()=>setCount(initial)}>Reset</button>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
          </div>
  )
}

export default PrevCounter
