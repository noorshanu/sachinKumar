import { motion } from 'framer-motion';
import Container from '../layout/Container';
import TelegramCta from '../common/TelegramCta';
import MentorshipCard from './MentorshipCard';
import { mentorshipPrograms } from '../../data/mentorship';
import { fadeUp, staggerContainer } from '../../lib/constants';

export default function Mentorship() {
  return (
    <section id="mentorship" className="relative overflow-hidden bg-brand-cream py-12 md:py-16 lg:py-20">
      {/* Soft accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-brand-orange-glow) 35%, transparent) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Left */}
          <div className="max-w-xl">
            <motion.div variants={fadeUp} className="mb-3 flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                Learn | Apply | Scale
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-text md:text-[44px] lg:text-[48px]"
            >
              Mentorship <span className="text-brand-orange">Program</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-md text-sm leading-relaxed text-brand-text-secondary md:text-[15px]"
            >
              Structured guidance for every stage of your trading journey.
            </motion.p>
          </div>

          {/* Right */}
          <motion.div
            variants={fadeUp}
            className="flex max-w-md flex-col items-start gap-4 lg:items-end"
          >
            <p className="text-sm leading-relaxed text-brand-text-secondary md:text-[15px] lg:text-right">
              From online sessions to in-person meetups, get personalized
              <br className="hidden lg:block" />
              mentorship and practical strategies.
            </p>
            <TelegramCta size="md" iconPosition="right">
              Explore Mentorship
            </TelegramCta>
          </motion.div>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {mentorshipPrograms.map((program, i) => (
            <MentorshipCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
