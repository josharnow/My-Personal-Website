import styled from 'styled-components/macro';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import Banner from '../components/Banner';
import SideBar from '../components/SideBar';
// import About from '../components/About';

const StyledDiv = styled.div`
  ${'' /* overflow: hidden;
  position: fixed;
  top: 0;
  height: 16vh; */}
  ${'' /* height: 20vh; */}
`;

const StyledMain = styled.main`
  display: flex;
  width: 100%;
  height: 84vh;
  margin-top: 16vh;
`;

export default function Main() {

  return (
    <>
      <StyledDiv>
        <NavBar />
        <Banner />
      </StyledDiv>
      <StyledMain>

        <SideBar />
        <Welcome />
        {/* <About /> */}
      </StyledMain>
    </>
  )
}
// export default Main;