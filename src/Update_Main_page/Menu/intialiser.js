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
  import {datahb} from './data.js';
  import {datacb} from './data.js';
  import {datas} from './data.js';
  import {dataMP} from './data.js';
  import {dataSW} from './data.js';

const Menu=() => {
    const navigate = useNavigate();
    return (
        <>
    
       
    <Header />
     

    <ProductsContainer>
            <ProductsHeading>
                DISHES MADE JUST FOR YOU
            </ProductsHeading>
            <ProductsHeading>
                Hot Beverages
            </ProductsHeading>
            <ProductWrapper>
                
                {datahb.map((product, index) => {
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
            <ProductsHeading>
                Cold Beverages
            </ProductsHeading>
            <ProductWrapper>
                
                {datacb.map((product, index) => {
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
           
            <ProductsHeading>
                Soups
            </ProductsHeading>
            <ProductWrapper>
                
                {datas.map((product, index) => {
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
            <ProductsHeading>
                Maggi & Pasta
            </ProductsHeading>
            <ProductWrapper>
                
                {dataMP.map((product, index) => {
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
            <ProductsHeading>
                Sandwiches
            </ProductsHeading>
            <ProductWrapper>
                
                {dataSW.map((product, index) => {
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