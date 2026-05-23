import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/**
 * PageHero — top banner shown on every dedicated page.
 * Props:
 *   label       – small overline tag  (e.g. "Our Story")
 *   title       – large heading        (e.g. "About Us")
 *   description – subtitle paragraph
 */
export default function PageHero({ label, title, description }) {
  const location = useLocation();
  const segment = location.pathname.replace('/', '') || 'home';

  return (
    <section
      style={{
        paddingTop: '140px',
        paddingBottom: '72px',
        background: 'linear-gradient(160deg, var(--bg-dark) 0%, #1c1a16 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient circle */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,142,82,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="breadcrumb"
          className="flex items-center gap-2"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
          >
            Home
          </Link>
          <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--accent)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </span>
        </motion.nav>

        {/* Label tag */}
        <motion.p
          className="overline"
          style={{ color: 'var(--accent)', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {label}
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            maxWidth: '700px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '520px',
            lineHeight: 1.75,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
