import { NavLink } from "react-router-dom"
import j from './asset/logo.png'
import './nc.css'

const Header = () => {
  return (
    <>
    
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
    </>
  )
}

export default Header


