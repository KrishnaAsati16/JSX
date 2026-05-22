// import React from 'react'
// import Home  from './Home'
// import Dashboard  from './Dashboard'
// import About from './Home'
import './Navbar.css'
import {NavLink} from "react-router-dom"

const navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'classname = {({isActive})=> isActive ? "active-link":""}>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about'classname = {({isActive})=> isActive ? "active-link":""}>About</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'classname = {({isActive})=> isActive ? "active-link":""}>Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default navbar