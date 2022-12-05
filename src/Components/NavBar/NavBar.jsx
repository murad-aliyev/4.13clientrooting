import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav">
        <h1>Logo</h1>
        <li className='list'><Link to="/">Home</Link></li>
        <li className='list'><Link to="/portfolio">Portfolio</Link></li>
        <li className='list'><Link to="/contact">Contact</Link></li>
    </div>
  )
}

export default NavBar