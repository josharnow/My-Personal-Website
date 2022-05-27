import { useEffect, useState } from 'react';
import { StyledNavBar, StyledNavButton, StyledNavDiv, StyledNavLink } from '../styles';
import styled from 'styled-components/macro';

const StyledFullHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100vw;
`;

const StyledHeadingDiv = styled.div`
  display: flex;
  width: 25vw;
  height: 100%;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  width: 100%;
  max-width: 25vw;
  max-height: 10vw;
  font-size: 4.0vmin;
  text-align: center;
  align-self: center;
  margin: 0;

  @import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
  font-family: 'Montserrat', sans-serif;

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #282828;
  text-shadow:
    0.16vw 0.16vh #345beb,
    0.32vw 0.32vh #000000;
`;

const NavBar = () => {

  return (
    <StyledFullHeader>
      <StyledHeadingDiv>
        <StyledHeading>
            Josh's Personal Site
        </StyledHeading>
      </StyledHeadingDiv>
      <StyledNavBar>
        <StyledNavDiv>
          <StyledNavLink style={{}}>
            Home
          </StyledNavLink>
          <StyledNavLink style={ { "borderLeft": "3px solid #181818" } }>
            About
          </StyledNavLink>
          <StyledNavLink style={{ "borderLeft": "3px solid #181818", "borderRight": "3px solid #181818" }}>
            Portfolio
          </StyledNavLink>
          <StyledNavLink style={{}}>
            Contact Me
          </StyledNavLink>
          
        </StyledNavDiv>
      </StyledNavBar>
    </StyledFullHeader>

  );
};
export default NavBar;