import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import useAuthContext from '../../src/hooks/useAuthContext'

export default function Navbar() {
  const { user } = useAuthContext()
  return (
    <div className='header'>
      <div className='navbar-container pixelify-sans-normal'>
        <a href="" className="logo">Placeholder Logo</a>
        <nav className='navbar'>
            <Link to={"/"} className='nav-link'>Home</Link>
            <Link to={"/budget"} className='nav-link'>Budget Tracker</Link>

            {!user ? (
              <Link to={"/login"} className='nav-link'>Login</Link>
            ): (
              <Link to={"/profile"} className='nav-link'>
        
              <Avatar src="/broken-image.jpg" />

            </Link>
            )}
        </nav>
        
    </div>
    </div>

  )
}
