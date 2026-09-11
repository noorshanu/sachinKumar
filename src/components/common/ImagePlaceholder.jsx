export default function ImagePlaceholder({ label, className = '', aspect = 'portrait' }) {
  const aspectClass =
    aspect === 'portrait'
      ? 'aspect-[3/4]'
      : aspect === 'book'
        ? 'aspect-[3/4] max-w-[280px]'
        : 'aspect-[4/1]';

  return (
    <div
      className={`flex ${aspectClass} items-center justify-center rounded-2xl border-2 border-dashed border-brand-orange/20 bg-brand-soft-orange/50 ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-orange">
          Image Placeholder
        </p>
        <p className="mt-1 text-sm text-brand-text-muted">{label}</p>
        <p className="mt-2 text-[10px] text-brand-text-muted/70">
          Add to src/assets/images/
        </p>
      </div>
    </div>
  );
}
