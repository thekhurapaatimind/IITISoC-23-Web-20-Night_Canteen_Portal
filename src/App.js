import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import i from './Update_Main_page/asset/home-bg.png'
import j from './Update_Main_page/asset/logo.png'
import k from './Update_Main_page/asset/nav-bg.png'
import css from './Update_Main_page/nc.css'

 function App() {
   return (

<> <router>
<meta charSet="UTF-8" />
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
        <a href="#">Home</a>
      </li>
      <li className="item">
        <a href="#">Menu</a>
      </li>
      <li className="item">
        <a href="#">Orders</a>
      </li>
      <li className="item">
        <a href="#">Contact</a>
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
      <span>ORDER NOW!</span>
    </button>
  </section>


  </router>
</>

   );
 }
export default App;
