import styled from 'styled-components/macro';

const StyledNavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75vw;
  ${'' /* margin: 0; */}
  ${'' /* right: 0; */}
  ${'' /* padding: 0; */}

  ${'' /* background-color: #82b0ff;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23282828' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E"); */}

  ${'' /* height: 10%; */}
  ${'' /* padding: 100px; */}
  
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
export default StyledNavDiv;