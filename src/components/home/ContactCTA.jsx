import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import Container from '../layout/Container';
import Button from '../common/Button';
import { fadeUp } from '../../lib/constants';

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-brand-orange) 0%, transparent 50%)`,
        }}
      />

      <Container className="relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
            <FiMail className="h-6 w-6" aria-hidden="true" />
          </div>

          <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[48px]">
            Ready to <span className="text-brand-orange">Connect</span>?
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
            Whether you&apos;re interested in mentorship, the Bull100x Club, or collaboration  
            let&apos;s start a conversation.
          </p>

          <div className="mt-8">
            <Button href="/contact" icon={FiArrowRight} size="lg">
              Let&apos;s Connect
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
