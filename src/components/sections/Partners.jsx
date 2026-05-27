import { motion } from 'framer-motion';
import { defaultViewport } from '../../lib/animations';

import coralLogo from '../../assets/logos/coral.png';
import duluxLogo from '../../assets/logos/Dulux.png';
import archXenusLogo from '../../assets/logos/arch_xenus_logo.jpeg';
import habikonLogo from '../../assets/logos/Habikon.png';
import sugruLogo from '../../assets/logos/Sugru.png';
import meldenLogo from '../../assets/logos/Melden_property.jpeg';

const partners = [
  { name: 'Coral Paints', logo: coralLogo },
  { name: 'Dulux', logo: duluxLogo },
  { name: 'Archxenus', logo: archXenusLogo },
  { name: 'Habikon', logo: habikonLogo },
  { name: 'Sugru', logo: sugruLogo },
  { name: 'Melden Property', logo: meldenLogo },
];

// Duplicated for seamless infinite marquee
const all = [...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  return (
    <section id="partners" className="section-padding-sm" style={{ background: 'var(--bg-surface)' }}>
      <div className="container-site mb-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            className="lg:col-span-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="overline-row mb-5">
              <span className="overline">Partners & Collaborations</span>
            </div>
            <h2 className="text-editorial-lg" style={{ color: 'var(--text-primary)' }}>
              Trusted Brands We Work With
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 lg:col-start-7 flex items-end"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } } }}
          >
            <p className="body-editorial">
              We work exclusively with reputable manufacturers and suppliers to ensure every product applied on your walls meets our exacting quality standards.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
        <div className="flex animate-marquee items-center" style={{ width: 'max-content' }}>
          {all.map((p, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                padding: '0 3.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                title={p.name}
                style={{
                  height: 'clamp(38px, 5.5vw, 48px)',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
