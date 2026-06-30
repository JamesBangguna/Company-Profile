import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';

// 1. Tambahkan interface untuk mendefinisikan tipe props pada halaman Home
interface HomeProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

// 2. Terima props tersebut di dalam komponen Home
const Home = ({ darkMode, onToggleDarkMode }: HomeProps) => {
  return (
    <main>
      {/* 3. Oper props ke dalam Navbar */}
      <Navbar darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />

      <Hero />

      <Testimonials />

      <Footer />
    </main>
  );
};

export default Home;
