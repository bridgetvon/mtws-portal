import React from 'react';
import { Nav, Bars, NavMenu, NavLink } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import '../Nav/Navbar.css';

const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav className="navbar-Nav">
                <NavLink to="/">
                    <div className="navbar-div">
                        <h2>MTWS Portal</h2>
                    </div>
                </NavLink>
                <Bars onClick={toggle} />
                <nav className="text-center">
                    <NavMenu>
                            <>
                                <Bars onClick={toggle} />                
                                <NavLink to="/social">
                                    Home
                                </NavLink>
                                <NavLink to="/friends">
                                    Tools
                                </NavLink>
                                <NavLink to="/forum">
                                    Support
                                </NavLink>
                                <NavLink to="/chat">
                                    Reports
                                </NavLink>
                                <NavLink to="/chat">
                                    Downloads
                                </NavLink>
                                <NavLink to="/chat">
                                    Logout
                                </NavLink>
                            </>
                        
                            <>
                                <NavLink to="/login">Login</NavLink>
                            </>
                        
                        <Dropdown id="dropdown">
                            <Dropdown.Toggle className='drop-btn'>Activities</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <NavLink to="/ski">
                                        Ski
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/mountain-bike">
                                        Mountain bike
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/trail-run">
                                        Trail Run
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/strava">
                                        Strava Data
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NavMenu>
                </nav>
            </Nav>
        </>
    );
}


export default Navbar;