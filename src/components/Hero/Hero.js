import React from 'react';
import { HeroContainer, HeroBg, HeroText, HeroContent } from './HeroEl';
import Helicopter from '../../Images/Helicopter.png';




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
            <img style={imageStyles} src={Helicopter} alt="hero" />
            </HeroBg>
          {/* <HeroContent>
              <HeroText>
                <div>
                    <text></text>
                </div>
                </HeroText>
          </HeroContent>
          <HeroBg>dsjkafhsajkfhkajsdhf</HeroBg> */}
      </HeroContainer>
      <div>
        <text> Welcome to the MTWS Portal </text>
      </div>
      </>

  )
};

export default Hero;