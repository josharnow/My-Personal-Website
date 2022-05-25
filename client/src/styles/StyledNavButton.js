import styled from 'styled-components/macro';
import variables from './variables';

const StyledNavButton = styled.button`
  ${variables};
  
  align-self: center;
  ${'' /* padding: 2vw; */}
  ${'' /* margin: 1vh 1vw 1vh 1vw; */}
  font-family: var(--font);
  background-color: rgba(41,41,41,0.75);
  ${'' /* background-color: rgba(255,0,0,0.5); */}
  ${'' /* background-color: #292929; */}
  color: #fcfcfc;
  height: 100%;
  width: 18.75vw;
  ${'' /* width: fit-content; */}
  ${'' /* height: 100%; */}
  ${'' /* height: fit-content; */}

  &:hover {
    background: #ddd;
    color: black;
  }

  ${'' /* position: absolute;
  top: 0;
  right: var(--spacing-md);
  z-index: 1;

  @media (min-width: 768px) {
    right: var(--spacing-xxl);
  }

  &:after {
    content: '';
    top: 15px;
    right: var(--spacing-sm);
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--white);
  }

  select {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${props => props.active ? 'rgba(255,255,255,0.1)' : 'transparent'};
    color: white;
    border: 0;
    border-radius: var(--border-radius-subtle);
    font-size: var(--fz-sm);
    font-family: inherit;
    padding: var(--spacing-xs) var(--spacing-xl) var(--spacing-xs) var(--spacing-sm);
  } */}
`;
export default StyledNavButton;