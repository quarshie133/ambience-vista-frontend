import Navbar   from '../components/layout/Navbar';
import Footer   from '../components/layout/Footer';
import Hero     from '../components/sections/Hero';
import WhyUs    from '../components/sections/WhyUs';
import Partners from '../components/sections/Partners';
import CTA      from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
