import { useState } from 'react'
import './App.css'
import Button from './components/button'
// import Card from './components/Card'


function App() {
  const [count,setCount] = useState(0);
      
  function handleClick(){
    setCount(count+1)

  }
  return (
     <div>
      <Button handleClick= {handleClick} text ="click me">
        <h1>{count}</h1>
      </Button>
     </div>




  //  <div>
  //    <Card name="Krishna Asati">
  // <h1>Best  React</h1>
  // <p>Ehhhhhhhhhhh</p>
  // <p>fahhhhhhhhhh</p>
  //     </Card>

  //  </div>
  )
}

export default App
