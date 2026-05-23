import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Services from '../components/sections/Services';
import VideoHero from '../components/layout/VideoHero';

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Navbar />
      <main>
        <VideoHero
          label="What We Offer"
          title="Our Services"
          description="From residential touch-ups to large-scale commercial projects — we do it right, every time."
        />
        <Services />
      </main>
      <Footer />
    </>
  );
}
