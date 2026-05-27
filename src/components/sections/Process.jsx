import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';
import processImg from '../../assets/site.jpeg';

const steps = [
  {
    number: '01',
    title: 'Site Assessment & Diagnosis',
    duration: '1–2 Days',
    description:
      'We visit your site to diagnose existing surface conditions, identify problem areas, assess environmental factors, and understand the full scope of your project.',
  },
  {
    number: '02',
    title: 'Client Requirement Review',
    duration: '1 Day',
    description:
      'We sit with you to understand your aesthetic preferences, functional requirements, budget constraints, and project timeline to develop a tailored solution.',
  },
  {
    number: '03',
    title: 'Surface Preparation',
    duration: 'Varies by scope',
    description:
      'Our team carefully prepares all surfaces — cleaning, repairing, filling, sanding, and priming — to ensure perfect adhesion and a flawless base for paint.',
  },
  {
    number: '04',
    title: 'Material Selection & Quality Checks',
    duration: '1–3 Days',
    description:
      'We select and procure specification-appropriate products, verify quality, calculate quantities precisely, and ensure everything is ready before painting begins.',
  },
  {
    number: '05',
    title: 'Execution & Supervision',
    duration: 'Project Dependent',
    description:
      'Skilled painters execute the work under direct supervision. We monitor every coat, every surface, and every detail throughout the entire painting process.',
  },
  {
    number: '06',
    title: 'Inspection & Handover',
    duration: '1 Day',
    description:
      'We conduct a comprehensive final inspection before handover. Any defects are corrected, surfaces are validated, and you receive a quality assurance report.',
  },
];

function StepCard({ step, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '1rem',
        padding: 'clamp(1.25rem, 4vw, 1.75rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: '0 1px 8px rgba(30,30,28,0.05)',
        transition: 'box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(30,30,28,0.11)' }}
    >
      {/* Accent corner stripe */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '100%',
          background: 'var(--accent)',
          borderRadius: '1rem 0 0 1rem',
        }}
      />

      {/* Number + duration row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '0.5rem',
        }}
      >
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
          {step.number}
        </span>

        {/* Duration badge */}
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
            borderRadius: '999px',
            padding: '0.25rem 0.7rem',
            whiteSpace: 'nowrap',
            marginTop: '0.35rem',
            flexShrink: 0,
          }}
        >
          {step.duration}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
        }}
      >
        {step.title}
      </h3>

      {/* Divider */}
      <div
        style={{
          width: '2rem',
          height: '1.5px',
          background: 'var(--accent)',
          opacity: 0.45,
          borderRadius: '2px',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
        }}
      >
        {step.description}
      </p>
    </motion.article>
  );
}

export default function Process() {
  return (
    <section
      id="process"
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
              <span className="overline">How We Work</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Our Process
            </h2>
          </motion.div>

          <motion.p
            className="body-editorial"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
            style={{ maxWidth: '480px' }}
          >
            Every project follows a structured, repeatable process that ensures consistent quality — from the first assessment to the final handover. No guesswork. No shortcuts.
          </motion.p>
        </motion.div>

        {/* ── Image + Cards layout ───────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'start',
          }}
        >
          {/* Left: sticky image panel */}
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
              minHeight: '260px',
              maxHeight: '560px',
              border: '1px solid var(--border)',
            }}
          >
            <img
              src={processImg}
              alt="Ambience Vista team at work"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            {/* Caption overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem 1.5rem 1.5rem',
                background: 'linear-gradient(transparent, rgba(20,18,16,0.82))',
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                  color: '#fff',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.3,
                }}
              >
                Precision at every step.
              </p>
            </div>
          </motion.div>

          {/* Right: 2-column step cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
              gap: 'clamp(0.75rem, 2.5vw, 1.25rem)',
            }}
          >
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
