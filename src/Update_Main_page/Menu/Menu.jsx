import styled from 'styled-components'
import img from '../../data&pics/cdf.png'
export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding:5rem;
  color: #fff;
  
`;
export const Content = styled.div`
    
    background-image: url(${img});
    height: 5509px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
border: 0.5px solid white;
  margin: 2rem 2rem;
  width: 300px;
  background-color:rgb(0,0,0,0.5);
  border-radius:25px;
  transition:all 0.2s ease-in-out;
  &:hover{
    transform:scale(1.05);
    background-color:rgba(255, 255, 255, 0.3);
    cursor:pointer;
    color:black;
border: 0.5px solid yellow;

  }
`;

export const ProductImg = styled.img`
  border-radius:50%;
  margin-top:30px;
  margin-left:50px;
  height: 200px;
  width:200px;

`;

export const ProductsHeading = styled.h1`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  text-align: center;
  width:25%;
  margin-top:30px;
  margin-bottom:30px;
  padding:20px;
    text-transform: uppercase;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 5;
    position: absolute;
    left: 50%;
    top: 50%;
    position: relative;
    transform: translate(-50%,-50%);
    border-radius: 3px;
    cursor: pointer;
    padding: 0.8em 1.6em;
    font-size: 20px;
    overflow: hidden;
    &:focus, &:active {
      outline: none;
    }
    &:before, &:after {
      content: '';
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      height: auto;
      width: auto;
      z-index: -1;
      border-radius: inherit;
      background: inherit;
    }
    &:before {
      background: linear-gradient(90deg, #0ebeff, #ffdd40, #ae63e4, #47cf73, #0ebeff, #ffdd40, #ae63e4, #47cf73);
      background-size: 200% 200%;
    }
    &:after {
      margin: 3px;
    }
    &:hover:before, &:focus:before {
      animation: rainbow-border 1.5s linear infinite
    }
  }
  @keyframes rainbow-border {
    0% { background-position: 0% 50% }
    100% { background-position: 200% 50% }
  }
  
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  
`;

export const ProductDesc = styled.p`
  
`;

export const ProductPrice = styled.p`
  border:0.9px solid white;
  padding:10px 15px;
  margin: 0.5rem;
  font-size: 2rem;
  background-color:rgba(94, 236, 213, 0.452);
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border:0px !important;
  color: #fff;
  background-color:rgba(201, 194, 90, 0.452);
  transition: 0.2 ease-out;
  border-radius:20px;
  &:hover {
    background: rgba(201, 194, 90, 0.781);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

`;