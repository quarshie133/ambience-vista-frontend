import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';

import procurementImg  from '../../assets/presentation.jpeg';
import residentialImg  from '../../assets/room.jpeg';
import commercialImg   from '../../assets/building.jpeg';
import projectImg      from '../../assets/site2.jpeg';
import prepImg         from '../../assets/before_after image.jpeg';
import advisoryImg     from '../../assets/site.jpeg';

const services = [
  {
    id: 1,
    number: '01',
    badge: 'Advisory',
    title: 'Paint Advisory & Procurement Support',
    description:
      'Expert guidance on the right paints, quantities, and procurement strategies to reduce waste and achieve optimal results. Stop guessing — let data and expertise drive every paint decision.',
    image: procurementImg,
  },
  {
    id: 2,
    number: '02',
    badge: 'Residential',
    title: 'Residential Painting',
    description:
      'Premium interior and exterior painting for homes of all sizes. Meticulous surface preparation, expert colour guidance, and a final inspection before handover — every time.',
    image: residentialImg,
  },
  {
    id: 3,
    number: '03',
    badge: 'Commercial',
    title: 'Commercial Painting',
    description:
      'Large-scale commercial painting with minimal operational disruption and strict quality control throughout. We work around your schedule so your business never misses a beat.',
    image: commercialImg,
  },
  {
    id: 4,
    number: '04',
    badge: 'Project Support',
    title: 'Project-Based Painting Support',
    description:
      'End-to-end painting supervision for construction projects, developers, and facility managers. Milestone inspections, subcontractor management, and detailed progress reports included.',
    image: projectImg,
  },
  {
    id: 5,
    number: '05',
    badge: 'Preparation',
    title: 'Surface Preparation & Finishing',
    description:
      'Scraping, sanding, crack filling, damp treatment, and priming. This foundational work is what separates durable finishes from short-lived ones — and it is a core competency we never skip.',
    image: prepImg,
  },
  {
    id: 6,
    number: '06',
    badge: 'Assessment',
    title: 'Site Assessment & Paint Advisory',
    description:
      'Early-stage professional assessments to identify surface conditions, flag problem areas, and guide decisions that prevent costly execution mistakes before a single brush is lifted.',
    image: advisoryImg,
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 12px rgba(30,30,28,0.06)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(30,30,28,0.12)' }}
    >
      {/* Card body */}
      <div style={{ padding: 'clamp(1.5rem, 5vw, 2rem)', flex: 1 }}>
        {/* Number */}
        <p
          className="font-display"
          style={{
            fontSize: 'clamp(3rem, 8vw, 4rem)',
            fontWeight: 300,
            color: 'var(--accent)',
            lineHeight: 1,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          {service.number}
        </p>

        {/* Title */}
        <h3
          style={{
            fontSize: 'clamp(1.05rem, 3vw, 1.3rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(0.82rem, 2.2vw, 0.9rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '1.25rem',
          }}
        >
          {service.description}
        </p>

        {/* Badge */}
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
            borderRadius: '999px',
            padding: '0.3rem 0.9rem',
          }}
        >
          {service.badge}
        </span>
      </div>

      {/* Image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            transition: 'transform 0.6s ease',
            display: 'block',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container-site">

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <motion.div
          className="mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem 4rem',
            alignItems: 'end',
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className="overline-row mb-5">
              <span className="overline">What We Do</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Our Services
            </h2>
          </motion.div>

          <motion.p
            className="body-editorial"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
            style={{ maxWidth: '480px' }}
          >
            From residential homes to large-scale commercial developments, we deliver structured, supervised painting solutions tailored to every project.
          </motion.p>
        </motion.div>

        {/* ── Card Grid ──────────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1rem, 3vw, 1.75rem)',
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
