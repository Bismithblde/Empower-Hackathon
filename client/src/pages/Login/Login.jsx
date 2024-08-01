import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import './Login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();


 


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(username, password);
    
      if (!isLoading) {
        navigate('/'); 
      }
    } catch (err) {
      setError(err.message || 'Signup failed');
      console.log('Signup failed:', err);
    }
  };

  return (
    <div className='login-page-container'>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <div style={{ width: "500px" }}>
            <TextField
              id="username"
              label="Enter Username"
              variant="filled"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              error={Boolean(error)}
              helperText={error ? error : ''}
            />
          </div>
          <div style={{ width: "500px" }}>
            <TextField
              id="password"
              label="Enter Password"
              variant="filled"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              required
              value={password}
              error={Boolean(error)}
              helperText={error ? error : ''}
            />
          </div>
          <Button variant="contained" type='submit' disabled={isLoading}>
            {isLoading ? 'Logging In...' : 'Login'}
          </Button>
          <Link to="/create-account" className='create-account-link'>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
