import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import css from './Update_Main_page/nc.css'
import Login from './Update_Main_page/Login/index.js'
import Register from './Update_Main_page/Register/index.js'
import Hompage from './Update_Main_page/Hompage/Hompage.js'
 function App() {
  return (
   <>
<Routes>
<Route path="/" element={<Hompage/>}/>
<Route path="/login" element={<Login/>}/>
    </Routes>
    </>
   );
 }
export default App;
