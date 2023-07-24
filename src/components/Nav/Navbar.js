import React from 'react';
import { Nav, Bars, NavMenu, NavLink } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import '../Nav/Navbar.css';
import MTWSLogo from '../../Images/MTWSLogo.png';

const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav className="navbar-Nav">
            <img className="image" src={MTWSLogo} alt ="Mtws Logo "/> 
                <NavLink to="/">
                    <div className="navbar-div">
                        <h2>M-T-W-S Portal</h2>
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
                            <Dropdown.Toggle className='drop-btn'>Support</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <NavLink to="/helpTickets">
                                        Help Tickets
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/mrkiTopics">
                                       MRKI Topics
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/ptrs">
                                        PTR's
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