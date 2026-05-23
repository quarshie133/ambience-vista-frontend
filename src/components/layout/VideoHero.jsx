import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import paintingVideo from '../../assets/0_Paint_Painting.mp4';

/**
 * VideoHero — cinematic looping video banner using the local painting video.
 *
 * Props:
 *   label       – overline tag    e.g. "Our Story"
 *   title       – large heading   e.g. "About Us"
 *   description – subtitle line
 */
export default function VideoHero({ label, title, description }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.80; // slightly slowed for a cinematic feel
    v.play().catch(() => {
      // Autoplay blocked — first frame shown as poster
    });
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        height: 'clamp(420px, 65vh, 680px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        background: '#0f0d0a',
      }}
    >
      {/* Local video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src={paintingVideo} type="video/mp4" />
      </video>

      {/* Cinematic gradient overlay — light at top, heavy at bottom */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(10,8,6,0.28) 0%, rgba(10,8,6,0.50) 50%, rgba(10,8,6,0.90) 100%)',
        }}
      />

      {/* Side vignette for depth */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.40) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Text content — anchored to bottom-left */}
      <div
        className="container-site"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: 'clamp(2.5rem, 6vw, 5rem)',
          paddingTop: '100px',
          width: '100%',
        }}
      >
        {/* Overline */}
        <motion.p
          className="overline"
          style={{ color: 'var(--accent)', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {label}
        </motion.p>

        {/* Title */}
        <motion.h1
          className="text-editorial-hero"
          style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '820px', lineHeight: 1.0 }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.07 }}
        >
          {title}
        </motion.h1>

        {/* Accent line + description */}
        <motion.div
          style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '560px' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div style={{ width: '2.5rem', height: '1px', background: 'var(--accent)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, fontWeight: 300 }}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
