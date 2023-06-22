import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { BiFoodMenu } from 'react-icons/bi'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    padding: 1.5em;
    display: flex;
    justify-content: left;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: 'Pacifico', cursive;
    text-decoration: none;


    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%)
        font-weight: bold;
        padding: 1em;
    }
`

export const Bars = styled(BiFoodMenu)`
    font-size: 2rem;
    transform: translate(-50%, -15%);

      
  &:hover {
    color: #ffc500;      
  }
`