import React from 'react'
import i from '../asset/home-bg.png'
import j from '../asset/logo.png'
import k from '../asset/nav-bg.png'
import { NavLink } from 'react-router-dom'

function Hompage() {
    return (
<><meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IIT-Indore || Night Canteen Portal</title>
  <NavLink rel="stylesheet" href="./nc.css" />
  <NavLink rel="icon" href="https://shorturl.at/invCG" />
  <NavLink href="https://fonts.googleapis.com/css?family=Asap" rel="stylesheet" />
  <nav id="navbar">
    <div id="logo">
      <img src={j} title="Logo" alt="IIT-Indore logo" />
    </div>
    <ul>
      <li className="item">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className="item">
        <NavLink to='/Menu'>Menu</NavLink>
      </li>
      <li className="item">
        <NavLink to='/Orders'>Orders</NavLink>
      </li>
      <li className="item">
        <NavLink to='/Contact'>ContactUs</NavLink>
      </li>
      <li className="item">
       <NavLink to='/Login'>Login</NavLink>
      </li>
    
      
      </ul>

    
  </nav>
  <section id="home">
    <h1 className="h-primary">IIT-Indore Night Canteen</h1>
    <p id="p2">
      The portal caters various needs of the students placing orders and the
      caterers.
    </p>
    <p id="p1">
      "Midnight Munchies: IIT Indore's Night Canteen for Delicious Bites and
      Late-Night Cravings! Satisfy Your Hunger in the Late Hours of the Night."
    </p>
    <button className="button">
      <span> <NavLink to='/Canteens'>ORDER NOW! </NavLink></span>
    </button>
  </section>
</>
    );
}

export default Hompage;