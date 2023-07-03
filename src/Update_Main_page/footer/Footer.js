import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";
import { NavLink } from "react-router-dom";

  
const Footer = () => {
  return (
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>Address</Heading>
            <p color="white">
            Indian Institute of Technology Indore, <br/>
Khandwa Road, Simrol, <br/>
Indore,MP <br/>
India<br/>
            </p>
          </Column>
          <Column>
            <Heading>Reach us at</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Student Dining Committee
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                <p><span>Phone :</span> <a href="+91 731-6603368">+ 91 731-6603368</a></p>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                <p><a href="mailto:dining.committee.sg@iiti.ac.in">Email</a></p>
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;