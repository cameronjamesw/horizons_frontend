import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'
import { removeTokenTimestamp } from '../utils/utils'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post('/dj-rest-auth/logout/');
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            console.log(err)
        }
    }

    const addPostIcon = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/posts/create">
                <span><i className="fa-solid fa-pen-to-square"></i> Add post</span>
            </NavLink>
        </>
    )

    const addCategoryIcon = [
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/categories/create">
                <span><i className="fa-solid fa-layer-group"></i> Create Category</span>
            </NavLink>
        </>
    ]

    const loggedInIcons = <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
        >
            <i className="fas fa-stream"></i>Feed
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked"
        >
            <i className="fas fa-heart"></i>Liked
        </NavLink>
        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>Sign out
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
        </NavLink>
    </>

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
            <Navbar
            expanded={expanded} 
            className={styles.NavBar} 
            expand="md" 
            fixed='top' >
                <Container>
                    <NavLink to="/">
                        <Navbar.Brand href="#home">
                            <div className={styles.Logo}><img src={logo} alt='leaf logo' height={50} />
                                <h1>Horizons</h1></div>
                        </Navbar.Brand>
                    </NavLink>
                    {currentUser && addPostIcon}
                    {currentUser?.is_admin && addCategoryIcon}
                    <Navbar.Toggle
                    className={styles.NavBurger}
                    ref={ref} 
                    onClick={() => setExpanded(!expanded)} 
                    aria-controls="basic-navbar-nav" />
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