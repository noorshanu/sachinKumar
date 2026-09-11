export default function Stat({ value, label, dark = false, accent = false }) {
  const valueColor = accent
    ? 'text-brand-orange'
    : dark
      ? 'text-white'
      : 'text-brand-text';

  return (
    <div className="flex flex-col gap-1">
      <span className={`text-2xl font-extrabold tracking-tight md:text-3xl ${valueColor}`}>
        {value}
      </span>
      <span
        className={`whitespace-pre-line text-xs font-medium leading-snug md:text-sm ${
          dark ? 'text-white/60' : 'text-brand-text-secondary'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
