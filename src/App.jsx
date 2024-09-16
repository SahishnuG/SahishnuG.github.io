import About from './components/About'
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';
import ThreeScene from './components/ThreeScene';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Socials />
      <Contact />
      <ThreeScene />
      <Footer />
    </div>
  );
}

export default App;
