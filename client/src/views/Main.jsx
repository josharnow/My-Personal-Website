import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import About from '../components/About';

function Main() {

  return (
    <>
      <NavBar />
      <main className='bg-black'>
        <Welcome />
        <About />
      </main>
    </>
  )
}
export default Main;