import styled from 'styled-components';

export const HeroContainer = styled.div`
background: #000000;
display: flex;
align-items: center;
justify-content: center;
padding: 0 30px;
height: 500px;
position: relative;
z-index: 1;

@media screen and (max-width: 660px) {
    padding: 15px;
}

@media screen and (max-width: 480px) {
    padding: 0px;
    margin: 0px;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #fff;
`

export const HeroContent = styled.div`
z-index: 3;
display: flex;
align-items: center;
background: transparent;


@media screen and (max-width: 760px) {
    font-size: 49px;
}
`

export const HeroText = styled.h1`
font-size: 70px;
text-align: center;
color: #fff;
background: transparent;


@media screen and (max-width: 760px) {
    font-size: 40px;
}

@media screen and (max-width: 660px) {
    font-size: 15px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`