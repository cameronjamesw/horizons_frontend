import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useCurrentUser } from '../contexts/CurrentUserContexf'


const NavBar = () => {
    const currentUser = useCurrentUser();

    const loggedInIcons = <>{currentUser?.username}</>

    const loggedOutIcons = <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin">
            <span><i className="fa-solid fa-right-to-bracket"></i> Sign In</span>
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="signup">
            <span><i className="fa-solid fa-user-plus"></i> Sign Up</span>
        </NavLink>
    </>
    return (
        <div>
            <Navbar className={styles.NavBar} expand="md" fixed='top' >
                <Container>
                    <NavLink to="/">
                        <Navbar.Brand href="#home">
                            <div className={styles.Logo}><img src={logo} alt='leaf logo' height={50} />
                                <h1>Horizons</h1></div>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="light" id="basic-navbar-nav">
                        <Nav className={`${styles.Nav} ml-auto text-right`}>
                            <NavLink
                                exact
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/">
                                <span><i className="fa-solid fa-house"></i> Home</span>
                            </NavLink>
                            {currentUser ? loggedInIcons : loggedOutIcons}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar