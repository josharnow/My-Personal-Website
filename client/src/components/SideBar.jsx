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

const StyledImage = styled.img`
  width: 50%;
  border-radius: 50%; 
  align-self: center;
  margin: 1vh 0;
`;

const SideBar = () => {

  return (
    <StyledSideBar>
      {/* <div style={{"width": "90%", "height": "10%", "border": "1px solid red"}}>

      </div> */}
        <StyledBox>
          <StyledSection style={ { "backgroundColor": "#696868", "display": "flex", "flexDirection": "column", "margin": "2vh 2vw" } }>
          <StyledName>
            <StyledPopText >Joshua D. Arnow</StyledPopText>
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