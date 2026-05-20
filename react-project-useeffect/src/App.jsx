// import { useState } from 'react'
// import { useEffect } from 'react'
import './App.css'
// import DataFetcher from './components/DataFetcher'
// import LoggerComponents from './components/LoggerComponents'
// import TimerComponents from './components/TimerComponents'

function App() {
  // const [count, setCount] = useState(0)
  // const [total,setTotal] = useState(1) 

     // first -> side-effect function (kya action perform karrna h vo yeh firdt dekh ta h )
     // second-> clean-up funcion(basically cleaaning task perform karna chahte h)
     // third -> comma seperated dependence list
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    

     // variation :1 (dep list nhi h )
     // runs on every render

        //  useEffect(() => {
        //   alert("i will run on each render")
        //  })
          

        // variation :2
        // that runs on only first reminder 
        // useEffect(() => {
        //   alert("i will only run on first render")
        // }, [])


        // // variation :3
        // useEffect(() => {
        //   alert("I will run every time when count is updated")
        // }, [])
        

        // variation :4
        // multiple dependencies
        // useEffect(() => {
        //   alert("i will run every time when count/total is updated")
        // }, [count,total])
         
        
        //  function handleClick(){
        //   setCount(count+1)
        //  }

        //  function handleClickTotal(){
        //   // setCount(count+1)
        //   setTotal(count+1)
        //  }


        // variation 5
        // iss baar lets and clean function
        // useEffect(() => {
        //    alert("count is updated")
        
        //   return () => {
        //     alert("count is unmounted form UI")
        //   }
        // }, [])
        
         
  return (
   <div>
    {/* <LoggerComponents/> */}


     {/* <DataFetcher/> */}

    {/* <TimerComponents/>  */}

    {/* <button onClick={handleClick}>
      update count
      </button>
      <br />
    count is : {count}
    <br />

    <button onClick={handleClickTotal}>
      update total
      </button>
      <br />
    Total is : {total}
    <br /> */}

   </div>
  )
}

export default App
