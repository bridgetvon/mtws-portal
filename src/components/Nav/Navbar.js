import React from 'react';
import { Nav, Bars, NavMenu, NavLink } from './NavbarEl';
import '../Nav/Navbar.css';
import MTWSLogo from '../../Images/MTWSLogo.png';
import MyDropdown from './DropDown';
import ToolsDropDown from './ToolsDropDown';
import ReportsDropDown from './ReportsDropDown';
import DownloadsDropDown from './DownloadsDropDown';
import LoginDropDown from './LoginDropDown';

const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav className="navbar-Nav">
                <img className="image" src={MTWSLogo} alt="Mtws Logo " />
                <NavLink to="/home">
                    <div className="navbar-div">
                        <h2>MTWS-MRKI Portal</h2>
                    </div>
                </NavLink>
                <Bars onClick={toggle} />
                <nav className="text-center">
                    <NavMenu>
                        <>
                            <Bars onClick={toggle} />
                            <ToolsDropDown />
                            <MyDropdown />
                            <ReportsDropDown />
                            <DownloadsDropDown />
                        </>
                        <>
                            <LoginDropDown />
                        </>
                    </NavMenu>
                </nav>
            </Nav>
        </>
    );
}


export default Navbar;