import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import useAuthContext from '../../src/hooks/useAuthContext';
import { useAchievements } from '../../contexts/AchievementsContext';
import { useAnimationContext } from '../../contexts/AnimationContext';

export default function Navbar() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const { state, dispatch } = useAchievements();
  const { user } = useAuthContext();

  const [newAchievement, setNewAchievement] = useState(null);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showAchievementTab, setShowAchievementTab] = useState(false);
  const { animationAchievement } = useAnimationContext();


  return (
    <div className='header'>
      <div className='navbar-container'>
        <img src="/logo.png" className="logo pixelify-sans-normal" width={100} style={{borderRadius: 20, marginRight: "10px"}}/>
        <nav className='navbar'>
          {!user ? (
            <Link to="/login" className='nav-link pixelify-sans-normal'>Login</Link>
          ) : (
            <>
              <Link to="/" className='nav-link pixelify-sans-normal'>Home</Link>
              <Link to="/budget" className='nav-link pixelify-sans-normal'>Budget Tracker</Link>
              <Link to="/blog-hub" className='nav-link pixelify-sans-normal'>Foward Hub</Link>
              <Link to="/profile" className='nav-link pixelify-sans-normal'>
                <Avatar src="/broken-image.jpg" />
              </Link>
              {animationAchievement && (
                <div className={"achievement-popup"}>
                  <img
                    src={animationAchievement.image}
                    alt={animationAchievement.name}
                  />
                </div>
              )}
              {animationAchievement && (
                <div className={"achievement-tab inconsolata-normal"}>
                  <h1>New Achievement!!</h1>
                  <h1>{animationAchievement.name}</h1>
                  <h2>{animationAchievement.description}</h2>
                </div>
              )}
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
