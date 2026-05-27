import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { staggerContainer, defaultViewport } from '../../lib/animations';

// ── Existing images ──────────────────────────────────────────────────────────
import gallery1  from '../../assets/before_after image.jpeg';
import gallery2  from '../../assets/painting.jpeg';
import gallery3  from '../../assets/team.jpeg';
import gallery4  from '../../assets/room.jpeg';
import gallery5  from '../../assets/roller technique training.jpeg';
import gallery6  from '../../assets/painting_image.jpeg';
import gallery7  from '../../assets/building.jpeg';
import gallery8  from '../../assets/workshop_seminar1.jpeg';

// ── New images ───────────────────────────────────────────────────────────────
import gallery9  from '../../assets/image1.jpeg';
import gallery10 from '../../assets/image2.jpeg';
import gallery11 from '../../assets/Team3.jpeg';
import gallery12 from '../../assets/workshop_seminar2.jpeg';
import gallery13 from '../../assets/workshop_seminar3.jpeg';
import gallery14 from '../../assets/IMG_0281.JPG';
import gallery15 from '../../assets/9b5fd63e-c960-4afe-9bc9-0d2bfebb83e1.jpg';
import gallery16 from '../../assets/cec9d982-7bce-4a33-8e0c-a95643d0459a.jpg';
import gallery17 from '../../assets/d23e6591-ed6c-4f9f-a2fa-ba543fe736d0.jpg';

const galleryImages = [
  {
    id: 1, src: gallery1, category: 'process',
    title: 'Exterior Restoration',
    alt: 'Before and after transformation — premium exterior painting project',
    description: 'Full surface diagnosis, scraping, and application of premium weather-guard coating.',
  },
  {
    id: 2, src: gallery2, category: 'process',
    title: 'Precision Application',
    alt: 'Professional paint application on interior wall surface',
    description: 'Meticulous application ensuring even thickness, seamless coats, and clean borders.',
  },
  {
    id: 3, src: gallery3, category: 'team',
    title: 'On-Site Supervision',
    alt: 'Ambience Vista team executing professional on-site painting',
    description: 'Our trained crew executing structured painting protocols under rigorous QA supervision.',
  },
  {
    id: 4, src: gallery4, category: 'residential',
    title: 'Sophisticated Interiors',
    alt: 'Residential bedroom with flawless premium paint finish',
    description: 'Flawless finishes in modern residences, using curated palettes and low-VOC paints.',
  },
  {
    id: 5, src: gallery5, category: 'process',
    title: 'Capacity Building',
    alt: 'Roller technique training at professional development seminar',
    description: 'Continuous technical training for local artisans on advanced rollers and brushes.',
  },
  {
    id: 6, src: gallery6, category: 'detail',
    title: 'Textural Details',
    alt: 'Close-up of smooth plastering and premium paint texture',
    description: 'Perfect corner cuts, seamless drywall transitions, and flawless gloss inspections.',
  },
  {
    id: 7, src: gallery7, category: 'commercial',
    title: 'Commercial Facades',
    alt: 'Large-scale commercial building painted professionally',
    description: 'Large-scale coatings and exterior painting for commercial developments.',
  },
  {
    id: 8, src: gallery8, category: 'team',
    title: 'Professional Workshops',
    alt: 'Hands-on painting workshop and capacity building seminar',
    description: 'Raising industry standards through structured, hands-on training seminars.',
  },
  {
    id: 9, src: gallery9, category: 'residential',
    title: 'Interior Craftsmanship',
    alt: 'Premium interior painting with clean finish',
    description: 'Every surface treated with care — from plaster repair to the final coat.',
  },
  {
    id: 10, src: gallery10, category: 'detail',
    title: 'Surface Excellence',
    alt: 'Detailed view of smooth finished wall surface',
    description: 'Impeccable surface prep is what makes our finishes last years longer.',
  },
  {
    id: 11, src: gallery11, category: 'team',
    title: 'Our Professionals',
    alt: 'Ambience Vista team members in uniform on site',
    description: 'A dedicated team of trained painters committed to quality at every step.',
  },
  {
    id: 12, src: gallery12, category: 'team',
    title: 'Training in Action',
    alt: 'Workshop seminar with painting professionals',
    description: 'Interactive learning sessions that keep our team ahead of industry standards.',
  },
  {
    id: 13, src: gallery13, category: 'team',
    title: 'Skills Development',
    alt: 'Team learning advanced painting techniques at seminar',
    description: 'Continuous professional development ensuring every project meets our high standards.',
  },
  {
    id: 14, src: gallery14, category: 'process',
    title: 'Site Preparation',
    alt: 'Professional site preparation before painting begins',
    description: 'Thorough surface assessment and preparation before any brush touches a wall.',
  },
  {
    id: 15, src: gallery15, category: 'detail',
    title: 'Quality Finish',
    alt: 'Detailed quality-checked paint finish',
    description: 'Every coat inspected under natural and artificial light before client handover.',
  },
  {
    id: 16, src: gallery16, category: 'process',
    title: 'Application Mastery',
    alt: 'Professional painting application in progress',
    description: 'Skilled painters maintaining consistent coats and clean lines across every surface.',
  },
  {
    id: 17, src: gallery17, category: 'commercial',
    title: 'Commercial Excellence',
    alt: 'Completed commercial painting project exterior',
    description: 'Professional coatings that protect, last, and reflect the brand they represent.',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Process', 'Detail', 'Team'];

// ── GalleryCard ──────────────────────────────────────────────────────────────
function GalleryCard({ img, index, onClick }) {
  // Only eagerly load the first 6 images; rest are lazy
  const loadingAttr = index < 6 ? 'eager' : 'lazy';
  const fetchPriority = index < 3 ? 'high' : 'auto';

  return (
    <motion.div
      layout
      key={img.id}
      className="flex flex-col cursor-pointer group"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.32) }}
      onClick={onClick}
      style={{ willChange: 'transform' }}
    >
      {/* Image wrapper */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0.875rem',
          aspectRatio: '4/3',
          border: '1px solid var(--border)',
          marginBottom: '0.875rem',
          background: 'var(--bg-surface)',
        }}
      >
        <img
          src={img.src}
          alt={img.alt}
          loading={loadingAttr}
          decoding="async"
          fetchpriority={fetchPriority}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            transition: 'transform 0.65s cubic-bezier(0.22,1,0.36,1)',
          }}
          className="group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(240,120,64,0.12)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="group-hover:opacity-100"
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '50%',
              background: 'rgba(30,30,28,0.82)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
            }}
          >
            <ZoomIn size={17} color="#fff" strokeWidth={1.5} />
          </div>
        </div>

        {/* Category badge — bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.75rem',
            background: 'rgba(20,18,16,0.75)',
            backdropFilter: 'blur(6px)',
            borderRadius: '999px',
            padding: '0.25rem 0.75rem',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span
            style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            {img.category}
          </span>
        </div>
      </div>

      {/* Text below image */}
      <div style={{ padding: '0 0.25rem' }}>
        <h3
          className="font-display"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '0.45rem',
            transition: 'color 0.3s',
          }}
        >
          {img.title}
        </h3>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
          }}
        >
          {img.description}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Gallery ─────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length),
    [filtered.length],
  );
  const nextImage = useCallback(
    () => setLightboxIndex(i => (i + 1) % filtered.length),
    [filtered.length],
  );

  return (
    <section
      id="gallery"
      style={{
        background: 'var(--bg-surface)',
        padding: 'clamp(4rem, 10vw, 7rem) 0',
      }}
    >
      <div className="container-site">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          {/* Overline + heading */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            style={{ marginBottom: 'clamp(1.25rem, 3vw, 2rem)' }}
          >
            <div className="overline-row" style={{ marginBottom: '1rem' }}>
              <span className="overline">Our Work</span>
            </div>
            <h2
              className="text-editorial-xl"
              style={{ color: 'var(--text-primary)', maxWidth: '540px' }}
            >
              Project Highlights
            </h2>
          </motion.div>

          {/* Subtitle + filter tabs — side by side on desktop, stacked on mobile */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.65, delay: 0.15 } } }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.25rem 3rem',
            }}
          >
            <p
              className="body-editorial"
              style={{ maxWidth: '420px', color: 'var(--text-secondary)' }}
            >
              A curated selection of our residential, commercial, and training projects.
              Click any image to view it in full.
            </p>

            {/* Filter tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.25rem',
                alignItems: 'center',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding: '0.45rem 1rem',
                    borderRadius: '999px',
                    border: '1px solid',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                    borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border-dark)',
                    color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Image count badge ────────────────────────────────────────────── */}
        <div
          style={{
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div style={{ width: '1.5rem', height: '1px', background: 'var(--accent)' }} />
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
            }}
          >
            {filtered.length} {filtered.length === 1 ? 'image' : 'images'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </span>
        </div>

        {/* ── Card grid ────────────────────────────────────────────────────── */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <GalleryCard
                key={img.id}
                img={img}
                index={index}
                onClick={() => openLightbox(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(14,12,10,0.96)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              aria-label="Close"
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={17} color="#fff" strokeWidth={1.5} />
            </button>

            {/* Prev */}
            <button
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: 'absolute',
                left: '1rem',
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <ChevronLeft size={20} color="#fff" strokeWidth={1.5} />
            </button>

            {/* Image */}
            <motion.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
                maxWidth: '1100px',
                width: '100%',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.alt}
                decoding="async"
                style={{
                  maxHeight: '78vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '0.75rem',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                }}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
              />

              {/* Caption */}
              <div style={{ textAlign: 'center', padding: '0 1rem' }}>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#fff',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    marginBottom: '0.35rem',
                  }}
                >
                  {filtered[lightboxIndex]?.title}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: 'absolute',
                right: '1rem',
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <ChevronRight size={20} color="#fff" strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
