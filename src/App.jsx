import About from './components/About'
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Socials from './components/Socials';
import ThreeScene from './components/ThreeScene';

function App() {
  localStorage.removeItem('theme')
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Socials />
      <ThreeScene />
      <Footer />
    </div>
  );
}

export default App;
