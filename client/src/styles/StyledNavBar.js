import styled from 'styled-components/macro';

const StyledNavBar = styled.nav`
  display: flex;
  ${'' /* height: 10vh; */}
  height: 100%;

  ${'' /* a {
    color: white;
    background-color: #292929;
    &:hover {
      background: #ddd;
      color: black;
    }
  } */}

  ${'' /* height: 10vh; */}

  ${'' /* overflow: hidden;
  position: fixed;
  top: 0;  */}
  ${'' /* justify-content: space-between; */}
  ${'' /* width: 100%; */}

  background-color: #82b0ff;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23282828' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E");

  

${'' /* background-color: #DFDBE5;
background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2392aca2' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E"); */}
`;
export default StyledNavBar;