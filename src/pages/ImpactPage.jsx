import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Impact from '../components/sections/Impact';
import VideoHero from '../components/layout/VideoHero';

export default function ImpactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Navbar />
      <main>
        <VideoHero
          label="By the Numbers"
          title="Our Impact"
          description="Real results, satisfied clients, and a track record built one project at a time."
        />
        <Impact />
      </main>
      <Footer />
    </>
  );
}
