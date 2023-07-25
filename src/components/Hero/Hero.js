import React from 'react';
import { HeroContainer, HeroBg, HeroText, HeroContent } from './HeroEl';
import Boat from '../../Images/Boat.png';
import './Hero.css';
import Login from '../Login/Login';
import { Row, Col } from 'react-bootstrap';

const Hero = (props) => {

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
                Welcome to the MTWS Portal
                </HeroText>
                <Login />
          </HeroContent>
      </HeroContainer>
      <div>
        <text className='hero-p'>
            This website is not an official component of the Department of Defense or any Military service. It is an unclassified site and contain NO classified
            government information. Users are precluded from submitting classified information in help requests or forum posts. 
        </text>
        <div>

        </div>
      </div>
      </>

  )
};

export default Hero;