import './App.css'
import { useEffect, useState } from 'react';
import { Home } from './pages/Home';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Home isMobile={isMobile} />
    </>
  )
}

export default App
