import { NavLink } from "react-router-dom"
import j from './asset/logo.png'
import './nc.css'
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
  return (
    <>
    
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./nc.css" />

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
        
        
        
    {  
                 isAuthenticated && <li>
  
                
                  
                        </li>}
              {  isAuthenticated ? (<li>
                    <button className="item" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      LogOut
    </button>
                </li>)
                :
               ( <li className="items">
                <button  onClick={() => loginWithRedirect()}>LogIn</button>
                </li>
                
           ) }
        
        </ul>
  
      
    </nav>
    </>
  )
}

export default Header


