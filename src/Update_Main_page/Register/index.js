import React from 'react'
import register from './Register.jsx'
import { NavLink } from 'react-router-dom'
import Header from '../Header.js'
import Login from '../Login/index.js'
const Register = () => {
  return (<>
    <Header />
    <p>

    <div className='register'>
       
        <h1>Register</h1>
        <input type = 'text' placeholder='Enter your Name'></input>
        <input type = 'text' placeholder='Enter your email'></input>
        <input type = 'number' placeholder='Enter your mobile number'></input>
        <input type='password' placeholder='Enter new password'></input>
        <input type='password' placeholder='Re-Enter your password'></input>
        <div className='button'> <NavLink to='./Login'> Login</NavLink></div>
        <div>or</div>
        <div className='button'>  <NavLink to='./Register'> Register</NavLink></div>
    </div>
    </p>
    </>
  )
}

export default Register