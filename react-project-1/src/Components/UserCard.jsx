// // import React from 'react'
// import photopic from '../assests/Photo.jpg'

// const UserCard = () => {
//   return (
//     <div className='user -container'>
//         <p id='user-name'> Krishna Asati</p>
//         <img id='user-img' src={photopic}alt="love"/>
//         <p id='user-desc'>Description of Krishna Asati</p>
//     </div>

//   )
// }

// export default UserCard

//  import React from 'react'
import photopic from '../assets/Photo.jpg'
import "./UserCard.css"
const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>Krishna Asati</p>
        <img id='user-img' src={photopic} alt="love"/>
        <p id='user-desc'>Description of Krishna Asati</p>
    </div>
  )
}

export default UserCard