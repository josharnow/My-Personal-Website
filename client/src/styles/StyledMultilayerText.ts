import styled from 'styled-components/macro';

const StyledMultilayerText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  color: #cf1b1b;
  font-size: 124px;
  letter-spacing: 8px;
  cursor: pointer;

  &:before {
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0;
    z-index: -1;
    transition: 1s;
  }

  &:after {
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0px;
    transition: 1s;
  }

  &:hover:before {
    top: 10px;
    left: 10px;
  }

  &:hover:after {
    top: -10px;
    left: -10px;
  }
`;
export default StyledMultilayerText;