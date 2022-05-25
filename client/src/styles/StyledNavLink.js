import styled from 'styled-components/macro';
import variables from './variables';

const StyledNavLink = styled.a`
  ${variables};
  
  align-self: center;
  font-family: var(--font);
  background-color: rgba(41,41,41,0.75);
  color: #fcfcfc;
  height: 100%;
  width: 18.75vw;

  ${'' /* border-right: 5px solid black;
  border-left: 5px solid black; */}
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    background: #ddd;
    color: black;
  }
`;
export default StyledNavLink;