import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'


const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="md" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt='leaf logo' height={45} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto text-right text-light">
                            <Nav.Link><i className="fa-solid fa-house"></i> Home</Nav.Link>
                            <Nav.Link><i className="fa-solid fa-right-to-bracket"></i> Sign In</Nav.Link>
                            <Nav.Link><i className="fa-solid fa-user-plus"></i> Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar