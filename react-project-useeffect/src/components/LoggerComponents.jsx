// import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function LoggerComponents(){
    const[count,setCount] = useState(0)

     useEffect(() => {
     console.log("components rendered or count changed",count)
    })
    
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponents