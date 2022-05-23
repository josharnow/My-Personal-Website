// import { useEffect, useState } from 'react';
import { StyledBox, StyledSection } from '../styles';
// import Box from '@mui/material/Box';

const Welcome = () => {

  return (
    <div className='d-flex' style={ { "justifyContent": "center", "width": "75vw" } }>
      <StyledBox style={ { "width": "70vw", "margin": "2vh 0" } }>
        <StyledSection>
          <h1 style={ { "textAlign": "center", "margin": "0" } }>Hello and welcome to my personal website! If the URL didn't give it away, my name is Josh Arnow and I'm a software engineer.</h1>
        </StyledSection>
      </StyledBox>
    </div>


  );
};
export default Welcome;