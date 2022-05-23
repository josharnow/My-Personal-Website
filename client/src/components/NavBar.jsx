import { useEffect, useState } from 'react';
import { StyledNavBar, StyledNavButton, StyledNavDiv } from '../styles';
import styled from 'styled-components/macro';

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  width: 25vw;
  align-self: center;
  font-size: 4vw;
`;

const NavBar = () => {

  return (
    <StyledNavBar>
      <StyledHeading>
        Josh Arnow
      </StyledHeading>

      <StyledNavDiv>
        <StyledNavButton>
          Home
        </StyledNavButton>
        <StyledNavButton>
          About
        </StyledNavButton>
        <StyledNavButton>
          Portfolio
        </StyledNavButton>
        <StyledNavButton>
          Contact Me
        </StyledNavButton>
      </StyledNavDiv>
    </StyledNavBar>
  );
};
export default NavBar;