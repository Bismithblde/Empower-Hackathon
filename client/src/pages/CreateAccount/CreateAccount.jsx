import React from 'react'
import "./CreateAccount.css"
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Link }from 'react-router-dom'

export default function CreateAccount() {
  return (
    <div className='createaccount-page-container'>
    <div className='createaccount-container'>
        <form className='createaccount-form'>
            <div style={{width: "500px"}}>
                <TextField id="filled-basic" label="Enter Username" variant="filled" fullWidth/>
                

            </div>
            <div style={{width: "500px"}}>
                <TextField id="filled-basic" label="Enter Password" variant="filled" fullWidth/>
                

            </div>
            <Button variant="contained">Create Account</Button>
            <Link to="/login" className='login-link'>Login</Link>
            </form>
            
    </div>
</div>
  )
}
