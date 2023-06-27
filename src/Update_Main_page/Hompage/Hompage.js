import React from 'react'
import i from '../asset/home-bg.png'
import j from '../asset/logo.png'
import k from '../asset/nav-bg.png'
import { Link } from 'react-router-dom'

function Hompage() {
    return (
<><meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IIT-Indore || Night Canteen Portal</title>
  <link rel="stylesheet" href="./nc.css" />
  <link rel="icon" href="https://shorturl.at/invCG" />
  <link href="https://fonts.googleapis.com/css?family=Asap" rel="stylesheet" />
  <nav id="navbar">
    <div id="logo">
      <img src={j} title="Logo" alt="IIT-Indore logo" />
    </div>
    <ul>
      <li className="item">
        <Link to='/'>Home</Link>
      </li>
      <li className="item">
        <Link to='/Menu'>Menu</Link>
      </li>
      <li className="item">
        <Link to='/Orders'>Orders</Link>
      </li>
      <li className="item">
        <Link to='/Contact'>ContactUs</Link>
      </li>
      <li className="item">
       <Link to='/Login'>Login</Link>
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
      <span> <Link to='/Canteens'>ORDER NOW! </Link></span>
    </button>
  </section>
</>
    );
}

export default Hompage;