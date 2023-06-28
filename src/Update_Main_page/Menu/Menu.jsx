import styled from 'styled-components'
export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  
`;

export const ProductCard = styled.div`
  margin: 2rem 2rem;
  line-height: 2;
  width: 300px;
  background-color:maroon;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
export const ProductImg = styled.img`

  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border:2px solid white;
  
    --c: #fbff00; 
    --b: 2.5px;    
    --g: 0px;     /* the gap on hover */
    
    padding: calc(var(--g) + var(--b));
    --_g: #0000 25%,var(--c) 0;
    background: 
      conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g))
       var(--_i,200%) 0  /200% var(--_i,var(--b))  no-repeat,
      conic-gradient(            at bottom var(--b) left  var(--b),var(--_g))
       0   var(--_i,200%)/var(--_i,var(--b)) 200%  no-repeat;
    transition: .3s, background-position .3s .3s;
    cursor: pointer;
  
  &:hover {
    --_i: 100%;
    transition: .3s, background-size .3s .3s;
  }

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
  padding: 2rem;
  text-align: center;
  
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius:20px;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

`;