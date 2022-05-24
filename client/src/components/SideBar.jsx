// import { useEffect, useState } from 'react';
import { StyledSideBar, StyledBox, StyledGradientTextWrapper, StyledMultilayerText, StyledPopText, StyledSection } from '../styles';
import styled from 'styled-components/macro';
import headshot from '../headshot.jpg';

const StyledName = styled.h1`
  margin: 2vh 0;
  text-align: center;
  line-height: 1.0em;
  font-size: 4.2vw;
  font-weight: bold;
`;

const StyledTitle = styled.h2`
  ${'' /* font-size: 2.5vmin; */}
  font-size: 2.3vw;
  margin: 0.5vh 0 2vh 0;
  font-style: italic;
  font-weight: bold;
`;

const StyledCategory = styled.h2`
  font-size: 2.25vmin;
  margin: 2vh 0;
  text-decoration: wavy underline overline 1px #b22234;
  font-weight: bold;
`;

const StyledImage = styled.img`
  width: 50%;
  border-radius: 50%; 
  align-self: center;
  margin: 1vh 0;
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
    0.16vw 0.16vh #ffffff,
    0.32vw 0.32vh #3c3b6e;

  ${'' /* background: linear-gradient(
    to right, 
    hsl(98 100% 62%), 
    hsl(204 100% 59%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 
    0.15vw 0.15vh #345beb,
    0.3vw 0.3vh #000000; */}
  ${'' /* filter: drop-shadow(2px 2px #333) */}
  ${'' /* transform: translate(-50%, -50%); */}

    
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

const SideBar = () => {

  return (
    <StyledSideBar>
        <StyledBox>
          <StyledSection style={{ "backgroundColor": "#696868", "display": "flex", "flexDirection": "column", "margin": "2vh 2vw" }}>
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
                Location
              </StyledCategory>
            </CustomStyledGradientTextWrapper>

          </StyledSection>
        </StyledBox>


    </StyledSideBar>
  );
};
export default SideBar;