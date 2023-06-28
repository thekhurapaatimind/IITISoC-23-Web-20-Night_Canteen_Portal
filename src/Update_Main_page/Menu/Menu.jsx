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
  // box-shadow: 8px 8px #fdc500;
  --angle: 0deg;
	border: 0.4vmin solid;
	border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
	animation: 4s rotate linear infinite;

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;

`;

export const ProductsHeading = styled.h1`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  text-align: center;
  padding:20px;
  --border-size: 2px;
  --border-angle: 0turn;
  margin-left:30%;
  margin-bottom:50px;
  width: 80vmin;
  height: 6.5vmin;
  align-items: center;
  background-image: conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
    &:hover {
      animation-play-state: paused;
    }
  }
  
  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
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