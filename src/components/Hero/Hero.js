import React from 'react';
import { HeroContainer, HeroBg, HeroText, HeroContent } from './HeroEl';
import Boat from '../../Images/Boat.png';
import './Hero.css';
import Login from '../Login/Login';
import { Row, Col, Card, Button } from 'react-bootstrap';
import MilitaryPic from '../../Images/Military.jpg';
import HelpDesk from '../../Images/HelpDesk.png';
import Soldiers from '../../Images/Soldiers.jpg';
import Soldier from '../../Images/Soldier.png';

const Hero = () => {

    const imageStyles = {
        width: '100%',
        height: 'auto',
    };

    return (

        <>
            <HeroContainer>
                <HeroBg>
                    {/* { props.img !== undefined ? 
              <img src={props.img} alt ="hero "/> : 
              <VideoBg autoPlay loop muted src={militaryVideo} type="video/mp4" />
            }  */}
                    <img style={imageStyles} src={Boat} alt="hero" />
                </HeroBg>
                <HeroContent>
                    <HeroText>
                        WELCOME TO THE MTWS-MRKI PORTAL
                    </HeroText>
                </HeroContent>
            </HeroContainer>
            <Row>
                <Col>
                    <Card bg="dark" text="light" border="light" className='hero-p'>
                        <Card.Img variant="top" src={MilitaryPic} id="card-img" />
                        <Card.Body>
                            <Card.Text>
                                This website is not an official component of the Department of Defense or any Military service. It is an unclassified site and contain NO classified
                                government information. Users are precluded from submitting classified information in help requests or forum posts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card text="light" bg="dark" border="light" className='hero-p'>
                        <Card.Img variant="top" src={Soldiers} id="card-img" />
                        <Card.Body>
                            <Card.Text>
                                This website is not an official component of the Department of Defense or any Military service. It is an unclassified site and contain NO classified
                                government information. Users are precluded from submitting classified information in help requests or forum posts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" text="light" border="light" className='hero-p'>
                        <Card.Img variant="top" src={HelpDesk} id="card-img" />
                        <Card.Body>
                            <Card.Text>
                                For MTWS_MRKI help you can call the MTWS help hotline at (123)-456-7891 & email at MTWSHelp@mtws-mrki.net, or  
                            </Card.Text>
                            <Button id="card-btn" variant="outline-light" text="light">
                                Contact Here
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
            <div>
            <img style={imageStyles} src={Soldier} alt="hero" />
            </div>
        </>

    )
};

export default Hero;