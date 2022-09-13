import styled from 'styled-components/macro';

const StyledSection = styled.section`
  ${'' /* padding: 4em; */}
  ${'' /* width: fit-content; */}
  margin: 0;

  background-color: rgba(0, 0, 0, 0.5);

  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3));

  ${'' /* backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);*/}

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.50);
  ${'' /* box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%); */}
  ${'' /* background-color: rgb(154 162 245 / 60%);
  ${'' /* background-color: rgba(154 162 245 / 60%); */}
  


  ${'' /* background: papayawhip; */}
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
export default StyledSection;