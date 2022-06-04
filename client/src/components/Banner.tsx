import { FC, useEffect, useState } from 'react';
import { StyledBanner } from '../styles';
import styled from 'styled-components/macro';

const StyledHeading = styled.h6`
  ${'' /* color: #1f00eb; */}
  color: #060166;
  text-align: center;
  font-weight: bold;
  margin: 0;
  ${'' /* align-self: center; */}
  ${'' /* height: 5vh; */}
  ${'' /* height: 100%; */}
  width: 100%;
  ${'' /* font-size: 2.0em; */}
  font-size: 1.5vmin;
`;


const Banner:FC = () => {

  return (
      <StyledBanner>
        {/* <h1 style={ { "margin": "1vw", "width": "fit-content" } }>I am currently seeking employment!</h1> */}
        <StyledHeading>
          Currently seeking full-time employment as a software engineer; please contact me to inquire!
        </StyledHeading>
      </StyledBanner>
  );
};
export default Banner;