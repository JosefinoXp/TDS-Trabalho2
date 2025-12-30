import React from 'react'
import { Container, Image, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

import Logo from "../assets/JMPortfolio.png"

// routing
import { Link } from 'react-router'

 const NavBar = () => {
   return (
     <Navbar bg="light" expand="lg" className='fixed-top'>
         <Container>
             <NavbarBrand as={Link} to ="/">
                <Image src={Logo} width={30} height={30} className="d-inline-block align-top me-2" />
                Portfolio Zeh Miller 
             </NavbarBrand>
             <NavbarToggle aria-controls="basic-navbar-nav" />
             <NavbarCollapse id="basic-navbar-nav">
                 <Nav className='me-auto'>
                     <Nav.Link as={Link} to ="/Contato">Contato</Nav.Link>
                     <Nav.Link as={Link} to ="/Equipamentos">Equipamentos</Nav.Link>
                     <Nav.Link as={Link} to ="/Pacotes">Pacotes</Nav.Link>
                     <Nav.Link as={Link} to ="/Processos_Regras">Processos e Regras</Nav.Link>
                     {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.2">Anoter Action</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="#action/3.4">Separted link</NavDropdown.Item>
                     </NavDropdown> */}
                 </Nav>
             </NavbarCollapse>
         </Container>
     </Navbar>
   )
 }

 export default NavBar
