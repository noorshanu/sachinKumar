import Container from '../layout/Container';
import ClubCard from './ClubCard';
import TelegramCta from '../common/TelegramCta';
import { SITE } from '../../lib/constants';
import { clubFeatures } from '../../data/clubFeatures';
import clubBg from '../../assets/clubbg.png';

export default function ClubSection() {
  return (
    <section id="club" className="relative overflow-hidden bg-[#0D0908] py-6">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={clubBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-80"
        />
      </div>

      <Container className="relative z-10">
        {/* Custom Header matching the design exactly */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          
          {/* Left: Titles */}
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase">
                <span className="text-brand-orange">{SITE.clubName}</span>{' '}
                <span className="text-white">CLUB</span>
              </p>
            </div>

            <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[44px] lg:text-[48px]">
              <span className="text-white">Everything You Need</span>
              <br />
              <span className="text-brand-orange">to Trade & Grow</span>
            </h2>
          </div>

          {/* Right: Description & Button */}
          <div className="flex max-w-xl flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-6">
            <p className="text-sm leading-relaxed text-white/70 md:text-[15px] lg:text-right">
              Join a community of serious traders. Get real-time signals,
              <br className="hidden lg:block" />
              learn from live sessions and access powerful trading tools.
            </p>
            <div className="flex shrink-0 flex-col items-start gap-1.5">
              <TelegramCta size="md" iconPosition="right" className="shrink-0">
                Join Now
              </TelegramCta>
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium text-white/70 transition-colors hover:text-brand-orange"
                aria-label={`Open Telegram ${SITE.telegramHandle}`}
              >
                Telegram {SITE.telegramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {clubFeatures.map((feature, i) => (
            <ClubCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
