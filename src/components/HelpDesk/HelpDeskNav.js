import React from 'react';
import { SidebarContainer, SidebarWrapper, SidebarLink, SidebarMenu } from './HelpDeskNavEl';

const HelpDeskNav = ({ toggle }) => {
    return (
        <SidebarContainer >
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        All Tickets
                    </SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>
                        My Tickets
                    </SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>
                        Reports
                    </SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>
                        Downloads
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
};
export default HelpDeskNav;