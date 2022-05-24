import styled from 'styled-components/macro';
import variables from './variables';

const StyledBanner = styled.div`
  ${variables};

  display: flex;
  justify-content: center;
  border-style: dashed;
  border-color: #eb1000;
  border-width: 3px;
  background-color: var(--yellow);
  ${'' /* border-radius: 5vh; */}
  ${'' /* height: 33%; */}
  ${'' /* height: 100%; */}
  ${'' /* height: 6vh; */}
  ${'' /* padding: 2vh; */}
  width: 100%;
  position: fixed;
  top: 10vh;
`;
export default StyledBanner;