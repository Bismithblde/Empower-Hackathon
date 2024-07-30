import React from 'react'
import './Home.css'
import Navbar from '../../../components/Navbar/Navbar.jsx'
export default function Home() {
  return (
    <>  
        <div className='home-container'>
            <h1 className='home-text work-sans-bold'>home</h1>
            <h2 className='welcome-text work-sans-bold'> Welcome to Financial Foward Hub</h2>
            <div className='info-container signika-negative-bold'>
              <h1 style={{paddingLeft: "20px", paddingTop: "10px", color: "#5D4E6D"}} className='work-sans-bold'>&lt;Info&gt;</h1>
              <p style={{paddingLeft: "40px", paddingTop: "10px", color: "#5D4E6D"}} className='work-sans-bold'>Sample Description</p>
            </div>
        </div>
    </>
  )
}
