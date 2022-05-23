// import { useEffect, useState } from 'react';
import { StyledBox, StyledSection } from '../styles';
// import Box from '@mui/material/Box';
import styled from 'styled-components/macro';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 75vw;
`;

const StyledHeading = styled.h1`
  text-align: center;
  margin: 0;
`;

const Welcome = () => {

  return (
    <StyledDiv>
      <StyledBox style={ { "width": "70vw", "margin": "2vh 0" } }>
        <StyledSection>
          <StyledHeading>
            Hello and welcome to my personal website! If the URL didn't give it away, my name is Josh Arnow and I'm a software engineer.
          </StyledHeading>
        </StyledSection>
      </StyledBox>
    </StyledDiv>
  );
};
export default Welcome;