import React,{useState,useEffect}from 'react'
import PropTypes from 'prop-types'

const UsereffectRENDER = (props) => {
  const [count,setCount] = useState(0);
  const [name,setName] = useState('')

   useEffect(()=>{
       console.log('clicked')
     document.title= `you clicked ${count} times`
   },[count])

  return (
    <div>
       <input type="text" value={name} onChange = {e=>{ setName(
           e.target.value
       )}}/>
      <button onClick={()=>setCount(count+1)}>Click {count}</button>
    </div>
)}

export default UsereffectRENDER;
