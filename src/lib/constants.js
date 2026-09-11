export const COLORS = {
  orange: '#FF4D0A',
  orangeBright: '#FF5A00',
  dark: '#0D0908',
  darkCard: '#171210',
  darkBorder: '#33251F',
  text: '#111111',
  textSecondary: '#555555',
  textMuted: '#777777',
  cream: '#F8F7F4',
  white: '#FFFFFF',
  softOrange: '#FFF0E8',
  orangeGlow: '#FFB08A',
};

export const SITE = {
  name: 'Sachin Kumar',
  tagline: 'Trade | Learn | Grow',
  title: 'Sachin Kumar | Crypto Trader, Author & Educator',
  description:
    'Learn smarter trading strategies, crypto market insights, mentorship and the story behind Memes to Millions.',
  email: 'hello@sachinkumar.com',
  /** Replace with final Telegram URL when ready */
  telegramTradeUrl: 'https://t.me/',
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
