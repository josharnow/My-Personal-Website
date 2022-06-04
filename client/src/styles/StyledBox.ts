import styled from 'styled-components/macro';

const StyledBox = styled.div`
  ${'' /* margin: 0; */}
  ${'' /* width: fit-content;
  height: fit-content; */}

-webkit-backdrop-filter: blur(20px);  /* Safari 9+ */
backdrop-filter: blur(20px); /* Chrome and Opera */
${'' /* box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%); */}
${'' /* background-color: rgb(154 162 245 / 60%); */}

  ${'' /* overflow: hidden;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3), inset 5px -5px 0px 5px rgba(200, 200, 200, 0.15), inset -2px -2px 0px 5px rgba(195, 195, 195, 0.15); */}

  ${'' /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); */}

  ${'' /* opacity: 1; */}

  ${'' /* backdrop-filter: blur(6px); */}
  ${'' /* background-color: blue; */}
  ${'' /* background: inherit;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(10px);
    background: inherit;
  } */}
`;
export default StyledBox;