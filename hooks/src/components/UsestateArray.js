import React,{useState} from 'react'
import PropTypes from 'prop-types'

const UsestateArray = (props) => {
  const [name,setItem] = useState([])

  const additem = () => {
    setItem([...name,{
      id : name.length,
      value : Math.floor(Math.random() * 10) + 1
    }])
  }
  return (
    <div>
      <button onClick={additem}>Add</button>
      <ul>
         {name.map(item =>(<li key={item.id}>{item.value}</li>))}
      </ul>
    </div>
  )
}

export default UsestateArray
