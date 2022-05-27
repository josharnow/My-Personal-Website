import styled from 'styled-components/macro';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import Banner from '../components/Banner';
import SideBar from '../components/SideBar';
// import About from '../components/About';
import { StyledMain } from '../styles';

export default function Main() {

  return (
    <>
      <NavBar />
      {/* <Banner /> */}
      <SideBar />
      <StyledMain>
        <Welcome />
      </StyledMain>
    </>
  )
}
// export default Main;