import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    const navigate = useNavigate();
  return (
    <>
    <Header />
     <div className='container' >
        <button className='btn' onClick={()=> navigate(-1)}>Go Back</button>
        <div className='title'>
            <h1> Order your favourite food</h1>
        </div>
        <button className='btn' onClick={()=> navigate('order-summary')}>
            Place your order
        </button>
    </div>
    </>
  )
}

export default Menu