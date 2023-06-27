import React from 'react'
 import {login , input , button, h1, Wrapper} from './Login.jsx'
import { NavLink } from 'react-router-dom'
import Header from '../Header.js'
import Register from '../Register'
const Login = () => {
  return (<>
    <Header />
    <Wrapper>
    <p>
      

    <div className='login'>
       
        <h1>Login</h1>
        <input type = 'text' placeholder='Enter your userId/email/mobileNo'></input>
        <input type='password' placeholder='Enter your password'></input>
        <div className='button'> <NavLink to='./Login'> Login</NavLink></div>
        <div>or</div>
        <div className='button'>  <NavLink to='./Register'> Register</NavLink></div>
    </div>
    </p>
    </Wrapper>
    </>
  )
}

export default Login