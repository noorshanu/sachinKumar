import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import { bookImage } from '../lib/images';
import { fadeUp, staggerContainer, floatAnimation } from '../lib/constants';
import { bookDiscoveries, bookHighlights, bookMeta } from '../data/book';

export default function Book() {
  return (
    <div className="pt-[72px] md:pt-20">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-[#0D0908] pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/ctabg.png"
            alt=""
            className="h-full w-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-[#0D0908]/55" />
          <div className="absolute -top-20 right-0 h-[380px] w-[380px] rounded-full bg-brand-orange/15 blur-[110px]" />
          <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-brand-orange/10 blur-[90px]" />
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1 lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
                <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                  {bookMeta.eyebrow}
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[40px] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-[48px] md:text-[56px] xl:text-[64px]"
              >
                {bookMeta.title}{' '}
                <span className="text-brand-orange">{bookMeta.titleAccent}</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-3 text-[12px] font-bold tracking-[0.12em] text-white/50 uppercase sm:text-[13px]"
              >
                {bookMeta.subtitle}
              </motion.p>
              <motion.p variants={fadeUp} className="mt-2 text-sm font-medium text-white/70">
                {bookMeta.author}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/75 md:text-base"
              >
                {bookMeta.description}
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2">
                {bookHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                      <FiCheck className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={bookMeta.buyHref} icon={FiArrowRight}>
                  Get Your Copy
                </Button>
                <Button href={bookMeta.contactHref} variant="outlineDark">
                  Bulk Orders
                </Button>
              </motion.div>
            </motion.div>

            {/* Book visual */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="order-1 flex justify-center lg:order-2 lg:col-span-5"
            >
              {bookImage && (
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/20 blur-[60px]"
                  />
                  <motion.img
                    src={bookImage}
                    alt="Memes to Millions book"
                    className="relative z-10 h-[280px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:h-[340px] lg:h-[400px] xl:h-[440px]"
                    animate={floatAnimation}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===================== DISCOVER ===================== */}
      <section className="relative overflow-hidden bg-brand-cream py-14 md:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"
        />

        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
                Inside the book
              </p>
            </div>
            <h2 className="text-[32px] font-extrabold tracking-[-0.03em] text-brand-text md:text-[42px]">
              What You&apos;ll <span className="text-brand-orange">Discover</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-text-secondary">
              Five essential lenses on meme tokens—from culture and psychology to AI and what comes
              next.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {bookDiscoveries.map((item, i) => (
              <motion.article
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-[18px] border border-brand-text/8 bg-white p-6 md:p-7 ${
                  i === bookDiscoveries.length - 1 ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <span className="text-[28px] font-extrabold leading-none text-brand-orange/25">
                  {item.num}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-text md:text-xl">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-brand-text-secondary">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===================== WHY IT MATTERS ===================== */}
      <section className="relative overflow-hidden bg-[#0D0908] py-14 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[100px]"
        />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[32px] font-extrabold tracking-[-0.03em] text-white md:text-[42px]">
              Why This Book <span className="text-brand-orange">Matters</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65 md:text-lg">
              Meme culture isn&apos;t a passing trend—it&apos;s a fundamental shift in how value,
              community, and markets interact. This book gives you the context, frameworks, and
              insights to understand and navigate this new reality.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={bookMeta.buyHref} icon={FiArrowRight}>
                Get Your Copy
              </Button>
              <Button href="/#club" variant="outlineDark">
                Join Bull100x Club
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
