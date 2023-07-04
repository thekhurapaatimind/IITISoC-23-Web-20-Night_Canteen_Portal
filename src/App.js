import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import css from './Update_Main_page/nc.css'
 import Menu from "./Update_Main_page/Menu/intialiser";
// import Orders from './Update_Main_page/Orders'
import Contact from './Update_Main_page/Contact'
// import Canteens  from './Update_Main_page/Canteens'
import Hompage from './Update_Main_page/Hompage/Hompage.js'
import Header from "./Update_Main_page/Header";
import Error from "./Update_Main_page/Error"

import Orders from "./Update_Main_page/Orders/func";
import styled from "styled-components";
 function App() {
  return (
   <>
<Routes>
<Route path="/" element={<Hompage/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Header" element={<header/>}/>
<Route path="/Menu" element={<Menu/>}>
  </Route>

<Route path="*" element={<Error/>}/>
    </Routes>
    
    </>
   );
 }
export default App;
