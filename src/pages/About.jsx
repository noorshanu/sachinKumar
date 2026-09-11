import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import BookCTA from '../components/home/BookCTA';
import { personImage } from '../lib/images';
import { fadeUp, staggerContainer } from '../lib/constants';
import {
  aboutFocus,
  aboutPageCopy,
  aboutRoles,
  aboutStats,
} from '../data/about';

export default function About() {
  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-[#F3F0EB] pt-20 md:pt-[72px]">
        {/* Cool layered background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,77,10,0.18) 1px, transparent 0)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(ellipse 70% 60% at 75% 40%, black 20%, transparent 75%)',
            }}
          />
          <div
            className="absolute -right-[12%] top-[8%] h-[520px] w-[520px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,176,138,0.55) 0%, rgba(255,77,10,0.08) 45%, transparent 70%)',
            }}
          />
          <div
            className="absolute -left-[8%] bottom-[-20%] h-[380px] w-[380px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,240,232,0.9) 0%, transparent 70%)',
            }}
          />
          <div className="absolute top-[18%] right-[18%] h-[280px] w-[280px] rounded-full border border-brand-orange/15 md:h-[360px] md:w-[360px]" />
          <div className="absolute top-[28%] right-[24%] h-[180px] w-[180px] rounded-full border border-brand-orange/10 md:h-[240px] md:w-[240px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-orange/25 to-transparent" />
        </div>

        <Container className="relative  pt-6  md:pt-8 llg:pt-8">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="mb-3 flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
                <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                  {aboutPageCopy.eyebrow}
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-[36px] font-extrabold leading-[1.02] tracking-[-0.04em] text-brand-text md:text-[48px] lg:text-[56px]"
              >
                {aboutPageCopy.headline}
                <br />
                <span className="text-brand-orange">{aboutPageCopy.headlineAccent}</span>
                <br />
                {aboutPageCopy.headlineEnd}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-text-secondary md:text-base"
              >
                {aboutPageCopy.intro}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
                {aboutRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-[8px] border border-brand-text/8 bg-white/80 px-3 py-1.5 text-[12px] font-semibold text-brand-text-secondary backdrop-blur-sm"
                  >
                    {role}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-end"
            >
              {personImage && (
                <img
                  src={personImage}
                  alt="Sachin Kumar   blockchain consultant and author"
                  className="relative z-10 w-full max-w-[360px] object-contain object-top xl:max-w-[400px]"
                />
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="border-y border-brand-text/8 bg-white">
        <Container>
          <div className="grid grid-cols-2 divide-brand-text/8 md:grid-cols-4 md:divide-x">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`px-4 py-8 md:px-6 ${i % 2 === 1 ? 'border-l border-brand-text/8 md:border-l-0' : ''}`}
              >
                <p className="text-2xl font-extrabold tracking-tight text-brand-orange md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-brand-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-white py-14 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                The Work
              </p>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-text md:text-[40px]">
                Markets. Technology.
                <br />
                <span className="text-brand-orange">Community.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-text-secondary">
                Where real adoption is built   not just announced.
              </p>

              <ul className="mt-8 space-y-3 border-t border-brand-text/8 pt-6">
                {aboutFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-brand-text"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 lg:col-span-8"
            >
              {aboutPageCopy.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 32)}
                  variants={fadeUp}
                  className="text-[16px] leading-[1.75] text-brand-text-secondary md:text-[17px]"
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.blockquote
                variants={fadeUp}
                className="relative mt-4 border-l-2 border-brand-orange bg-brand-cream/80 px-6 py-5"
              >
                <p className="font-serif text-[17px] leading-relaxed text-brand-text italic md:text-lg">
                  {aboutPageCopy.bookNote}
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Book CTA band */}
      <BookCTA id="about-book" />

      {/* Bottom CTA */}
      <section className="bg-brand-cream py-14 md:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[20px] border border-brand-text/8 bg-white p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-text md:text-3xl">
                Ready to go deeper?
              </h2>
              <p className="mt-2 max-w-lg text-sm text-brand-text-secondary md:text-base">
                Mentorship, Bull100x Club, or a conversation about strategy   pick the path that
                fits.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/#mentorship" icon={FiArrowRight}>
                Explore Mentorship
              </Button>
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
