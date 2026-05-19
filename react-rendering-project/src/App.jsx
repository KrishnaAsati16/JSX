import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';    // ← fixed typo (LogintBtn → LoginBtn)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)

  return (
    <div>
      {isLoggedIn 
        ? <LogoutBtn setLoggedIn={setLoggedIn} />   // ← prop pass kiya
        : <LoginBtn setLoggedIn={setLoggedIn} />    // ← prop pass kiya
      }
    </div>
  )
}

export default App// if(isLoggedIn){
//   return(
//     <LogoutBtn/>
//   )
// }
//  else{
//    return(
//     <LogintBtn />
//    )
//  } 

//  }
// export default App
