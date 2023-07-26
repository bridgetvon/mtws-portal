import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

import {About, Email } from './FooterEl';
import logo from '../../Images/MTWSLogo.png';
import '../../App.css';

function FooterBody() {
    const imageStyles ={
        width: '100px',
        height: 'auto',
    }

    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us <About /> </Heading>
                    </Column>
                    <Column>
                        <Heading>Contact Us <Email /> </Heading>
                    </Column>
                        <img id="logo-footer" src={logo} style={imageStyles} ></img>
                </Row>
            </Container>
        </Box>

    )
}

export default FooterBody;