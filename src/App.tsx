import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skill from './components/sections/Skills';
import Project from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;