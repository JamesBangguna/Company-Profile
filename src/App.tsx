import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustedBrands from './components/sections/TrustedBrands';
import { Stats } from './components/sections/Stats';
import Process from './components/sections/Process';
import { Solutions } from './components/sections/Solution';
import { Portfolio } from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import { Industries } from './components/sections/Industries';
import FAQ from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

function App() {
  const [darkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='bg-white dark:bg-gray-900 transition-colors duration-300 pt-[24px]'>
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <Hero />
        <TrustedBrands />
        <Stats />
        <Process />
        <Solutions />
        <Industries />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
