import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const navLinks = [
  { label: 'About',   to: '/about'   },
  { label: 'Services', to: '/services' },
  { label: 'Process',  to: '/process'  },
  { label: 'Gallery',  to: '/gallery'  },
  { label: 'Impact',   to: '/impact'   },
  { label: 'Contact',  to: '/contact'  },
];

const serviceLinks = [
  'Paint Advisory',
  'Residential Painting',
  'Commercial Painting',
  'Project Support',
  'Surface Preparation',
  'Site Assessment',
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'rgba(255,255,255,0.55)' }}>

      {/* ── Main grid ─────────────────────────────────────────────────────────── */}
      <div
        className="container-site"
        style={{ paddingTop: 'clamp(3rem,8vw,5rem)', paddingBottom: 'clamp(2.5rem,6vw,4rem)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: 'clamp(2rem,5vw,3rem)',
            alignItems: 'start',
          }}
        >

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Ambience Vista"
              style={{
                height: '36px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.9,
                marginBottom: '1.25rem',
              }}
            />
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: 1.85,
                maxWidth: '280px',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Professional painting services built on structure, supervision, and quality control.
              Serving Greater Accra and across Ghana.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { label: 'Instagram', href: '#', icon: Instagram },
                { label: 'Facebook',  href: '#', icon: Facebook  },
                { label: 'LinkedIn',  href: '#', icon: Linkedin  },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    color: 'rgba(255,255,255,0.32)',
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.32)')}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p
              className="overline"
              style={{ color: 'rgba(255,255,255,0.28)', marginBottom: '1.25rem' }}
            >
              Pages
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.48)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.48)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              className="overline"
              style={{ color: 'rgba(255,255,255,0.28)', marginBottom: '1.25rem' }}
            >
              Services
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.48)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.48)')}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="overline"
              style={{ color: 'rgba(255,255,255,0.28)', marginBottom: '1.25rem' }}
            >
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Phone,  text: '+233 55 000 0000',       href: 'tel:+233550000000' },
                { icon: Mail,   text: 'info@ambiencevista.com', href: 'mailto:info@ambiencevista.com' },
                { icon: MapPin, text: 'Greater Accra, Ghana',   href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.48)',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    lineHeight: 1.5,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.48)')}
                >
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    style={{ flexShrink: 0, marginTop: '3px', color: 'var(--accent)' }}
                  />
                  {text}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <div style={{ marginTop: '1.75rem' }}>
              <Link
                to="/contact"
                className="btn-ghost-white"
                style={{ padding: '0.7rem 1.5rem', fontSize: '0.68rem', display: 'inline-block' }}
              >
                Request an Assessment
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="container-site"
          style={{
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} Ambience Vista. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.28)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
