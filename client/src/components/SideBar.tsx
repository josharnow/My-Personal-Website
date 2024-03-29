// import { useEffect, useState } from 'react';
import { StyledSideBar, StyledBox, StyledGradientTextWrapper, StyledMultilayerText, StyledPopText, StyledSection } from '../styles';
import Banner from './Banner';
import styled from 'styled-components/macro';
// @ts-ignore
import headshot from '../headshot.jpg';
import MapIcon from '@mui/icons-material/Map';
import { FC } from 'react';

const StyledName = styled.h1`
  margin: 2vh 0;
  text-align: center;
  line-height: 1.0em;
  font-size: 4.2vmin;
  ${'' /* font-size: 4.2vw; */}
  font-weight: bold;
`;

const StyledTitle = styled.h2`
  ${'' /* font-size: 2.5vmin; */}
  font-size: 2.0vw;

  margin: 0.5vh 0 2vh 0;
  font-style: italic;
  font-weight: bold;
`;

const StyledCategory = styled.h2`
  font-size: 2.0vw;
  ${'' /* margin: 1vh 0; */}
  text-decoration: wavy underline 1px #b22234;
  ${'' /* text-decoration: wavy underline overline 1px #b22234; */}
  font-weight: bold;
`;

const StyledImage = styled.img`
  width: 7.5vmin;
  ${'' /* width: 50%; */}
  border-radius: 50%; 
  align-self: center;
  margin: 0 0 1vh;
  ${'' /* margin: 1vh 0; */}
`;

const CustomStyledPopText = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
  font-family: 'Montserrat', sans-serif;

  text-align: center;
  transform: translate(-50%, -50%);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #b22234;
  text-shadow:
    0.13vw 0.13vh #ffffff,
    0.26vw 0.26vh #3c3b6e;
  ${'' /* text-shadow:
    0.16vw 0.16vh #ffffff,
    0.32vw 0.32vh #3c3b6e; */}
`;

const CustomStyledGradientTextWrapper = styled.div`
  ${'' /* background: linear-gradient(
    to right, 
    hsl(98 100% 62%), 
    hsl(204 100% 59%)
  ); */}
  background: linear-gradient(
    to right, 
    hsl(11 100% 62%), 
    hsl(76 100% 59%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const StyledIframe = styled.iframe`
  filter: opacity(0.7);
  ${'' /* padding: 1vw; */}
  margin: 0 0 1vh 0;
  width: 90%;
  height: 17vmin;
  border-radius: 20px;
  align-self: center;
`;

const StyledTextContent = styled.h3`
  font-size: 1.5vw;
  align-self: center;
  margin: 0;
`;

const SideBar:FC = () => {

  return (
    <StyledSideBar>
        <StyledBox>
          {/* <Banner /> */}
          <StyledSection style={{ "backgroundColor": "rgba(105, 104, 104, 90%)", "display": "flex", "flexDirection": "column", "margin": "2vh 2vw" }}>
            <StyledName>
              <CustomStyledPopText>
                Joshua D. Arnow
              </CustomStyledPopText>
            </StyledName>
            <StyledImage src={ headshot } alt="Headshot" />


            {/* <StyledMultilayerText>TEST</StyledMultilayerText> */}

            <StyledGradientTextWrapper>
              <StyledTitle>
                Full Stack Software Engineer
              </StyledTitle>
            </StyledGradientTextWrapper>

            <CustomStyledGradientTextWrapper>
              <StyledCategory>
                <MapIcon style={{ "height": "100%", "width": "2.0vw" }} />Location<MapIcon style={{ "height": "100%", "width": "2.0vw" }} />
              </StyledCategory>
            </CustomStyledGradientTextWrapper>

            {/* <h3>West </h3> */}
            <StyledGradientTextWrapper>
              <StyledTextContent>
                West Palm Beach, FL
              </StyledTextContent>
            </StyledGradientTextWrapper>
            <StyledIframe title="Map" src="https://www.google.com/maps/embed/v1/place?q=1900+Consulate+Pl,+West+Palm+Beach,+FL+33401&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
            

          </StyledSection>
        </StyledBox>


    </StyledSideBar>
  );
};
export default SideBar;