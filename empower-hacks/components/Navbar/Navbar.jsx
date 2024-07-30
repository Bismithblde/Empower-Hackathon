import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <a href="" className="logo">Placeholder Logo</a>
        <nav className='navbar'>
            <Link to={"/"} className='nav-link'>Home</Link>
            <Link to={"/budget"} className='nav-link'>Budget Tracker</Link>
        </nav>
        
    </div>
  )
}
