import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home        from './pages/Home';
import AboutPage   from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage  from './pages/ProcessPage';
import GalleryPage  from './pages/GalleryPage';
import ImpactPage   from './pages/ImpactPage';
import ContactPage  from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process"  element={<ProcessPage />} />
        <Route path="/gallery"  element={<GalleryPage />} />
        <Route path="/impact"   element={<ImpactPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
