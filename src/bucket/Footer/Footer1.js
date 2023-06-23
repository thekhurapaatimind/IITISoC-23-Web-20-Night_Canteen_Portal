import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: black;
`;

export const FooterWrap = styled.div`
  padding: 10px 28px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 90%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 18px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: red;
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-weight: bold;
  &:hover {
    color: yellow;      
  }
  
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;

`;

export const SocialIconLink = styled.a`
  color: none;
  font-size: 30px;
    
  &:hover {
    color: yellow;      
  }
  
`;