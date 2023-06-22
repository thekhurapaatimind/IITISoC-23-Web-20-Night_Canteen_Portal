import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle";
import Hero from './bucket/Hero';
import Products from './bucket/Products'
import { productData } from './bucket/Products/data';
import { productDataTwo } from './bucket/Products/data';
import Feature from './bucket/Feature';
import Footer from './bucket/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Your favourite dish' data={productData} />
      <Feature />
      <Products heading='Paneer Special' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
