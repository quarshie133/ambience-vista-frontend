import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';
import { GraduationCap, Users, Briefcase } from 'lucide-react';

const impacts = [
  {
    stat: 'SDG 4',
    icon: GraduationCap,
    label: 'Quality Education',
    color: '#E8724A',
    desc: 'Providing structured technical training and internship programmes for youth entering the painting trade — building industry-ready professionals.',
  },
  {
    stat: 'SDG 5',
    icon: Users,
    label: 'Gender Equality',
    color: '#C85A8A',
    desc: 'Our Women in Colour Initiative creates dedicated pathways for women to build careers in the painting industry and achieve financial independence.',
  },
  {
    stat: 'SDG 8',
    icon: Briefcase,
    label: 'Decent Work & Growth',
    color: '#2E8B57',
    desc: 'Creating formal employment, fair wages, and professional development opportunities in a sector that has historically operated informally.',
  },
];

const initiatives = [
  { number: '50+',  label: 'Interns Trained',         desc: 'Young professionals placed and mentored through structured internship programmes.' },
  { number: '12+',  label: 'Women in Colour Members', desc: 'Women trained, certified, and employed through our gender inclusion initiative.' },
  { number: '20+',  label: 'Industry Seminars',       desc: 'Training events delivered in partnership with IDDG and industry stakeholders.' },
  { number: '3+',   label: 'SDGs Addressed',          desc: 'Measurable contributions to the UN Sustainable Development Goals.' },
];

export default function Impact() {
  return (
    <section id="impact" className="section-padding" style={{ background: '#fff' }}>
      <div className="container-site">

        {/* ── Section Header ───────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            className="lg:col-span-6"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className="overline-row mb-6">
              <span className="overline">Industry Contribution</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Beyond Paint
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex items-end"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            <p className="body-editorial">
              Ambience Vista is committed to building a stronger, more inclusive, and more professional painting industry in Ghana — aligned with the UN Sustainable Development Goals.
            </p>
          </motion.div>
        </motion.div>

        {/* ── SDG Cards ────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {impacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                style={{
                  background: 'var(--bg-primary)',
                  borderRadius: '2px',
                  padding: '2.5rem',
                  borderTop: `3px solid ${item.color}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* SDG badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: item.color,
                      color: '#fff',
                      padding: '0.35rem 0.875rem',
                      borderRadius: '2px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.stat}
                  </div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: `${item.color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={19} style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Label */}
                <p
                  className="font-display"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                  }}
                >
                  {item.label}
                </p>

                {/* Divider */}
                <div style={{ width: '2rem', height: '2px', background: item.color, marginBottom: '1rem', borderRadius: '1px' }} />

                {/* Description */}
                <p className="body-editorial">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Stats Grid ───────────────────────────────────────────────── */}
        <div
          style={{
            background: 'var(--bg-dark)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '3rem',
          }}
        >
          <motion.p
            className="overline"
            style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Programme Statistics
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.55 }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                    fontWeight: 300,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.number}
                </p>
                <div style={{ width: '1.5rem', height: '1px', background: 'var(--accent)', marginBottom: '0.75rem' }} />
                <p className="overline" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.625rem' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── IDDG Partnership banner ──────────────────────────────────── */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.5rem',
            padding: '2rem 2.5rem',
            background: 'var(--bg-primary)',
            borderLeft: '3px solid var(--accent)',
          }}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div style={{ flexShrink: 0 }}>
            <p className="overline" style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>Partner</p>
            <p
              className="font-display"
              style={{ fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1 }}
            >
              IDDG
            </p>
          </div>
          <div style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch', flexShrink: 0 }} />
          <p className="body-editorial" style={{ flex: 1 }}>
            In collaboration with <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>IDDG</strong> — the Industry Development &amp; Governance Group — we continue to advocate for formal standards, certification pathways, and best-practice adoption across Ghana's painting industry.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
