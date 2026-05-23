import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Gallery from '../components/sections/Gallery';
import VideoHero from '../components/layout/VideoHero';

export default function GalleryPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Navbar />
      <main>
        <VideoHero
          label="Portfolio"
          title="Our Gallery"
          description="A visual showcase of completed projects — from bold commercial spaces to refined residential finishes."
        />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
