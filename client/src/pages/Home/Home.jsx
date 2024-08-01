import React, { useEffect } from 'react'
import './Home.css'
import Navbar from '../../../components/Navbar/Navbar.jsx'
import useAuthContext from '../../hooks/useAuthContext.jsx'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const { user } = useAuthContext();
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [])
  return (
    <>  
        
        <div className='home-container'>
        <div className='wave-container'></div>
            <h1 className='home-text '>home</h1>
            <h2 className='welcome-text'> Welcome to Financial Foward Hub</h2>
            <div className='info-container'>
              <h1 style={{paddingLeft: "20px", paddingTop: "10px", color: "#5D4E6D"}} >&lt;Info&gt;</h1>
              <p style={{paddingLeft: "40px", color: "#5D4E6D", fontSize: "20px"}} >Sample Description</p>
            </div>
            <div className='contact-container'>
              <h1>Contact Us</h1>
              <h2>Sample Description</h2>
            </div>
            
        </div>
    </>
  )
}
