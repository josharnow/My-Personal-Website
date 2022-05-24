import styled from 'styled-components/macro';
import variables from './variables';

const StyledBanner = styled.div`
  ${variables};

  display: flex;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 5vh;
  top: 10vh;
  ${'' /* top: 10vh; */}
  border-style: dashed;
  border-color: #eb1000;
  border-width: 3px;
  background-color: var(--yellow);
  ${'' /* border-radius: 5vh; */}
  ${'' /* height: 33%; */}
  ${'' /* height: 100%; */}
  ${'' /* height: 6vh; */}
  ${'' /* padding: 2vh; */}
`;
export default StyledBanner;