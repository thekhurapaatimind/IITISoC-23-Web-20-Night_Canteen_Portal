import React from 'react'
import { 
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarMenu, 
    SideBarLink, 
    SideBarRoute, 
    SideBtnWrap
} from './SideBar1'


const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/">Chinese</SideBarLink>
                <SideBarLink to="/">Mexican</SideBarLink>
                <SideBarLink to="/">Todays's Special</SideBarLink>
                <SideBarLink to="/">Noodles</SideBarLink>
                <SideBarLink to="/">Sandwich</SideBarLink>
                <SideBarLink to="/">Roll</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/">Now</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default SideBar