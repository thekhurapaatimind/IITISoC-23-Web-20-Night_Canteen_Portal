import React from 'react'
import { NavLink } from 'react-router-dom'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from '../Header'
import bg from '../../data&pics/cdf.png'
import {
 Content
} from '../Menu/Menu.jsx';
const Orders = () => {
  return (
    <>
       <Content>
    <Header/>
        </Content>
    </>
  )
}

export default Orders
