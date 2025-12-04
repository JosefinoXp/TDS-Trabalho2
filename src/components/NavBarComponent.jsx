import React from 'react'
 import { Container, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
 import NavbarBrand from 'react-bootstrap/NavbarBrand'
 import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
 import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

 const NavBar = () => {
   return (
     <Navbar bg="light" expand="lg">
         <Container>
             <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
             <NavbarToggle aria-controls="basic-navbar-nav" />
             <NavbarCollapse id="basic-navbar-nav">
                 <Nav className='me-auto'>
                     <NavLink href="#home">Home</NavLink>
                     <NavLink href="#Link">Link</NavLink>
                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.2">Anoter Action</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="#action/3.4">Separted link</NavDropdown.Item>
                     </NavDropdown>
                 </Nav>
             </NavbarCollapse>
         </Container>
     </Navbar>
   )
 }

 export default NavBar
