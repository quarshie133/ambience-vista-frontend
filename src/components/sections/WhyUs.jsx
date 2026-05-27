import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';
import whyUsImg from '../../assets/group_image.jpeg';

const reasons = [
  {
    number: '01',
    title: 'Structured Process',
    description:
      'Every project follows a rigorous methodology from site assessment through final inspection. No shortcuts, no compromises at any stage.',
  },
  {
    number: '02',
    title: 'Expert Supervision',
    description:
      'Experienced supervisors oversee every phase, ensuring consistent quality from surface preparation to the final coat.',
  },
  {
    number: '03',
    title: 'Quality Control',
    description:
      'Multi-stage quality checks and premium, specification-appropriate products — suited to each surface and environment.',
  },
  {
    number: '04',
    title: 'Client Education',
    description:
      'We help clients understand what to use, why, and how — building long-term relationships based on trust and transparency.',
  },
  {
    number: '05',
    title: 'Transparent Pricing',
    description:
      'Clear, detailed quotations with zero hidden costs. You know exactly what you are getting before a single brush stroke.',
  },
  {
    number: '06',
    title: 'Continuous Training',
    description:
      'Our team stays current with industry best practices, new formulations, and advanced application techniques through regular training.',
  },
];

function ReasonCard({ reason, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '0.875rem',
        padding: 'clamp(1.25rem, 4vw, 1.75rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: '0 1px 8px rgba(30,30,28,0.05)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      whileHover={{ y: -4, boxShadow: '0 6px 24px rgba(30,30,28,0.1)' }}
    >
      {/* Number */}
      <span
        className="font-display"
        style={{
          fontSize: 'clamp(2rem, 5vw, 2.75rem)',
          fontWeight: 300,
          color: 'var(--accent)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {reason.number}
      </span>

      {/* Title */}
      <h3
        style={{
          fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}
      >
        {reason.title}
      </h3>

      {/* Divider */}
      <div
        style={{
          width: '2rem',
          height: '1.5px',
          background: 'var(--accent)',
          borderRadius: '2px',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}
      >
        {reason.description}
      </p>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-padding"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="container-site">

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem 4rem',
            alignItems: 'end',
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
          }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className="overline-row mb-5">
              <span className="overline">The Ambience Difference</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Why Clients Choose Us
            </h2>
          </motion.div>

          <motion.p
            className="body-editorial"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
            style={{ maxWidth: '440px' }}
          >
            Six reasons our clients keep coming back — and send others our way.
          </motion.p>
        </motion.div>

        {/* ── Main layout: image left + card grid right ───────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'start',
          }}
        >
          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '1rem',
              aspectRatio: '3/4',
              minHeight: '280px',
              maxHeight: '600px',
              border: '1px solid var(--border)',
            }}
          >
            <img
              src={whyUsImg}
              alt="Ambience Vista professional team"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            {/* Overlay badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                background: 'var(--accent)',
                color: '#fff',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.5rem',
              }}
            >
              <p
                className="font-display"
                style={{ fontSize: '1.75rem', fontWeight: 300, lineHeight: 1 }}
              >
                6+
              </p>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginTop: '0.25rem',
                  opacity: 0.85,
                }}
              >
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
              gap: 'clamp(0.75rem, 2.5vw, 1.25rem)',
            }}
          >
            {reasons.map((r, i) => (
              <ReasonCard key={r.number} reason={r} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
