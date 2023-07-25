import React from 'react';
import { NavLink } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import '../Nav/Navbar.css';

const MyDropdown = ({ toggle }) => {

    return (
        <> 
        <Dropdown id="dropdown">
            <Dropdown.Toggle id='drop-btn'>Support</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <NavLink to="/helpDesk">
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
        </>
    );
}


export default MyDropdown;