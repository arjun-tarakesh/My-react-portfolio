
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Herosection from './components/Herosection';
import About from './components/About'
import Skills from './components/skills'
import Certs from './components/certs'
import Projects from './components/projects'
import Contact from "./components/contact"
import Footer from './components/footer';
import Experience from './components/exp';
import Work from './components/work';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Herosection />
      <About />
      
      <Work />
      <Projects />
      {/* <Skills /> */}
      <Certs />
      
      

      
      <Contact />
      <Footer />
      

      {/* <footer className="footer"><a href="https://github.com/arjun-tarakesh" target="_blank">layout by arjun-t</a> </footer> */}

    </div>
  );
}

export default App;
