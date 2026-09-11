import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  dark = false,
  align = 'left',
  layout = 'default',
  cta,
  ctaHref = '#',
  className = '',
}) {
  const titleParts = highlight ? title.split(highlight) : [title];

  const headingBlock = (
    <>
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="h-8 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
          <p
            className={`text-[11px] font-bold uppercase tracking-[0.2em] md:text-xs ${
              dark ? 'text-brand-orange' : 'text-brand-text-muted'
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[48px] lg:text-[56px] ${
          dark ? 'text-white' : 'text-brand-text'
        } ${align === 'center' ? 'text-center' : ''}`}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-brand-orange">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
    </>
  );

  const descriptionBlock = description && (
    <p
      className={`text-base leading-relaxed md:text-lg ${
        dark ? 'text-white/70' : 'text-brand-text-secondary'
      } ${layout === 'split' ? 'max-w-md' : 'mt-4 max-w-xl'} ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {description}
    </p>
  );

  if (layout === 'split') {
    return (
      <div className={`grid gap-8 lg:grid-cols-2 lg:items-end ${className}`}>
        <div className="max-w-xl">{headingBlock}</div>
        <div className="flex flex-col gap-6 lg:items-end lg:text-right">
          {descriptionBlock}
          {cta && (
            <Button href={ctaHref} icon={FiArrowRight}>
              {cta}
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
        {headingBlock}
        {descriptionBlock}
      </div>

      {cta && (
        <div className="shrink-0">
          <Button href={ctaHref} icon={FiArrowRight}>
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
}
