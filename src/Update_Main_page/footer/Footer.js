import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Button,
} from "./FooterStyles.js";
import { NavLink } from "react-router-dom";

  
const Footer = () => {
  return (<>
 
   <Box>
  < Container>
   
  <a href="http://twitter.com" rel="me"><img title=" Twitter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" alt="Twitter Button" width="24" height="24" />
      
</a>
</Container>
 </Box>
 
 </>
  );
};
export default Footer;