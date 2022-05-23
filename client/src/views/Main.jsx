import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import Banner from '../components/Banner';
import SideBar from '../components/SideBar';
// import About from '../components/About';

export default function Main() {

  return (
    <>
      <div className='' style={{ "overflow": "hidden", "position": "fixed", "top": "0", "height": "16vh" }}>
        <NavBar />
        <Banner />
      </div>
      <main className='d-flex' style={{ "width": "100%", "height": "84vh", "marginTop": "16vh" }}>
        <SideBar />
        <Welcome />
        {/* <About /> */}
      </main>
    </>
  )
}
// export default Main;