import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Container from '../layout/Container';
import Button from '../common/Button';
import HeroStats from './HeroStats';
import { personImage, bookImage, signatureImage, heroBackgroundImage, mobileHeroImage } from '../../lib/images';
import { fadeUp, staggerContainer, floatAnimation } from '../../lib/constants';

const heroStats = [
  { value: '5+', label: 'Years Trading' },
  { value: '50+', label: 'Projects Analyzed' },
  { value: '100K+', label: 'Community' },
  { value: '1', label: 'Mission\nFinancial Freedom' },
];

const verticalWords = ['Memes', 'Markets', 'Mindset', 'Millions'];

function SignatureBlock({ className = '', centered = false }) {
  if (signatureImage) {
    return (
      <img
        src={signatureImage}
        alt="Sachin Kumar signature"
        className={`h-auto object-contain ${centered ? 'mx-auto w-[150px]' : 'w-[150px] object-left xl:w-[180px]'} ${className}`}
        style={{ mixBlendMode: 'multiply' }}
      />
    );
  }

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <p className="font-serif text-lg italic text-brand-text" style={{ fontFamily: 'Georgia, serif' }}>
        Sachin Kumar
      </p>
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-text-muted">
        Trade | Learn | Grow
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fdf2e8] lg:bg-brand-cream">
      {heroBackgroundImage && (
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
          <img
            src={heroBackgroundImage}
            alt=""
            className="h-full w-full object-cover object-center opacity-95"
          />
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-3 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex 2xl:right-5"
      >
        {verticalWords.map((word) => (
          <span
            key={word}
            className="text-[9px] font-bold tracking-[0.28em] text-brand-text-muted/40 uppercase"
            style={{ writingMode: 'vertical-rl' }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* ===================== DESKTOP ===================== */}
      {/* Navbar ~72px + 12px gap → person starts ~84px from top */}
      <div className="relative z-10 hidden min-h-[100svh] lg:block lg:min-h-[680px] lg:max-h-[920px]">
        {/* Person — tall, head close to navbar */}
        <div className="pointer-events-none absolute inset-x-0 top-[84px] bottom-0 z-[5] flex justify-center">
          {personImage && (
            <motion.img
              src={personImage}
              alt="Sachin Kumar"
              className="h-full w-auto max-w-[42vw] object-contain object-bottom"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </div>

        {/* Quote — right of person head (~12–20px below navbar band) */}
        <motion.blockquote
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="absolute top-[96px] left-[54%] z-20 max-w-[190px] text-left xl:top-[100px] xl:left-[55%] xl:max-w-[210px]"
        >
          <p className="font-serif text-[13px] leading-[1.4] text-brand-text-secondary italic xl:text-[14px]">
            <span className="mr-0.5 align-top text-[22px] leading-none font-normal text-brand-orange not-italic">
              &ldquo;
            </span>
            Discipline today compounds your freedom tomorrow.
          </p>
          <cite className="mt-1.5 block text-[9px] font-bold not-italic tracking-[0.14em] text-brand-text-muted uppercase">
            — Sachin Kumar
          </cite>
        </motion.blockquote>

        <Container className="relative z-20 min-h-[100svh] pt-[84px] pb-6 xl:min-h-[680px] xl:pb-8">
          <div className="grid grid-cols-12 items-start gap-3">
            {/* LEFT — copy + stats tight together */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="col-span-5 max-w-[420px]"
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-text-muted"
              >
                Crypto Trader | Author | Educator
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-2 text-[42px] font-extrabold leading-[0.94] tracking-[-0.04em] xl:text-[54px] 2xl:text-[60px]"
              >
                <span className="text-brand-text">Smarter</span>
                <br />
                <span className="text-brand-orange">Money Moves.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-2 text-[15px] font-semibold text-brand-text xl:text-base"
              >
                Markets. Mindset. Memes to Millions.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-2 max-w-[360px] text-[13px] leading-relaxed text-brand-text-secondary xl:text-[14px]"
              >
                I&apos;m Sachin Kumar — crypto trader, blockchain strategist, and author of{' '}
                <em className="font-semibold text-brand-text not-italic">Memes to Millions</em>. Real
                market insights and practical tools for crypto.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-3.5 flex flex-wrap items-center gap-2.5">
                <Button href="/#club" size="sm" icon={FiArrowRight} className="px-5 py-2.5 text-[13px]">
                  Join Bull100x Club
                </Button>
                <Button
                  href="/#mentorship"
                  variant="secondary"
                  size="sm"
                  className="px-5 py-2.5 text-[13px]"
                >
                  Explore Mentorship
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-5">
                <HeroStats stats={heroStats} />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-4">
                <SignatureBlock />
              </motion.div>
            </motion.div>

            <div className="col-span-3" aria-hidden="true" />

            {/* RIGHT — book */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="col-span-4 flex flex-col items-end pt-24 xl:pr-6 xl:pt-28"
            >
              {bookImage && (
                <motion.img
                  variants={fadeUp}
                  src={bookImage}
                  alt="Memes to Millions book"
                  className="h-[260px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] xl:h-[300px] 2xl:h-[330px]"
                  animate={floatAnimation}
                />
              )}
            </motion.div>
          </div>
        </Container>
      </div>

      {/* ===================== MOBILE / TABLET ===================== */}
      <div className="relative z-10 lg:hidden">
        <Container className="pt-20 pb-10">
          {/* 1. Combined mobile visual (person + book + quote) */}
          {mobileHeroImage && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7"
            >
              <img
                src={mobileHeroImage}
                alt="Sachin Kumar with Memes to Millions"
                className="mx-auto w-full max-w-[520px] object-contain"
              />
            </motion.div>
          )}

          {/* 2. Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-text-muted"
            >
              Crypto Trader | Author | Educator
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-2 text-[36px] font-extrabold leading-[0.96] tracking-[-0.04em] sm:text-[44px]"
            >
              <span className="text-brand-text">Smarter</span>
              <br />
              <span className="text-brand-orange">Money Moves.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-2.5 text-[15px] font-semibold text-brand-text">
              Markets. Mindset. Memes to Millions.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-2.5 max-w-lg text-[13px] leading-relaxed text-brand-text-secondary"
            >
              I&apos;m Sachin Kumar — crypto trader, blockchain strategist, and author of{' '}
              <em className="font-semibold text-brand-text not-italic">Memes to Millions</em>. Real
              market insights and practical tools for crypto.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <Button href="/#club" size="md" icon={FiArrowRight} className="w-full text-[13px] sm:w-auto">
                Join Bull100x Club
              </Button>
              <Button
                href="/#mentorship"
                variant="secondary"
                size="md"
                className="w-full text-[13px] sm:w-auto"
              >
                Explore Mentorship
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7">
              <HeroStats stats={heroStats} />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex justify-center sm:justify-start">
              <SignatureBlock centered />
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
