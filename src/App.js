import { useMediaQuery } from "react-responsive";
import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import css from './Update_Main_page/nc.css'
 import Menu from "./Update_Main_page/Menu/intialiser";
import Contact from './Update_Main_page/Contact'
 import Cart from './Update_Main_page/Cart/func'
import Hompage from './Update_Main_page/Hompage/Hompage.js'
import Header from "./Update_Main_page/Header";
import Error from "./Update_Main_page/Error"
import Orders from "./Update_Main_page/Orders/Orders";

import styled from "styled-components";
 function App() {
  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width: 1201px )",
  // });
  return (
   <>
<Routes>
<Route path="/" element={<Hompage/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Orders" element={<Orders/>}/>
<Route path="/Header" element={<Header/>}/>
<Route path="/Menu" element={<Menu/>}/>
 <Route path="/Cart" element={<Cart/>}/>


<Route path="*" element={<Error/>}/>
    </Routes>
  
    </>
   );
 }
export default App;
