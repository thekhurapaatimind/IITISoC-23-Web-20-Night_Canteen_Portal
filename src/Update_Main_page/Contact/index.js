import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
const Contact = () => {
  return (<>
  <Header />
   <div className='contact_info'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-10 offset-lg-1'>
          phone number
          <div className='contact_info_item'></div>
          <img src='' alt='phone'/>
          <div className='contact_info_content'>
            <div className='contact_info_title'>
            Phone </div>
            <div className='contact_info_text'>
              Phone
            </div>
          </div>
        </div>
      </div>
      </div> </div>
    </>
  )
}

export default Contact