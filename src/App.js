import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import css from './Update_Main_page/nc.css'
import './App.css'
import Login from './Update_Main_page/Login'
import Register from './Update_Main_page/Register'
// import Menu from './Update_Main_page/Menu'
// import Orders from './Update_Main_page/Orders'
import Contact from './Update_Main_page/Contact'
// import Canteens  from './Update_Main_page/Canteens'
import Hompage from './Update_Main_page/Hompage/Hompage.js'
import Header from "./Update_Main_page/Header";
 function App() {
  return (
   <>
<Routes>
<Route path="/" element={<Hompage/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Header" element={<header/>}/>
    </Routes>
    </>
   );
 }
export default App;
