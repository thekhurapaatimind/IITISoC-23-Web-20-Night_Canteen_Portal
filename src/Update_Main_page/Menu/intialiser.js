import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header';
import { NavLink } from 'react-router-dom';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
  } from './Menu.jsx';
  import {data} from './data.js';

const Menu=() => {
    const navigate = useNavigate();
    return (
        <>
    
       
    <Header />
     

    <ProductsContainer>
            <ProductsHeading>
                your fav dish
            </ProductsHeading>
            <ProductWrapper>
                
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                        <ProductImg src={product.img} alt=  {product.alt} />
                        <ProductInfo>

                        <ProductTitle>
                            {product.name}
                        </ProductTitle>

                        <ProductDesc>
                            {product.desc}
                        </ProductDesc>

                        <ProductPrice>
                            {product.price}
                        </ProductPrice>

                        <ProductButton>
                            {product.button}
                        </ProductButton>

                        </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    </>
  )
}

export default Menu