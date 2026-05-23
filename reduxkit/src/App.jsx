// import { useSelector } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment,decrement,reset } from './Features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementClick(){
     dispatch(increment())
  }
   function handleDecrementClick(){
       dispatch(decrement())
   }
    function handleResetClick(){
       dispatch(reset())
   }


  return (
   <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count:{count}</p>
    <button onClick={handleDecrementClick}>-</button>
   <button onClick={handleResetClick}>RESET</button>
   </div>
  )
}

export default App
