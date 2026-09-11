import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-brand-orange text-white border border-brand-orange hover:bg-brand-orange-bright hover:border-brand-orange-bright',
  secondary:
    'bg-brand-white text-brand-text border border-brand-text/15 hover:border-brand-text/30 hover:bg-brand-cream',
  dark: 'bg-brand-dark-card text-white border border-brand-dark-border hover:border-brand-orange/40',
  ghost: 'bg-transparent text-brand-text border border-transparent hover:text-brand-orange',
  outlineDark:
    'bg-transparent text-white border border-white/20 hover:border-brand-orange hover:text-brand-orange',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
