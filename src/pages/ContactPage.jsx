import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import VideoHero from '../components/layout/VideoHero';
import {
  Phone, Mail, MapPin, Clock,
  Send, CheckCircle, AlertCircle,
  ArrowRight, MessageSquare, Calendar
} from 'lucide-react';
import { submitContact } from '../lib/api';

const services = [
  'Paint Advisory & Procurement Support',
  'Residential Painting',
  'Commercial Painting',
  'Project-Based Painting Support',
  'Surface Preparation & Finishing',
  'Site Assessment & Paint Advisory',
  'Other / General Enquiry',
];

const initialForm = { name: '', email: '', phone: '', service: '', message: '' };

const contactDetails = [
  { icon: Phone,  label: 'Call Us',       value: '+233 59 555 4461',       sub: 'Mon – Sat, 7am – 6pm',           href: 'tel:+233595554461'             },
  { icon: Mail,   label: 'Email Us',      value: 'paint@ambiencevista.com', sub: 'We reply within 1 business day', href: 'mailto:paint@ambiencevista.com' },
  { icon: MapPin, label: 'Find Us',       value: 'Greater Accra, Ghana',   sub: 'Serving all districts',          href: '#'                             },
  { icon: Clock,  label: 'Working Hours', value: 'Mon – Sat: 7am – 6pm',  sub: 'Closed on Sundays',              href: '#'                             },
];

const fieldStyle = {
  width: '100%', padding: '1rem 0', background: 'transparent',
  border: 'none', borderBottom: '1px solid rgba(30,30,28,0.15)',
  color: '#1E1E1C', fontSize: '0.9375rem',
  fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
  outline: 'none', transition: 'border-color 0.3s',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState('');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      // 1. Attempt to save to backend DB (fail silently / warning only so Web3Forms is not blocked)
      try {
        await submitContact(form);
      } catch (dbErr) {
        console.warn('Database contact log failed:', dbErr);
      }

      // 2. Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || 'General Enquiry',
          message: form.message,
          subject: `New Contact Submission from ${form.name}`,
          from_name: 'Ambience Vista Website',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        throw new Error(result.message || 'Failed to submit form to Web3Forms.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };
  const inputProps = (name) => ({
    style: { ...fieldStyle, borderBottomColor: focused === name ? 'var(--accent)' : 'rgba(30,30,28,0.15)' },
    onFocus: () => setFocused(name), onBlur: () => setFocused(''),
  });

  return (
    <>
      <Navbar />
      <main>
        <VideoHero label="Get in Touch" title="Let's Build Something" description="Tell us about your project and we'll get back to you within one business day." />

        {/* Info Cards */}
        <section style={{ background: 'var(--bg-dark)', padding: '0' }}>
          <div className="container-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {contactDetails.map(({ icon: Icon, label, value, sub, href }, i) => (
                <motion.a key={label} href={href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{ display: 'block', padding: '2.5rem 2rem', borderRight: i < contactDetails.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', textDecoration: 'none', transition: 'background 0.3s', cursor: href === '#' ? 'default' : 'pointer' }}
                  onMouseEnter={e => { if (href !== '#') e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(240,120,64,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={17} style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
                  </div>
                  <p className="overline" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>{label}</p>
                  <p style={{ fontSize: '0.9375rem', color: '#fff', fontWeight: 400, marginBottom: '0.25rem' }}>{value}</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{sub}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section style={{ background: 'var(--bg-primary)', padding: 'clamp(5rem,10vw,9rem) 0' }}>
          <div className="container-site">
            <div className="grid-contact" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.65fr)', gap: 'clamp(3rem,6vw,7rem)', alignItems: 'start' }}>
              <motion.aside initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
                <div className="overline-row" style={{ marginBottom: '1.5rem' }}><span className="overline">Start Here</span></div>
                <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Ready to Transform Your Space?</h2>
                <p className="body-editorial" style={{ marginBottom: '3rem' }}>Fill in the form and our team will reach out with a tailored plan for your project.</p>
                {[{ icon: MessageSquare, title: 'Send a Message', desc: 'Use the form to describe your project in detail.' }, { icon: Phone, title: 'Prefer a Call?', desc: 'Ring us directly on +233 59 555 4461.' }, { icon: Calendar, title: 'Book an Assessment', desc: 'We visit your site and advise you — free of charge.' }].map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--accent-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Icon size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 500, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{title}</p>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.35 }}
                  style={{ marginTop: '2.5rem', background: 'var(--bg-dark)', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                  <div aria-hidden style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,120,64,0.18) 0%, transparent 70%)' }} />
                  <p className="overline" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Free Service</p>
                  <p className="font-display" style={{ fontSize: '1.25rem', color: '#fff', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.4, marginBottom: '0.75rem' }}>Not sure where to start?</p>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Request a free on-site assessment — we'll visit your space and guide you to the right solution.</p>
                  <a href="tel:+233595554461" className="btn-ghost-white" style={{ padding: '0.75rem 1.5rem', fontSize: '0.68rem' }}>Call Us Now <ArrowRight size={13} /></a>
                </motion.div>
              </motion.aside>

              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
                {status === 'success' ? (
                  <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '480px', textAlign: 'center', padding: '3rem', background: 'var(--bg-surface)' }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--accent-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem' }}><CheckCircle size={28} style={{ color: 'var(--accent)' }} /></div>
                    <h3 className="font-display" style={{ fontSize: '2.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1rem' }}>Message Received!</h3>
                    <p className="body-editorial" style={{ marginBottom: '2rem', maxWidth: '360px' }}>Thank you for reaching out. Our team will be in touch within one business day.</p>
                    <button className="btn-ghost" onClick={() => setStatus(null)}>Send Another Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                      <p className="overline" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Project Enquiry</p>
                      <h3 className="font-display" style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.2 }}>Tell Us About Your Project</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                      <div><label className="overline" style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Full Name *</label><input id="c-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" {...inputProps('name')} /></div>
                      <div><label className="overline" style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email Address *</label><input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" {...inputProps('email')} /></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                      <div><label className="overline" style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Phone Number</label><input id="c-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+233 59 555 4461" {...inputProps('phone')} /></div>
                      <div><label className="overline" style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Service Needed</label><select id="c-service" name="service" value={form.service} onChange={handleChange} {...inputProps('service')} style={{ ...inputProps('service').style, cursor: 'pointer', appearance: 'none' }}><option value="">Select a service</option>{services.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                    </div>
                    <div style={{ marginBottom: '2.5rem' }}>
                      <label className="overline" style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Project Details *</label>
                      <textarea id="c-message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Describe your project — surface type, size, location, timeline..." {...inputProps('message')} style={{ ...inputProps('message').style, resize: 'none', lineHeight: 1.75 }} />
                    </div>
                    {status === 'error' && (<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.875rem 1rem', background: '#FEF2F2', color: '#DC2626', fontSize: '0.875rem' }}><AlertCircle size={15} /> {errorMsg}</div>)}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                      <button type="submit" id="contact-submit" className="btn-primary" disabled={status === 'loading'} style={{ padding: '1rem 2.5rem' }}>
                        {status === 'loading' ? (<><div style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />Sending…</>) : (<>Send Message <Send size={14} /></>)}
                      </button>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>We respond within 1 business day.</p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(3.5rem,7vw,6rem) 0' }}>
          <div className="container-site">
            <div className="grid-contact" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)', gap: '4rem', alignItems: 'center' }}>
              <div>
                <div className="overline-row" style={{ marginBottom: '1rem' }}><span className="overline">Location</span></div>
                <h3 className="font-display" style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '0.875rem', lineHeight: 1.2 }}>Based in Greater Accra</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>We serve clients across all districts of Greater Accra and take on select projects across Ghana.</p>
                <a href="https://maps.google.com/?q=Greater+Accra,+Ghana" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '0.75rem 1.75rem', fontSize: '0.68rem' }}>Open in Maps <ArrowRight size={13} /></a>
              </div>
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                <iframe title="Ambience Vista location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509693.9993248779!2d-0.5392282!3d5.5912595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2ad7a69%3A0xbed14ed8650e2dd3!2sGreater%20Accra%2C%20Ghana!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
