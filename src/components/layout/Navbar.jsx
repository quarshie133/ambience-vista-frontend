import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const navLinks = [
  { label: 'About',    to: '/about'    },
  { label: 'Services', to: '/services' },
  { label: 'Process',  to: '/process'  },
  { label: 'Gallery',  to: '/gallery'  },
  { label: 'Impact',   to: '/impact'   },
  { label: 'Contact',  to: '/contact'  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (to) => location.pathname === to;
  const isHome = location.pathname === '/';
  const showSolid = scrolled || isHome;

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <motion.header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 60,                       // above drawer (z-50)
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: showSolid
            ? '1px solid var(--border)'
            : '1px solid rgba(255,255,255,0.08)',
          background: showSolid
            ? 'rgba(245,243,239,0.96)'
            : 'transparent',
          backdropFilter: showSolid ? 'blur(12px)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-site" style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img
                src={logo}
                alt="Ambience Vista"
                style={{
                  height: '36px',
                  width: 'auto',
                  filter: showSolid ? 'none' : 'brightness(0) invert(1)',
                  transition: 'filter 0.4s ease',
                }}
              />
            </Link>

            {/* Desktop nav */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '2.25rem',
              }}
              className="lg-nav"
            >
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="overline"
                    style={{
                      color: active
                        ? (showSolid ? 'var(--accent)' : '#fff')
                        : (showSolid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.72)'),
                      textDecoration: 'none',
                      borderBottom: active ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                      paddingBottom: '2px',
                      transition: 'color 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={e => {
                      if (!active) e.currentTarget.style.color = showSolid ? 'var(--text-primary)' : '#fff';
                    }}
                    onMouseLeave={e => {
                      if (!active) e.currentTarget.style.color = showSolid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.72)';
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Desktop CTA */}
              <div className="lg-cta">
                <Link
                  to="/contact"
                  className={showSolid ? 'btn-ghost' : 'btn-ghost-white'}
                  style={{ padding: '0.625rem 1.5rem', fontSize: '0.68rem' }}
                >
                  Get in Touch
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                style={{
                  color: showSolid ? 'var(--text-primary)' : '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.375rem',
                  zIndex: 70,          // always on top
                  position: 'relative',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: 'flex' }}
                  >
                    {menuOpen
                      ? <X size={22} strokeWidth={1.5} />
                      : <Menu size={22} strokeWidth={1.5} />
                    }
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,           // below header (z-60) but above page
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop — clicking closes drawer */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(14,12,10,0.55)',
                backdropFilter: 'blur(2px)',
              }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(85vw, 340px)',
                background: 'var(--bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
                overflowY: 'auto',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* Drawer header — sits at top of panel, below the fixed navbar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 1.75rem',
                  height: '72px',           // matches navbar height exactly
                  borderBottom: '1px solid var(--border)',
                  flexShrink: 0,
                  background: 'var(--bg-primary)',
                }}
              >
                {/* Logo — NO white filter, show natural colours */}
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src={logo}
                    alt="Ambience Vista"
                    style={{
                      height: '30px',
                      width: 'auto',
                      filter: 'none',        // ← natural logo colour, not white
                      display: 'block',
                    }}
                  />
                </Link>

                {/* Close button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    color: 'var(--text-secondary)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '0.375rem',
                  }}
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Nav links */}
              <nav
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem 0',
                }}
              >
                {navLinks.map((link, i) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={link.to}
                        className="font-display"
                        style={{
                          display: 'block',
                          fontSize: 'clamp(1.4rem, 5vw, 1.75rem)',
                          fontStyle: 'italic',
                          fontWeight: 300,
                          color: active ? 'var(--accent)' : 'var(--text-primary)',
                          textDecoration: 'none',
                          padding: '1rem 1.75rem',
                          borderBottom: '1px solid var(--border)',
                          // Ensure the full width is tappable
                          width: '100%',
                          boxSizing: 'border-box',
                          WebkitTapHighlightColor: 'rgba(240,120,64,0.1)',
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <div
                style={{
                  padding: '1.5rem 1.75rem',
                  borderTop: '1px solid var(--border)',
                  flexShrink: 0,
                  background: 'var(--bg-primary)',
                }}
              >
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '0.9rem 1.5rem',
                    textAlign: 'center',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Inline responsive styles ─────────────────────────────────────────── */}
      <style>{`
        .lg-nav     { display: none !important; }
        .lg-cta     { display: none !important; }
        .mobile-menu-btn { display: flex !important; }

        @media (min-width: 1024px) {
          .lg-nav          { display: flex !important; }
          .lg-cta          { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
