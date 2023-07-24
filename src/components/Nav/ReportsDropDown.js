import React from 'react';
import { NavLink } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import '../Nav/Navbar.css';

const ReportsDropDown = ({ toggle }) => {

    return (
        <> 
        <Dropdown id="dropdown">
            <Dropdown.Toggle id='drop-btn'>Reports</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <NavLink to="/forum">
                        Events
                    </NavLink>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}


export default ReportsDropDown;