import { useState, useEffect } from 'react';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Hero from './component/section/Hero';
import TrustedBrands from './component/section/TrustedBrands';
import { Stats } from './component/section/Stats';
import Process from './component/section/Process';
import { Solutions } from './component/section/Solution';
import { Portfolio } from './component/section/Portfolio';
import Testimonials from './component/section/Testimonials';
import { Industries } from './component/section/industries';
import FAQ from './component/section/FAQ';
import { Contact } from './component/section/Contact';

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
