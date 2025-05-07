import './App.css';
import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { Element } from 'react-scroll';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Home isMobile={isMobile} />

      <Element name="about"><About /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="education"><Education /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </>
  );
}

export default App;
