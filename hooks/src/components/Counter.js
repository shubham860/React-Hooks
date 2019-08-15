import React,{ useState } from 'react'
import PropTypes from 'prop-types'

const Counter = (props) => {
       const [count,setCount] = useState(0)
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>Counter {count}</button>
    </div>
  )
}

export default Counter
