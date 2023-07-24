import React from 'react';
import { NavLink } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import '../Nav/Navbar.css';

const LoginDropDown = ({ toggle }) => {

    return (
        <> 
        <Dropdown id="dropdown">
            <Dropdown.Toggle id='drop-btn'>Login</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <NavLink to="/forum">
                        Signup
                    </NavLink>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}


export default LoginDropDown;