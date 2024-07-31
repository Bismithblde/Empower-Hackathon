import React from 'react'
import './Profile.css'
import { Button } from '@mui/material'
import useLogout from '../../hooks/useLogout'
import useAuthContext from '../../hooks/useAuthContext'

export default function profile() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout();
  }
  return (
    <div className='profile-page-container'>
      <div className='profile-container'>
        <h1 style={{marginTop: "15px", fontSize: "50px"}} className='averia-gruesa-libre-regular'>Profile:</h1>
        <div className='username-container'>
          <h2 style={{fontSize: "30px"}} className='averia-gruesa-libre-regular'>Username: {user.username}</h2>
        </div>
        <Button color='error' variant='contained' onClick={handleClick}>
          Log out
        </Button>
      
      </div>
    </div>
  )
}
