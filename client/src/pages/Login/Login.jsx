import React from 'react'
import "./Login.css"
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Link }from 'react-router-dom'
export default function Login() {
  return (
    <div className='login-page-container'>
        <div className='login-container'>
            <form className='login-form'>
                <div style={{width: "500px"}}>
                    <TextField id="filled-basic" label="Enter Username" variant="filled" fullWidth/>
                    

                </div>
                <div style={{width: "500px"}}>
                    <TextField id="filled-basic" label="Enter Password" variant="filled" fullWidth/>
                    

                </div>
                <Button variant="contained">Login</Button>
                <Link to="/create-account" className='create-account-link'>Create Account</Link>
                </form>
                
        </div>
    </div>
  )
}
