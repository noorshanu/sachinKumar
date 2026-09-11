import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Container from '../layout/Container';
import Button from '../common/Button';
import { bookImage } from '../../lib/images';
import { fadeUp, staggerContainer, floatAnimation } from '../../lib/constants';

const bookPoints = [
  'Spot promising meme tokens',
  'Avoid scams & hype traps',
  'AI trading in the meme economy',
];

export default function BookCTA({ id = 'book' }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-brand-dark py-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/ctabg.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/35" />
      </div>

      <Container className="relative z-10">
        {/* Desktop layout */}
        <div className="hidden items-center gap-6 lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-4"
          >
            <motion.div variants={fadeUp} className="mb-3 flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                My Book
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-orange xl:text-[44px]"
            >
              Memes to Millions
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[15px] leading-relaxed text-white/85"
            >
              The rise of meme culture in business and crypto.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-6 space-y-3">
              {bookPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[14px] text-white/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <FiCheck className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Center book */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:col-span-4"
          >
            {bookImage && (
              <motion.img
                src={bookImage}
                alt="Memes to Millions by Sachin Kumar"
                className="h-[340px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] xl:h-[400px]"
                animate={floatAnimation}
              />
            )}
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col items-start gap-8 lg:col-span-4 lg:items-end lg:text-right"
          >
            <motion.div variants={fadeUp} className="max-w-[280px]">
              <p className="text-[16px] leading-relaxed text-white/90 xl:text-[17px]">
                More than a book. It&apos;s a roadmap for the next generation.
              </p>
              <div className="mt-5 lg:flex lg:justify-end">
                <Button href="/book" icon={FiArrowRight}>
                  Get Your Copy
                </Button>
              </div>
            </motion.div>

            <motion.blockquote variants={fadeUp} className="max-w-[280px]">
              <p className="font-serif text-[15px] leading-relaxed text-white/75 italic xl:text-base">
                &ldquo;Ideas, communities and memes can create real value — if you understand the
                game.&rdquo;
              </p>
              <cite className="mt-3 block text-[10px] font-bold not-italic tracking-[0.16em] text-white/50 uppercase">
                — Sachin Kumar
              </cite>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Mobile / tablet */}
        <div className="flex flex-col items-center gap-8 text-center lg:hidden">
          <div>
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                My Book
              </p>
            </div>
            <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-orange sm:text-[40px]">
              Memes to Millions
            </h2>
            <p className="mt-3 text-[15px] text-white/85">
              The rise of meme culture in business and crypto.
            </p>
          </div>

          {bookImage && (
            <img
              src={bookImage}
              alt="Memes to Millions by Sachin Kumar"
              className="h-[280px] w-auto object-contain drop-shadow-2xl sm:h-[320px]"
              loading="lazy"
            />
          )}

          <ul className="space-y-3 text-left">
            {bookPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[14px] text-white/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <FiCheck className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <p className="max-w-sm text-[15px] text-white/90">
            More than a book. It&apos;s a roadmap for the next generation.
          </p>

          <Button href="/book" icon={FiArrowRight}>
            Get Your Copy
          </Button>

          <blockquote className="max-w-sm">
            <p className="font-serif text-[15px] leading-relaxed text-white/75 italic">
              &ldquo;Ideas, communities and memes can create real value — if you understand the
              game.&rdquo;
            </p>
            <cite className="mt-3 block text-[10px] font-bold not-italic tracking-[0.16em] text-white/50 uppercase">
              — Sachin Kumar
            </cite>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
