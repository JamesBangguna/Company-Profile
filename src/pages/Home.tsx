import Navbar from '../component/layout/Navbar';
import Footer from '../component/layout/Footer';

import Hero from '../component/section/Hero';
import Services from '../component/section/Services';
import Testimonials from '../component/section/Testimonials';

const Home = () => {
  return (
    <main>
      <Navbar />

      <Hero />

      <Services />

      <Testimonials />

      <Footer />
    </main>
  );
};

export default Home;
