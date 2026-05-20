import {useState, useEffect} from 'react';

function TimerComponents(){
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
      const intervalidId = setInterval(()=>{
        setSeconds(prevSecond => prevSecond+1)
      },1000)
    
      return () => {
        clearInterval(intervalidId)
      }
    }, [])

    return(
        <div>
            <h1>seconds :{seconds}</h1>
        </div>
    )
}

export default TimerComponents