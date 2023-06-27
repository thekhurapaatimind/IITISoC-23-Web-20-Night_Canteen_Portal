import React from 'react'
import login from './Login.jsx'
import { NavLink } from 'react-router-dom'
import Header from '../Header.js'

const Login = () => {
  return (<>
    <Header />
    <p>

    <div className='login'>
       
        <h1>Login</h1>
        <input type = 'text' placeholder='Enter your userId/email/mobileNo'></input>
        <input type='password' placeholder='Enter your password'></input>
        <div className='button'> Login</div>
        <div>or</div>
        <div className='button'> Register</div>
    </div>
    </p>
    </>
  )
}

export default Login