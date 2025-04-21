import React from 'react'
import './Counter.css'
const Counter = ({count,setCount}) => {
  return (
    <div>
        <button onClick={()=>setCount(count+1)}
        >+</button>
        <button className='reset' onClick={()=>setCount(0)}
        >reset</button>
        <button onClick={()=>setCount(count-1)}
        >-</button>
        
    </div>
  )
}

export default Counter