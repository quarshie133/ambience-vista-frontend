import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Process from '../components/sections/Process';
import VideoHero from '../components/layout/VideoHero';

export default function ProcessPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Navbar />
      <main>
        <VideoHero
          label="How We Work"
          title="Our Process"
          description="A structured, step-by-step approach that ensures quality and clarity on every project."
        />
        <Process />
      </main>
      <Footer />
    </>
  );
}
