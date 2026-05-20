import { useState } from 'react'
import { useEffect } from 'react'

function ResizeComponents(){
    const[windowwidth,setWindowWidth] = useState(window.innerWidth)

     useEffect(() => {
     const handleResize = () => setWindowWidth(window.innerWidth)

     window.addEventListener('resize',handleResize)

     return () =>{
        window.addEventListener('resize',handleResize)
     }
    },[])

    return(
        <div>
            <h1>window width: {windowwidth}</h1>
        </div>
    )
}

export default ResizeComponents 