import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import About from '../components/sections/About';
import VideoHero from '../components/layout/VideoHero';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Navbar />
      <main>
        <VideoHero
          label="Our Story"
          title="About Us"
          description="Discover the people, principles, and passion behind Ambience Vista."
        />
        <About />
      </main>
      <Footer />
    </>
  );
}
