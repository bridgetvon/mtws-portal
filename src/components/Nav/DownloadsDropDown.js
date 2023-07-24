import React from 'react';
import { NavLink } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import '../Nav/Navbar.css';

const DownloadsDropDown = ({ toggle }) => {

    return (
        <> 
        <Dropdown id="dropdown">
            <Dropdown.Toggle id='drop-btn'>Downloads</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <NavLink to="/forum">
                        MTWS user manual
                    </NavLink>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}


export default DownloadsDropDown;