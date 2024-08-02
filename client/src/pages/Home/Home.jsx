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
          <img src='/image.png' style={{position: "absolute", left: "35%", top: "8%", borderRadius: "100px"}} width={500}></img>
        <div className='wave-container'></div>
            <h1 className='home-text '>home</h1>
            <h2 className='welcome-text'> Welcome to Finance Foward</h2>
            <div className='info-container'>
              <h1 style={{paddingLeft: "20px", paddingTop: "10px", color: "#5D4E6D"}} >&lt;Info&gt;</h1>
              <p style={{paddingLeft: "40px", color: "#5D4E6D", fontSize: "20px"}} >Finance Foward provides a place for local finance management for FGLI students. Finance Foward is very easy to use with a built in budget tracker. Finance Forward also contains a library of scholarships, and articles to help you understand financial aid and finance in our foward hub. For every step you take towards your future, you get an achievement to show it off!</p>
            </div>
            <div className='contact-container'>
              <h1>Contact Us</h1>
              <h2 style={{fontSize: 30}}>Website Made by Ryan
                  <br></br>
                  Design Made by Fiona
                  <br></br>
                  Research and ideas by Anji and Seth
              </h2>
            </div>
            
        </div>
    </>
  )
}
