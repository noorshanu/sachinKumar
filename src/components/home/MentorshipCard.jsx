import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import TelegramCta from '../common/TelegramCta';
import { SITE } from '../../lib/constants';

export default function MentorshipCard({ program, index }) {
  const Icon = program.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-[16px] border border-brand-text/8 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:border-brand-orange/20 hover:shadow-[0_12px_40px_rgba(255,77,10,0.08)] sm:p-6"
    >
      {/* Icon + Title row */}
      <div className="flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-brand-soft-orange text-brand-orange transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </div>

        <div className="min-w-0 pt-0.5">
          <h3 className="text-base font-bold leading-snug text-brand-text sm:text-lg">
            {program.title}
          </h3>
          <p className="mt-1 text-[13px] leading-snug text-brand-text-secondary">
            {program.description}
          </p>
        </div>
      </div>

      {/* Feature list with dividers */}
      <ul className="mt-5 flex flex-col">
        {program.features.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.12 + i * 0.06 }}
            className="flex items-center gap-3 border-t border-brand-text/6 py-2.5"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-orange/30 bg-brand-soft-orange text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
              <FiCheck className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-[13px] font-medium text-brand-text">{item}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col items-start gap-1.5 pt-4">
        <TelegramCta size="sm" className="w-full text-[13px]" iconPosition="right">
          Explore Mentorship
        </TelegramCta>
        <a
          href={SITE.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-medium text-brand-text-muted transition-colors hover:text-brand-orange"
          aria-label={`Open Telegram ${SITE.telegramHandle}`}
        >
          Telegram {SITE.telegramHandle}
        </a>
      </div>
    </motion.article>
  );
}
