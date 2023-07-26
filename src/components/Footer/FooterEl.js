import styled from 'styled-components'
import { FaInfo, FaMailBulk } from 'react-icons/fa'

export const Footer = styled.footer`
height: 40px;
display: flex;
justify-content: space-between;
z-index: 10;
width: 100%;
`

export const About = styled(FaInfo)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
justify-content: space-between;
flex-direction: row;
`

export const Email = styled(FaMailBulk)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
`
