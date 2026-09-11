export default function Glow({ className = '', color = 'orange' }) {
  const colors = {
    orange: 'from-brand-orange/20 via-brand-orange-glow/10 to-transparent',
    peach: 'from-brand-orange-glow/30 via-brand-soft-orange/20 to-transparent',
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-radial blur-3xl ${colors[color]} ${className}`}
      style={{
        background: `radial-gradient(circle, color-mix(in srgb, var(--color-brand-orange-glow) 40%, transparent) 0%, transparent 70%)`,
      }}
    />
  );
}
