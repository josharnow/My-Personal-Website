import styled from 'styled-components/macro';

const StyledPopText = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
  font-family: 'Montserrat', sans-serif;

  ${'' /* position: absolute;
  top: 20%;
  left: 20%; */}

  ${'' /* align-self: center; */}
  text-align: center;
  ${'' /* color: black; */}
  transform: translate(-50%, -50%);
  ${'' /* font-size:1.0em; */}
  ${'' /* letter-spacing:0.1em; */}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  text-shadow: 
    2px 2px #345beb,
    4px 4px #000000;
`;
export default StyledPopText;