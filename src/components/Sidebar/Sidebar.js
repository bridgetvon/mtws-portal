import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarEl';

const Sidebar = ({toggle}) => {
  return (
      <SidebarContainer >
          <Icon onClick= {toggle}>
              <CloseIcon  />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="/helpDesk" onClick= {toggle}>
                    Tools
                  </SidebarLink>
                  <SidebarLink to="/forum" onClick= {toggle}>
                     Support
                  </SidebarLink>
                  <SidebarLink to="/home" onClick= {toggle}>
                   Reports
                  </SidebarLink>
                  <SidebarLink to="/home" onClick= {toggle}>
                    Downloads
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
};
 export default Sidebar;