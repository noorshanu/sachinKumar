import Container from '../layout/Container'
import ClubCard from './ClubCard'
import TelegramCta from '../common/TelegramCta'
import { SITE } from '../../lib/constants'
import { clubFeatures } from '../../data/clubFeatures'
import clubBg from '../../assets/clubbg.png'

export default function ClubSection() {
  return (
    <section id="club" className="relative overflow-hidden bg-[#0D0908] py-8 md:py-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={clubBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0D0908]/40 via-[#0D0908]/55 to-[#0D0908]/90"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
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

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 md:text-[15px] lg:mt-5">
              Join a community of serious traders. Get real-time signals, learn from live sessions,
              and access powerful trading tools.
            </p>

            <div className="mt-6 lg:mt-8">
              <TelegramCta size="md" iconPosition="right" className="shrink-0">
                Join Now
              </TelegramCta>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-[20px] border border-brand-orange/25 bg-[#0a0706]/80 px-4 py-6 shadow-[0_0_80px_rgba(255,77,10,0.12)] backdrop-blur-sm sm:px-8 sm:py-10 md:py-12 lg:px-10 lg:py-14"
              aria-label={`${SITE.clubName} logo`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,10,0.22)_0%,transparent_68%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-orange/20 blur-3xl"
              />
              <img
                src="/100xbull.png"
                alt={`${SITE.clubName} — Trade | Learn | Grow`}
                className="relative mx-auto w-full max-w-[min(100%,420px)] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[680px] xl:max-w-[720px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {clubFeatures.map((feature, i) => (
            <ClubCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
