import { useEffect, useState } from 'react';
import { StyledBanner } from '../styles';
import styled from 'styled-components/macro';

const StyledHeading = styled.h4`
  color: #1f00eb;
  text-align: center;
  font-weight: bold;
  margin: 0;
  align-self: center;
`;

const Banner = () => {

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