import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import './CreateAccount.css';

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset the error state before attempting signup
    setError('');

    try {
      await signup(username, password);
      // Assuming signup throws an error if it fails
      if (!isLoading) {
        navigate('/'); // Navigate only if there are no errors
      }
    } catch (err) {
      // Handle signup error and set the error state
      setError(err.message || 'Signup failed');
      console.log('Signup failed:', err);
    }
  };

  return (
    <div className='createaccount-page-container'>
      <div className='createaccount-container'>
        <form className='createaccount-form' onSubmit={handleSubmit}>
          <div style={{ width: '500px' }}>
            <TextField
              id="username"
              label="Enter Username"
              variant="filled"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              error={Boolean(error)}
              helperText={error ? error : ""}
            />
          </div>
          <div style={{ width: '500px' }}>
            <TextField
              id="password"
              label="Enter Password"
              variant="filled"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              required
              value={password}
            />
          </div>
          <Button variant="contained" type='submit' disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
          <Link to="/login" className='login-link'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
