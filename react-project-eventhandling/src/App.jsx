// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
    // function handleClick(){
    //   alert("I Am Clicked")
    // }

    // function handleMouseOver(){
    //    alert ("para ke uper mouse le kr aaya ho")
    // }

    // function handleInputChange(e){
    //   console.log("Value till now :", e.target.value)
    // }
    // function handleSubmit(e){
    //  e.preventDefault();
    //  alert("form submit kr diya h ")
    // }
  return (

    <div>
          {/* ----------> immediate invogation ---->interview mw aata h  */}
         <button onClick={alert("button click hua h ")}>click me</button> 

      {/* <form onSubmit={handleSubmit}>
        <input type="text"onChange={handleInputChange} />
        <button type='submit'>submit</button>
      </form> */}
    </div>
   
      //  <div>
      //   <p onClick={handleMouseOver} style={{border:"2px solid black"}}>
      //     I am Krishna
      //   </p>
      //   <button onClick={handleClick}>
      //     Click ME
      //   </button>
      //  </div>
  )
}

export default App
