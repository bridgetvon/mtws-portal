import React from 'react';
import { NavLink } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import '../Nav/Navbar.css';

const ToolsDropDown = ({ toggle }) => {

    return (
        <> 
        <Dropdown id="dropdown">
            <Dropdown.Toggle id='drop-btn'>Tools</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <NavLink to="/forum">
                        Forum
                    </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                    <NavLink to="/mrkiTopics">
                        System Change Request
                    </NavLink>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}


export default ToolsDropDown;