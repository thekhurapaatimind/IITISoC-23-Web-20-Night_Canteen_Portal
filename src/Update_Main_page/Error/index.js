import React from 'react'
import { NavLink } from 'react-router-dom'
import './err.css'
import errmsg from './er.png'
const index = () => {
  return (
    <div className='bg'> 

    <img src={errmsg} />
    <p>404! Some error occurred</p>

    </div>
  )
}

export default index