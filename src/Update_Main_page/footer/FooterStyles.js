import styled from 'styled-components';
   
export const Box = styled.div`

  display:flex;
  align-items:center;
  background:rgb(0,0,0,0.2);

  width: 100%;
  height: 120px;
  margin:100px auto;
`
export const Htext = styled.div`
color:rgb(255,255,255);
font-weight:550;
text-align:center;
opacity:80%;

`
export const Rr = styled.div`
color:rgb(255,255,255);
font-weight:400;
text-align:center;
margin:10px;
opacity:80%;
`
export const Lnk = styled.div`

`
export const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 10em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    padding: 8px 15px;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
