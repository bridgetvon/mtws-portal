import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroText, HeroContent } from './HeroEl';
import militaryVideo from '../../Video/militaryvideo.mp4';




const Hero = (props) => {
  return (
    <>
      <HeroContainer>
          <HeroBg>
              { props.img !== undefined ? 
              <img src={props.img} alt ="hero "/> : 
              <VideoBg autoPlay loop muted src={militaryVideo} type="video/mp4" />
            } 
          </HeroBg>
          <HeroContent>
              <HeroText>
              {/* <Typewriter
              onInit = { (typewriter) => {
                  typewriter
                  .typeString("Build roots with friends on your favorite kind of routes.")
                  .pauseFor(500)
                  .start();
              }}
              /> */}
                </HeroText>
                {/* <AboutUs /> */}
          </HeroContent>
      </HeroContainer>
      
      </>

  )
};

export default Hero;