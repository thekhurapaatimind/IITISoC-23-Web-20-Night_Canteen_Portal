import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
import "./hm.css"
import Footer from '../footer/Footer'

function Hompage() {
    return (
        <>
        
< Header />
  <section id="home">
    <h1 >IIT-Indore Night Canteen</h1>
    <p id="p2">
     The portal caters various needs of the students placing orders and the
      caterers.
    </p>
    <p id="p1">
      "Midnight Munchies: IIT Indore's Night Canteen for Delicious Bites and
      Late-Night Cravings! Satisfy Your Hunger in the Late Hours of the Night."
    </p>
    <button className="button">
      <span > <NavLink style={{textDecoration: 'none',color: 'white'}} to='/Canteens'>ORDER NOW! </NavLink></span>
    </button>
  </section>
  <Footer/>
</>
    );
}

export default Hompage;