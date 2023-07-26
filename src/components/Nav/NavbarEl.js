import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background: none;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc(( 100vw - 1000px) /2);
z-index: 10;
`
export const NavLink = styled(Link) `
color: #2a2a2a;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
background-color: transparent;

&.active {
    color: #1e96fc;
}
`

export const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}

@media screen and (max-width: 890px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-40%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}


`

export const NavBtn =styled(Link) `
display: flex;
align-items: center;
margin-right: 24px;
`
export const NavMenu = styled.div `
display: flex;
align-items: center;
margin-right: 24px;



@media screen and (max-width: 768px) {
    display: none;
}
`