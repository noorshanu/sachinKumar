import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiUser } from 'react-icons/fi';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import { fadeUp } from '../lib/constants';
import { SITE } from '../lib/constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24 md:pt-28">
      <section className="bg-brand-cream py-16 md:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text-muted">
              Contact
            </p>
            <h1 className="mt-4 max-w-2xl text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-text md:text-[56px]">
              Let&apos;s <span className="text-brand-orange">Connect</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-text-secondary">
              Have a question about mentorship, the Bull100x Club, or partnerships? Send a message
              and we&apos;ll get back to you.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="rounded-[16px] border border-brand-orange/20 bg-brand-soft-orange p-8 text-center md:p-12">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white">
                    <FiMail className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-text">Message Sent!</h2>
                  <p className="mt-2 text-brand-text-secondary">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-[16px] border border-brand-text/5 bg-brand-cream p-6 md:p-8"
                >
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-brand-text"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-brand-text-muted" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full rounded-[10px] border border-brand-text/10 bg-white py-3 pr-4 pl-11 text-brand-text transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-brand-text"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <FiMail className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-brand-text-muted" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full rounded-[10px] border border-brand-text/10 bg-white py-3 pr-4 pl-11 text-brand-text transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-brand-text"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-[10px] border border-brand-text/10 bg-white px-4 py-3 text-brand-text transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button type="submit" icon={FiArrowRight}>
                      Let&apos;s Connect
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                <div className="rounded-[16px] border border-brand-text/5 p-6">
                  <h3 className="font-bold text-brand-text">Email</h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-2 block text-brand-orange transition-colors hover:text-brand-orange-bright"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div className="rounded-[16px] border border-brand-text/5 p-6">
                  <h3 className="font-bold text-brand-text">Mentorship</h3>
                  <p className="mt-2 text-sm text-brand-text-secondary">
                    Interested in 1-to-1 guidance or group programs? Mention your experience
                    level in your message.
                  </p>
                </div>
                <div className="rounded-[16px] border border-brand-text/5 p-6">
                  <h3 className="font-bold text-brand-text">Bull100x Club</h3>
                  <p className="mt-2 text-sm text-brand-text-secondary">
                    Ready to join the trading community? Ask about membership and current openings.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
