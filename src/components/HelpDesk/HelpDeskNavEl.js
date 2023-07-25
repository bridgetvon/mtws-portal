import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.aside`
position: fixed;
display: grid;
align-items: center;
left: 0;
height: 100%;
width: 20%;
`
export const SidebarWrapper = styled.div`
color: #fff;

`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;


@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}

`
export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.0rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;


&:hover {
    color: #15cdfc;
    transition: 0.2s ease-in-out;
}
`