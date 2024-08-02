import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Button, Tooltip } from '@mui/material';
import useLogout from '../../hooks/useLogout';
import useAuthContext from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return; // Prevent further execution if user is not defined
    }

    const getAchievements = async () => {
      try {
        const username = user.username;
        const response = await fetch(`${apiUrl}/api/get-achievements`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username }),
        });
        const data = await response.json();
        setAchievements(data.response.achievement || []); // Ensure default to empty array if no achievements
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    };

    getAchievements();
  }, [user, apiUrl, navigate]); // Add dependencies for user, apiUrl, and navigate

  const handleClick = () => {
    logout();
  };

  console.log("Achievements: ", achievements);

  return (
    <div className='profile-page-container'>
      <div className='profile-container'>
        <h1 style={{ marginTop: "15px", fontSize: "50px" }} className='inconsolata-normal'>Profile:</h1>
        <div className='username-container'>
          <h2 style={{ fontSize: "30px" }} className='inconsolata-normal'>Username: {user?.username}</h2>
        </div>

        <Button color='error' variant='contained' onClick={handleClick}>
          Log out
        </Button>
      </div>
      <div className='achievement-container'>
        <h1 className='inconsolata-normal'>Achievements</h1>
        {achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <Tooltip title={<div><h3>{achievement.name}</h3><p>{achievement.description}</p></div>}>
                <img 
                  src={achievement.image} 
                  alt={achievement.name} 
                  width={100} 
                  height={100} 
                  className="achievement-image"
                />
              </Tooltip>
            </div>
          ))
        ) : (
          <p>No achievements found.</p>
        )}
      </div>
    </div>
  );
}
