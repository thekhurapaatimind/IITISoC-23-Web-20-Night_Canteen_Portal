import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle";
import Hero from './bucket/initial';
import Products from './bucket/Products'
import { productData } from './bucket/Products/info';
import { productDataTwo } from './bucket/Products/info';
import Feature from './bucket/Central';
import Footer from './bucket/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Your favourite dish' data={productData} />
      {/* <Feature /> */}
      <Products heading='Paneer Special' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
