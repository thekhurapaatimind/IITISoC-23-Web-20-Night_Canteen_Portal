import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Button,
  Htext,
  Rr,
  Lnk
} from "./FooterStyles.js";
import { NavLink } from "react-router-dom";

  
const Footer = () => {
  return (<>
 
   <Box>
  < Container>
  <Htext>
    MADE WITH LOVE BY IIT INDORE TEAM<br/>
    </Htext>
    <Rr>All Rights Reserved &#174;</Rr>
  
  <Lnk>
    <ul>
      <li>
<a href="http://twitter.com" rel="me"><img title=" Twitter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" alt="Twitter Button" width="18" height="18" /></a>
      </li>
      <li>
<a href="https://www.instagram.com/iitindoreofficial/?hl=en" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" alt="Insta" title="Instagram" width="18" height="18"></img></a>
      </li>
      <li>
<a href="http://diningfee.iiti.ac.in/" ><img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png" alt="IIT-I" title="IIT-I" width="18" height="18"></img></a>
      </li>
    </ul>
    </Lnk>
      

</Container>
 </Box>
 
 </>
  );
};
export default Footer;