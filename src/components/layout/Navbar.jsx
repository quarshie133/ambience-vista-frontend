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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-blur' : 'bg-transparent'}`}
        style={{ borderBottom: scrolled ? '1px solid var(--border)' : '1px solid rgba(255,255,255,0.08)', background: scrolled ? 'rgba(245,243,239,0.92)' : 'transparent' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between" style={{ height: '72px' }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="Ambience Vista"
                style={{
                  height: '36px',
                  width: 'auto',
                  filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                  transition: 'filter 0.4s ease',
                }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="overline transition-colors duration-300"
                    style={{
                      color: active
                        ? (scrolled ? 'var(--accent)' : '#fff')
                        : (scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.72)'),
                      textDecoration: 'none',
                      borderBottom: active ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                      paddingBottom: '2px',
                      transition: 'color 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.color = scrolled ? 'var(--text-primary)' : '#fff'; }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.color = scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.72)'; }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={scrolled ? 'btn-ghost' : 'btn-ghost-white'}
                style={{ padding: '0.625rem 1.5rem', fontSize: '0.68rem' }}
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-80 flex flex-col"
              style={{ background: 'var(--bg-primary)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-8 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
                <img src={logo} alt="Ambience Vista" style={{ height: '30px', width: 'auto' }} />
                <button onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-8 py-8 gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        className="font-display"
                        style={{
                          fontSize: '1.5rem',
                          fontStyle: 'italic',
                          fontWeight: 300,
                          color: active ? 'var(--accent)' : 'var(--text-primary)',
                          textDecoration: 'none',
                          padding: '0.75rem 0',
                          borderBottom: '1px solid var(--border)',
                          display: 'block',
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-8 pb-10">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
