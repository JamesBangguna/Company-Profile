import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import Hero from '../components/sections/Hero';

import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <main>
      <Navbar />

      <Hero />

      <Testimonials />

      <Footer />
    </main>
  );
};

export default Home;
