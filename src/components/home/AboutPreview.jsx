import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Container from '../layout/Container';
import Button from '../common/Button';
import { personImage } from '../../lib/images';
import { fadeUp, staggerContainer } from '../../lib/constants';
import { aboutFocus, aboutPreviewCopy, aboutRoles } from '../../data/about';

export default function AboutPreview() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0D0908] py-14 md:py-20 lg:py-24">
      {/* Soft brand glow — matches dark section rhythm */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-brand-orange/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-brand-orange/5 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-orange/35 to-transparent"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Portrait */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[420px] lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-brand-orange/25 via-transparent to-brand-orange/5"
              />
              {personImage && (
                <img
                  src={personImage}
                  alt="Sachin Kumar"
                  className="relative z-10 w-full object-contain object-bottom"
                  loading="lazy"
                />
              )}
              <div className="absolute -bottom-3 left-4 z-20 rounded-[12px] border border-white/10 bg-[#161210]/95 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <p className="text-[10px] font-bold tracking-[0.18em] text-brand-orange uppercase">
                  Author
                </p>
                <p className="mt-0.5 text-sm font-bold text-white">Memes to Millions</p>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                {aboutPreviewCopy.eyebrow}
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[44px] lg:text-[52px]"
            >
              {aboutPreviewCopy.title}{' '}
              <span className="text-brand-orange">{aboutPreviewCopy.highlight}</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
              {aboutRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-[8px] border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] font-semibold text-white/75"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 md:text-base"
            >
              {aboutPreviewCopy.lead}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/65 md:text-base"
            >
              {aboutPreviewCopy.body}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-6"
            >
              {aboutFocus.map((item) => (
                <span
                  key={item}
                  className="text-[12px] font-bold tracking-[0.08em] text-white/40 uppercase"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <Button href="/about" icon={FiArrowRight}>
                Read Full Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
