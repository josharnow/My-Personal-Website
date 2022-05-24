import { useEffect, useState } from 'react';
import { StyledNavBar, StyledNavButton, StyledNavDiv, StyledPopText } from '../styles';
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

const StyledLabelSpan = styled.span`
  display: block;
  background-color: transparent;
  color: $button--color-1;
  padding: 1.5em 2em;
  transition: color 500ms ease,
        background-color 500ms ease;
  
  .button:hover &,
  .button:focus & {
    color: $button--color-2;
    background-color: rgba($button--color-1, 0.9);
  }
`;

const NavBar = () => {

  return (
    <StyledFullHeader>
      <StyledHeading>
        <StyledPopText>
          Josh Arnow
        </StyledPopText>
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