// import { useEffect, useState } from 'react';
import { StyledSideBar, StyledBox, StyledGradientTextWrapper, StyledMultilayerText, StyledPopText, StyledSection } from '../styles';
import styled from 'styled-components/macro';
import headshot from '../headshot.jpg';

const StyledName = styled.h1`
  margin: 2vh 0;
  text-align: center;
  line-height: 1.0em;
  font-size: 4.2vw;
`;

const StyledItem = styled.h2`
  
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

  ${'' /* position: absolute;
  top: 20%;
  left: 20%; */}

  ${'' /* align-self: center; */}
  text-align: center;
  ${'' /* color: black; */}
  transform: translate(-50%, -50%);
  ${'' /* font-size:1.0em; */}
  ${'' /* letter-spacing:0.1em; */}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #b22234;
  text-shadow:
    0.15vw 0.15vh #ffffff,
    0.3vw 0.3vh #3c3b6e;
`;

const SideBar = () => {

  return (
    <StyledSideBar>
      {/* <div style={{"width": "90%", "height": "10%", "border": "1px solid red"}}>

      </div> */}
        <StyledBox>
          <StyledSection style={{ "backgroundColor": "#696868", "display": "flex", "flexDirection": "column", "margin": "2vh 2vw" }}>
          <StyledName>
            <CustomStyledPopText>
              Joshua D. Arnow
            </CustomStyledPopText>
          </StyledName>
          <StyledImage src={ headshot } alt="Headshot" />


          {/* <StyledMultilayerText>TEST</StyledMultilayerText> */}

          <StyledGradientTextWrapper><h1>Joshua D. Arnow</h1></StyledGradientTextWrapper>


          </StyledSection>
        </StyledBox>


    </StyledSideBar>
  );
};
export default SideBar;