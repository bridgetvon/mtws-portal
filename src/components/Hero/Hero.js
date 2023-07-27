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
import {BiSupport} from 'react-icons/bi';
import {AiFillBug} from 'react-icons/ai';
import {FaExchangeAlt} from 'react-icons/fa';

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
            <Row className='m-4'>
                <Col>
                    <Card bg="dark" text="light" border="light" className='hero-p' id='top-card'>
                        <Card.Img variant="top" src={MilitaryPic} id="card-img" />
                        <Card.Body>
                            <Card.Text id='top-card-txt'>
                                This website is not an official component of the Department of Defense or any Military service. It is an unclassified site and contain NO classified
                                government information. Users are precluded from submitting classified information in help requests or forum posts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card text="light" bg="dark" border="light" className='hero-p' id='top-card'>
                        <Card.Img variant="top" src={Soldiers} id="card-img" />
                        <Card.Body>
                            <Card.Text id='top-card-txt'>
                                This website is not an official component of the Department of Defense or any Military service. It is an unclassified site and contain NO classified
                                government information. Users are precluded from submitting classified information in help requests or forum posts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" text="light" border="light" className='hero-p' id='top-card'>
                        <Card.Img variant="top" src={HelpDesk} id="card-img" />
                        <Card.Body>
                            <Card.Text id='top-card-txt'>
                                For MTWS_MRKI help you can call the MTWS help hotline at (123)-456-7891 & email at MTWSHelp@mtws-mrki.net, or
                            </Card.Text>
                            <Button id="card-btn" className="m-4" variant="outline-light" text="light">
                                Contact Here
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div style={{position: 'relative'}}>
                <img src={Soldier} alt="hero" id='lower-img' />
                <div id="lower-img-div">hello here is some cool quote</div>
                <div id="lower-img-small"> And then some smaller text fsdjghsdkjhksjdhgkjdfhgksdhs </div>
            </div>
            <Row>
                <Col>
                <div id='support-div'>
                <h1 id='mtws-support'> MTWS-MRKI is here for...</h1>
                </div>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <Card bg="dark" text="light" border="light" className='hero-p'>
                        <Card.Body>
                            <Card.Text id='icon-text'>
                               Tech Support
                            </Card.Text>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                            <BiSupport style={{ fontSize: '6rem'}} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card text="light" bg="dark" border="light" className='hero-p'>
                        <Card.Body>
                            <Card.Text id='icon-text'>
                                Bug Reports
                            </Card.Text>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                            <AiFillBug style={{ fontSize: '6rem'}} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" text="light" border="light" className='hero-p'>
                        <Card.Body>
                            <Card.Text id='icon-text'>
                                Change Requests
                            </Card.Text>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                            <FaExchangeAlt style={{ fontSize: '6rem'}}/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>

    )
};

export default Hero;