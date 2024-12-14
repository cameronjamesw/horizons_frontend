import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <Navbar className={styles.NavBar} expand="md" fixed='top' >
                <Container>
                    <NavLink to="/">
                        <Navbar.Brand href="#home"><img src={logo} alt='leaf logo' height={45} /></Navbar.Brand></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="light" id="basic-navbar-nav">
                        <Nav className={`${styles.Nav} ml-auto text-right`}>
                            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/"><span><i className="fa-solid fa-house"></i> Home</span></NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin"><span><i className="fa-solid fa-right-to-bracket"></i> Sign In</span></NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="signup"><span><i className="fa-solid fa-user-plus"></i> Sign Up</span></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar