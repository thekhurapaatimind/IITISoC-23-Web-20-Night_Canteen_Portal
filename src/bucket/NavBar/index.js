import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavBar1'

const NavBar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavLink to='/'>Home</NavLink>
              <NavIcon onClick={toggle}>
                  <p></p>
                  <Bars />
              </NavIcon>
          </Nav>
        </>
    )
}

export default NavBar