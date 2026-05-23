import { useState, useRef } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let val =useRef(0)
  let btnRef = useRef()

  function changeColor(){
       btnRef.current.style.backgroundColor ="red"
  }
 
  function handleIncrement(){
    val.current= val.current+1
    console.log("value of val:",val.current)
    setCount(count+1)
  }

  // it runs on every render
  useEffect(()=>{
    console.log("main ferse render hogya hu")
  })

  return (
  <div>
    <button ref={btnRef} 
    onClick={handleIncrement}>
      Increment
    </button>
    <br/>

   <br /> 
    <button onClick={changeColor}>
      change color of 1st button
    </button>
    <br />


    <div>
  Count:{count}
  </div>
  </div>
  )
}

export default App



// stop watch wala case remainig 
