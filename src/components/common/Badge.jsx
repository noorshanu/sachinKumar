const badgeStyles = {
  live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_20px_rgba(52,211,153,0.15)]',
  included: 'bg-brand-orange/10 text-brand-orange border-brand-orange/30 shadow-[0_0_20px_rgba(255,77,10,0.12)]',
  soon: 'bg-white/5 text-white/40 border-white/10',
  default: 'bg-brand-soft-orange text-brand-orange border-brand-orange/20',
};

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${badgeStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
