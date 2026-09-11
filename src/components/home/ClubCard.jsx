import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const badgeStyles = {
  live: {
    bg: 'bg-[#00E5FF]/10',
    border: 'border-[#00E5FF]/20',
    text: 'text-[#00E5FF]',
    dot: 'bg-[#00E5FF]',
  },
  included: {
    bg: 'bg-brand-orange/10',
    border: 'border-brand-orange/20',
    text: 'text-brand-orange',
    dot: 'bg-brand-orange',
  },
  soon: {
    bg: 'bg-brand-orange/10',
    border: 'border-brand-orange/20',
    text: 'text-brand-orange',
    dot: 'bg-brand-orange',
  },
};

export default function ClubCard({ feature, index }) {
  const Icon = feature.icon;
  const style = badgeStyles[feature.badgeVariant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-[16px] border border-white/5 bg-[#171210]/80 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-brand-orange/30 hover:shadow-[0_8px_40px_rgba(255,77,10,0.08)]"
    >
      {/* Header Row: Icon (Left) + Badge & Title (Right) */}
      <div className="flex items-start gap-4">
        <div className="mt-1 shrink-0 text-brand-orange transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-10 w-10 sm:h-11 sm:w-11" strokeWidth={1.5} aria-hidden="true" />
        </div>
        
        <div className="flex flex-col items-start gap-2">
          <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 ${style.bg} ${style.border}`}>
            <div className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
            <span className={`text-[9px] font-bold tracking-[0.1em] uppercase ${style.text}`}>
              {feature.badge}
            </span>
          </div>
          <h3 className="text-base font-bold leading-tight text-white sm:text-lg">
            {feature.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-[13px] leading-relaxed text-white/60">
        {feature.description}
      </p>

      {/* Features List with Dividers */}
      <ul className="mt-5 flex flex-col">
        {feature.features.map((item) => (
          <li key={item} className="flex items-center gap-3 border-t border-white/5 py-2.5">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
              <FiCheck className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-[13px] text-white/70">{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
