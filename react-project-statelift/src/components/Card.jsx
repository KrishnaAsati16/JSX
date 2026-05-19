// import React from 'react'

const card = (props) => {
  return (
    <div>
        <input type="text"  onChange ={(e) => props.setName(e.target.value)}/>
        <p>Name state variable ki value inside card : {props.title}</p>
    </div>
  )
}

export default card