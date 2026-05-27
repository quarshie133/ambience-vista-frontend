import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero_section_new.jpg';

export default function Hero() {

  return (
    <section id="hero">
      <style dangerouslySetInnerHTML={{__html: `
        #hero {
          display: flex !important;
          flex-direction: column !important;
          min-height: 100vh !important;
          padding-top: 64px !important;
          background: #fff !important;
          position: relative !important;
          overflow: hidden !important;
        }

        .hero-building-wrap {
          flex: 1 !important;
          position: relative !important;
          min-height: 380px !important;
          overflow: hidden !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .hero-building-wrap img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center 40% !important;
          opacity: 0.22 !important;
          filter: grayscale(75%) contrast(0.75) brightness(1.15) !important;
          position: absolute !important;
          inset: 0 !important;
          pointer-events: none !important;
        }

        .hero-bottom-text {
          padding: 0 5% 4rem !important;
          flex-shrink: 0 !important;
          position: relative !important;
          z-index: 2 !important;
        }

        .hero-bottom-text .line-built-on {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: clamp(3rem, 7.5vw, 8.5rem);
          letter-spacing: -0.02em;
          line-height: 0.92;
          color: #2B3B6B;
          text-transform: uppercase;
        }

        .hero-bottom-text .line-process {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: clamp(3.2rem, 7.8vw, 9rem);
          letter-spacing: -0.02em;
          line-height: 0.92;
          color: #E8632A;
          text-transform: uppercase;
        }

        .hero-bottom-text .line-delivered-precision {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 6.2vw, 7rem);
          letter-spacing: -0.02em;
          line-height: 0.92;
          color: #2B3B6B;
          text-transform: uppercase;
        }

        .hero-sub-row {
          display: flex !important;
          align-items: center !important;
          gap: 2rem !important;
          margin-top: 2.5rem !important;
          flex-wrap: wrap !important;
        }

        .hero-sub-row p {
          font-family: 'DM Sans', sans-serif !important;
          font-weight: 300 !important;
          font-size: 1rem !important;
          line-height: 1.75 !important;
          color: #5C6370 !important;
          max-width: 480px !important;
          border-left: 3px solid #00B5C8 !important;
          padding-left: 1.25rem !important;
        }

        @media (max-width: 768px) {
          #hero {
            padding-top: 56px !important;
            min-height: auto !important;
          }
          .hero-building-wrap {
            min-height: 260px !important;
            order: 1 !important;
          }
          .hero-bottom-text {
            padding: 0 5% 3rem !important;
            order: 2 !important;
          }
          .hero-bottom-text .line-built-on,
          .hero-bottom-text .line-process,
          .hero-bottom-text .line-delivered-precision {
            font-size: clamp(2.2rem, 9vw, 4.5rem) !important;
          }
          .hero-sub-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
            margin-top: 2rem !important;
          }
          .hero-sub-row p {
            font-size: 0.93rem !important;
            max-width: 100% !important;
          }
          .hero-sub-row button {
            width: 100% !important;
            max-width: 320px !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 430px) {
          .hero-building-wrap {
            min-height: 200px !important;
          }
          .hero-bottom-text .line-built-on,
          .hero-bottom-text .line-process,
          .hero-bottom-text .line-delivered-precision {
            font-size: clamp(1.8rem, 10vw, 3.2rem) !important;
          }
        }
      `}} />

      {/* ── HERO BUILDING GHOST ── */}
      <div className="hero-building-wrap">
        <motion.img
          src={heroBg}
          alt="Ghosted background image of a modern building"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.22 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* BOTTOM: BUILT ON PROCESS. DELIVERED WITH PRECISION */}
      <div className="hero-bottom-text">
        <motion.span
          className="line-built-on"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          BUILT ON
        </motion.span>
        <motion.span
          className="line-process"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          PROCESS.
        </motion.span>
        <motion.span
          className="line-delivered-precision"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        >
          DELIVERED WITH PRECISION
        </motion.span>

        <motion.div
          className="hero-sub-row"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            Through structure, supervision, and quality control — we guide clients on what to use, how much to use, and how to achieve better results.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Request an Assessment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
