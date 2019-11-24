import React,{ useState } from 'react'
import PropTypes from 'prop-types'

const Counter = (props) => {
        const initialCount = 0
       const [count,setCount] = useState(initialCount)
  return (
    <div>
       <button onClick={()=>setCount(prevCount => prevCount+1)}>Counter {count}</button>
    </div>
  )
}

export default Counter
