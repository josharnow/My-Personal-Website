import { useEffect, useState } from 'react';
import { StyledNavBar, StyledNavButton, StyledNavDiv } from '../styles';
import styled from 'styled-components/macro';

const StyledFullHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 10vh;
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  width: 25vw;
  ${'' /* height: 100%; */}
  ${'' /* height: 10vh; */}
  align-self: center;
  font-size: 4vw;
`;

const NavBar = () => {

  return (
    <StyledFullHeader>
      <StyledHeading>
        Josh Arnow
      </StyledHeading>
      <StyledNavBar>
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
    </StyledFullHeader>

  );
};
export default NavBar;