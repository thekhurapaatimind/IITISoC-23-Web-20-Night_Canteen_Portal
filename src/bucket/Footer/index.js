import React from 'react'
import {
    FaAt,
    FaCodepen,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './Footer1';


const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">ContactUs</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink 
                            href=" https://github.com/Amit2004Tiwari" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href=" https://www.linkedin.com/in/amit-tiwari-3aa089270" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;