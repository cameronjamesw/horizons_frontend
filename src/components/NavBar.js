import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'


const NavBar = () => {
    return (
        <div>
            <Navbar className={styles.NavBar} expand="md" fixed='top' >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt='leaf logo' height={45} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="light" id="basic-navbar-nav">
                        <Nav className={`${styles.Nav} ml-auto text-right`}>
                            <Nav.Link><span><i className="fa-solid fa-house"></i> Home</span></Nav.Link>
                            <Nav.Link><span><i className="fa-solid fa-right-to-bracket"></i> Sign In</span></Nav.Link>
                            <Nav.Link><span><i className="fa-solid fa-user-plus"></i> Sign Up</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar