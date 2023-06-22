import React, {useState} from 'react'
import NavBar from '../../bucket/NavBar'
import SideBar from '../../bucket/SideBar'
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroB, 
    HeroBtn 
} from './Hero1'


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Noodles</HeroH1>
                    <HeroB></HeroB>
                    <HeroBtn>Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    );
}

export default Hero