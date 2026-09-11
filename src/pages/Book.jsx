import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { bookImage } from '../lib/images';
import { fadeUp, floatAnimation } from '../lib/constants';

const chapters = [
  {
    num: '01',
    title: 'The Meme Economy',
    desc: 'How internet culture created new forms of value and community-driven markets.',
  },
  {
    num: '02',
    title: 'Narratives That Move Markets',
    desc: 'Understanding the stories, hype cycles, and sentiment that drive crypto prices.',
  },
  {
    num: '03',
    title: 'From Viral to Valuable',
    desc: 'Case studies of meme coins and projects that crossed from joke to serious asset class.',
  },
  {
    num: '04',
    title: 'Trading the Culture',
    desc: 'Practical frameworks for navigating meme-driven markets with discipline.',
  },
  {
    num: '05',
    title: 'Building Lasting Wealth',
    desc: 'Beyond the hype   systems, mindset, and strategies for long-term success.',
  },
];

export default function Book() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="relative overflow-hidden bg-brand-cream py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text-muted">
                Featured Book
              </p>
              <h1 className="mt-4 text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-text md:text-[56px]">
                Memes to <span className="text-brand-orange">Millions</span>
              </h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-text-muted">
                The Rise of Meme Culture in Business and Crypto
              </p>
              <p className="mt-2 text-base font-medium text-brand-text-secondary">
                By Sachin Kumar
              </p>
              <p className="mt-6 text-lg leading-relaxed text-brand-text-secondary">
                A groundbreaking exploration of how meme culture reshaped business, finance, and
                the crypto landscape   and what it means for the future of value creation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#" icon={FiArrowRight}>
                  Get Your Copy
                </Button>
                <Button href="/contact" variant="secondary">
                  Bulk Orders
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              {bookImage ? (
                <motion.img
                  src={bookImage}
                  alt="Memes to Millions book"
                  className="w-full max-w-[360px] object-contain drop-shadow-2xl"
                  animate={floatAnimation}
                />
              ) : (
                <ImagePlaceholder label="book.png" aspect="book" className="max-w-[360px]" />
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-brand-text md:text-4xl">
            What You&apos;ll <span className="text-brand-orange">Discover</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {chapters.map((chapter, i) => (
              <motion.article
                key={chapter.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 rounded-[16px] border border-brand-text/5 p-6 md:p-8"
              >
                <span className="text-3xl font-extrabold text-brand-orange/30">{chapter.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-brand-text">{chapter.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                    {chapter.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-dark py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Why This Book <span className="text-brand-orange">Matters</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Meme culture isn&apos;t a passing trend   it&apos;s a fundamental shift in how value,
              community, and markets interact. This book gives you the context, frameworks, and
              insights to understand and navigate this new reality.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
