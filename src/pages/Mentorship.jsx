import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import MentorshipCard from '../components/home/MentorshipCard';
import Button from '../components/common/Button';
import { mentorshipPrograms } from '../data/mentorship';
import { fadeUp } from '../lib/constants';
import { FiArrowRight } from 'react-icons/fi';

export default function MentorshipPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="bg-brand-cream py-16 md:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text-muted">
              Learn | Apply | Scale
            </p>
            <h1 className="mt-4 max-w-3xl text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-text md:text-[56px]">
              Mentorship <span className="text-brand-orange">Program</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-text-secondary">
              Choose the path that fits your goals   from structured online learning to immersive
              offline workshops and exclusive 1-to-1 guidance.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {mentorshipPrograms.map((program, i) => (
              <MentorshipCard key={program.id} program={program} index={i} />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 rounded-[16px] border border-brand-text/5 bg-brand-cream p-8 text-center md:p-12"
          >
            <h2 className="text-2xl font-extrabold text-brand-text md:text-3xl">
              Not sure which program is right for you?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-brand-text-secondary">
              Reach out and we&apos;ll help you find the best fit based on your experience level
              and trading goals.
            </p>
            <div className="mt-6">
              <Button href="/contact" icon={FiArrowRight}>
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
