// import { useEffect, useState } from 'react';
import { StyledSideBar, StyledBox, StyledGradientTextWrapper, StyledMultilayerText, StyledPopText, StyledSection } from '../styles';
import headshot from '../headshot.jpg'

const SideBar = () => {

  return (
    <StyledSideBar>
      <div style={{"width": "90%", "height": "10%", "border": "1px solid red"}}>

      </div>
        <StyledBox>
          <StyledSection style={ { "backgroundColor": "#696868", "display": "flex", "flexDirection": "column", "margin": "2vh 2vw" } }>
          <h1 style={ { "textAlign": "center", "margin": "0", "color": "#282828" } }>Joshua D. Arnow</h1>
          {/* <StyledMultilayerText>TEST</StyledMultilayerText> */}

          <StyledGradientTextWrapper><h1>Joshua D. Arnow</h1></StyledGradientTextWrapper>

          <h1 style={{"textAlign": "center"}}>

            <StyledPopText>TESTING</StyledPopText>
          </h1>

            <img style={{ "borderRadius": "50%", "alignSelf": "center" }} src={headshot} alt="Headshot" width="50%" />


          </StyledSection>
        </StyledBox>


    </StyledSideBar>
  );
};
export default SideBar;