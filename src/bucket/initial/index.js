import React, {useState} from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroB, 
    HeroBtn 
} from './initial1'


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
                    <HeroH1>Today's Special</HeroH1>
                    <HeroB></HeroB>
                    <HeroBtn> Order Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    );
}

export default Hero