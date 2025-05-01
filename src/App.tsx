import { useEffect, useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
      <Navbar isMobile={isMobile} />
    </>
  )
}

export default App
