import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router' // Verifique se sua versão do router usa 'react-router' ou 'react-router-dom'
import Logo from "/JMPortfolio.png"

// Importar o CSS Module
import styles from './NavBarComponent.module.css';

const NavBar = () => {
   return (
     // Adicionamos a classe do módulo junto com as classes do Bootstrap
     <Navbar expand="lg" className={`fixed-top ${styles.navbarFixed}`}>
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
                 </Nav>
             </NavbarCollapse>
         </Container>
     </Navbar>
   )
}

export default NavBar