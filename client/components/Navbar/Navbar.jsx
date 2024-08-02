import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import useAuthContext from '../../src/hooks/useAuthContext';
import { useAchievements } from '../../contexts/AchievementsContext';

export default function Navbar() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const { state, dispatch } = useAchievements();
  const { user } = useAuthContext();

  const [newAchievement, setNewAchievement] = useState(null);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showAchievementTab, setShowAchievementTab] = useState(false);

  useEffect(() => {
    if (!state.achievements || !Array.isArray(state.achievements)) {
      console.error('Invalid achievements state:', state.achievements);
      return;
    }

    const achievements = state.achievements;
    const latestAchievement = achievements[achievements.length - 1];

    if (achievements.length > 0 && latestAchievement && !latestAchievement.animationTriggered) {
      const updatedAchievements = achievements.map(achievement =>
        achievement === latestAchievement
          ? { ...achievement, animationTriggered: true }
          : achievement
      );

      setNewAchievement(latestAchievement);

      dispatch({
        type: 'UPDATE_ACHIEVEMENTS',
        payload: updatedAchievements
      });

      if (user && user.username) {
        const username = user.username;

        const updateAchievement = async () => {
          try {
            const response = await fetch(`${apiUrl}/api/update-achievement`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, achievements: updatedAchievements })
            });
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error('Error updating achievement:', error);
          }
        };
        updateAchievement();
      }

      setShowAchievement(true);
      setShowAchievementTab(true);

      const timer = setTimeout(() => {
        setShowAchievement(false);
      }, 2000);

      const tabTimer = setTimeout(() => {
        setShowAchievementTab(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearTimeout(tabTimer);
      };
    }
  }, [state.achievements, user, dispatch]);

  return (
    <div className='header'>
      <div className='navbar-container'>
        <a href="#" className="logo pixelify-sans-normal">Placeholder Logo</a>
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
              {showAchievement && newAchievement && (
                <div className={`achievement-popup ${showAchievement ? 'show-achievement' : ''}`}>
                  <img
                    src={newAchievement.image}
                    alt={newAchievement.name}
                  />
                </div>
              )}
              {showAchievementTab && newAchievement && (
                <div className={`achievement-tab inconsolata-normal ${showAchievement ? 'show-achievement-tab' : ''}`}>
                  <h1>New Achievement!!</h1>
                  <h1>{newAchievement.name}</h1>
                  <h2>{newAchievement.description}</h2>
                </div>
              )}
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
