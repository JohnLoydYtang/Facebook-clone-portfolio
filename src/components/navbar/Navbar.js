import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtnGroup,
    MDBTooltip,
} from 'mdb-react-ui-kit';
import Logo from "../../assets/images/portfolio-logo.png";
import "./Navbar.css";

export default function NavBarJs() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='dark' fixed='top'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img
                        src={Logo}
                        height='30'
                        alt=''
                        loading='lazy'
                        className='rounded-circle'
                    />
                </MDBNavbarBrand>
                <form className='d-flex input-group' style={{ width: "37vh", marginRight: '5vh' }}>
                    <input type='search' className='form-control rounded-pill .justify-content-center' placeholder='🔍︎ Search Facebook' aria-label='Search' />
                </form>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBBtnGroup toolbar role='toolbar' >
                            <MDBBtnGroup className='justify-content-between' toolbar aria-label='Toolbar with button groups' >
                                <MDBNavbarItem className='Navbar-item-style'>
                                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Home">
                                        <MDBNavbarLink aria-current='page' href='#' className='hoverBackground'>
                                            <MDBIcon fas icon="home" size="lg" className='Icon-color' />
                                        </MDBNavbarLink>
                                    </MDBTooltip>
                                </MDBNavbarItem>
                                <MDBNavbarItem className='Navbar-item-style'>
                                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Video">
                                        <MDBNavbarLink href='#' className='hoverBackground'><MDBIcon fas icon="video" className='Icon-color' size="lg" /></MDBNavbarLink>
                                    </MDBTooltip>
                                </MDBNavbarItem>
                                <MDBNavbarItem className='Navbar-item-style'>
                                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Marketplace">
                                        <MDBNavbarLink href='#' className='hoverBackground'><MDBIcon fas icon="store" className='Icon-color' size="lg" /></MDBNavbarLink>
                                    </MDBTooltip>
                                </MDBNavbarItem>
                                <MDBNavbarItem className='Navbar-item-style'>
                                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Groups">
                                        <MDBNavbarLink href='#' className='hoverBackground'><MDBIcon fas icon="users" className='Icon-color' size="lg" /></MDBNavbarLink>
                                    </MDBTooltip>
                                </MDBNavbarItem>
                                <MDBNavbarItem className='Navbar-item-style'>
                                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Gaming">
                                        <MDBNavbarLink href='#' className='hoverBackground'><MDBIcon fas icon="gamepad" className='Icon-color' size="lg" /></MDBNavbarLink>
                                    </MDBTooltip>
                                </MDBNavbarItem>
                            </MDBBtnGroup>
                        </MDBBtnGroup>
                        <MDBBtnGroup className='me-auto ms-auto' aria-label='Second Group' toolbar>
                            <MDBNavbarItem className='Navbar-item-style-2nd'>
                                <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Menu">
                                    <MDBNavbarLink href='#' className='hoverBackground-2nd'><MDBIcon fas icon="th" className='Icon-color-2nd' size="lg" /></MDBNavbarLink>
                                </MDBTooltip>
                            </MDBNavbarItem>
                            <MDBNavbarItem className='Navbar-item-style-3rd'>
                                <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Messenger">
                                    <MDBNavbarLink href='#' className='hoverBackground-2nd'><MDBIcon fab icon="facebook-messenger" className='Icon-color-2nd' size="lg" /></MDBNavbarLink>
                                </MDBTooltip>
                            </MDBNavbarItem>
                            <MDBNavbarItem className='Navbar-item-style-4th'>
                                <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Notifications">
                                    <MDBNavbarLink href='#' className='hoverBackground-2nd'><MDBIcon fas icon="bell" className='Icon-color-2nd' size="lg" /></MDBNavbarLink>
                                </MDBTooltip>
                            </MDBNavbarItem>
                        </MDBBtnGroup>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
