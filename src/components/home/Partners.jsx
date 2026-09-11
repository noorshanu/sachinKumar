import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Container from '../layout/Container';
import { partners } from '../../data/partners';
import { fadeUp, staggerContainer } from '../../lib/constants';

function PartnerCard({ partner }) {
  return (
    <article className="flex w-[240px] shrink-0 flex-col rounded-[16px] border border-brand-text/8 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/20 hover:shadow-[0_12px_32px_rgba(255,77,10,0.08)] sm:w-[260px]">
      <div className="flex items-center gap-3">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="h-11 w-11 rounded-[12px] object-contain"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-brand-text">{partner.name}</h3>
          <p className="text-[12px] text-brand-text-muted">{partner.label}</p>
        </div>
      </div>

      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center rounded-[10px] bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-orange-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
      >
        Trade Now
      </a>
    </article>
  );
}

export default function Partners() {
  // Duplicate for seamless infinite marquee
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="partners" className="overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <motion.div variants={fadeUp} className="mb-3 flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                Trade | Partner | Grow
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-text md:text-[44px] lg:text-[48px]"
            >
              Partner <span className="text-brand-orange">Exchanges</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm leading-relaxed text-brand-text-secondary md:text-[15px]"
            >
              Trade with trusted global exchanges. Exclusive benefits for our community.
            </motion.p>
          </div>

          <motion.a
            variants={fadeUp}
            href="#partners"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-bright"
          >
            View All Partners
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </Container>

      {/* Marquee */}
      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

        <div className="group flex overflow-hidden">
          <div className="flex animate-partners-marquee gap-4 py-2 pr-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marqueeItems.map((partner, i) => (
              <PartnerCard key={`${partner.id}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
