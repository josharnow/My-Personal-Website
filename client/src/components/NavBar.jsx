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
  margin: 0 0.5vw;
  padding: 0;
  text-align: center;
  ${'' /* width: 25vw; */}
  ${'' /* height: 100%; */}
  ${'' /* height: 10vh; */}
  align-self: center;
  font-size: 4vmin;
  ${'' /* font-size: 4vw; */}
  ${'' /* height: 100%; */}
  ${'' /* max-height: 10vh; */}
  ${'' /* max-width: 25vh; */}
`;

const NavBar = () => {

  return (
    <StyledFullHeader>
      <StyledHeading>
        <StyledPopText>
          Josh's Personal Site
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