import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Container from '../components/layout/Container';
import ClubCard from '../components/home/ClubCard';
import TelegramCta from '../components/common/TelegramCta';
import CandlestickBackground from '../components/ui/CandlestickBackground';
import Glow from '../components/ui/Glow';
import { clubFeatures } from '../data/clubFeatures';
import { fadeUp, SITE } from '../lib/constants';

export default function Club() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/100xbull.png"
            alt=""
            className="absolute right-[-6%] top-1/2 h-[min(70vw,480px)] w-[min(88vw,600px)] max-h-[90%] -translate-y-1/2 object-contain object-right opacity-[0.12] mix-blend-lighten md:right-[-2%] md:opacity-[0.16]"
          />
        </div>
        <CandlestickBackground className="right-0 top-0 z-[1] h-full w-1/2 opacity-50" />
        <Glow className="left-1/3 top-1/2 z-[1] h-[500px] w-[500px] -translate-y-1/2 opacity-15" />

        <Container className="relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
              {SITE.clubLabel}
            </p>
            <h1 className="mt-4 max-w-3xl text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[56px]">
              Everything You Need to{' '}
              <span className="text-brand-orange">Trade & Grow</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              A premium trading community with real-time signals, live education, and upcoming
              algo strategies   built for traders who take the game seriously.
            </p>
            <div className="mt-8">
              <TelegramCta iconPosition="right">
                Join Now
              </TelegramCta>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-dark pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/100xbull.png"
            alt=""
            className="absolute left-1/2 top-1/2 h-[min(65vw,420px)] w-[min(85vw,520px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.08] mix-blend-lighten"
          />
        </div>
        <Container className="relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {clubFeatures.map((feature, i) => (
              <ClubCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-brand-text">
              Why Join <span className="text-brand-orange">{SITE.clubName}</span>?
            </h2>
            <ul className="mt-8 space-y-4 text-left">
              {[
                'Real-time market intelligence from an experienced trader',
                'Structured learning alongside live market action',
                'Community of disciplined, growth-minded traders',
                'Early access to algo trading tools (coming soon)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-text-secondary">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <FiCheck className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
