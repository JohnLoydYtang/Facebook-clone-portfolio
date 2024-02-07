import React, { useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn,
    MDBBtnGroup,
    MDBIcon,
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
} from 'mdb-react-ui-kit';

export default function HeaderJs() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBContainer fluid>

            <MDBCarousel>
                <MDBCarouselItem itemId={1}>
                    <div style={{ position: "relative", marginTop: "8.3vh" }}>
                        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' alt='...' style={{ height: "50vh", width: "135vh" }} />
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <div style={{ position: "relative", marginTop: "8.3vh" }} >
                        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' style={{ height: "50vh", width: "135vh" }} alt='...' />
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <div style={{ position: "relative", marginTop: "8.3vh" }} >
                        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' style={{ height: "50vh", width: "135vh" }} alt='...' />
                    </div>
                </MDBCarouselItem>
            </MDBCarousel>
            <img
                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                className='img-thumbnail rounded-circle position-absolute top-0 end-50'
                alt='...'
                style={{ height: "27vh", position: "relative", width: "27vh", marginRight: "36vh", marginTop: "45vh" }}
            />
            <h2 className='position-absolute end-50' style={{ marginTop: "3vh" }}>John Loyd Ytang</h2>
            <MDBBtnGroup style={{ position: "relative", marginLeft: "46%", marginTop: "6vh" }}>
                <MDBBtn className='rounded' style={{ height: "5vh", right: "2vh" }}><MDBIcon fas icon="plus" /> Add to story</MDBBtn>
                <MDBBtn className='rounded bg-dark shadow-1-strong' style={{ height: "5vh" }}><MDBIcon fas icon="pen" />  Edit profile</MDBBtn>
            </MDBBtnGroup>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
                <hr style={{ width: '66.5%' }} />
            </div>
            <MDBNavbar expand='lg' light bgColor='light' style={{ position: "relative", marginRight: "64vh", left: "32vh", bottom: "5.8vh" }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Posts</MDBNavbarBrand>

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
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>About</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Friends</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Photos</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Videos</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Check-ins</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        More
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </MDBContainer>
    );
}
