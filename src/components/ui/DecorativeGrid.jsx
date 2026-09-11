export default function DecorativeGrid({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, var(--color-brand-orange) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        opacity: 0.15,
      }}
    />
  );
}
