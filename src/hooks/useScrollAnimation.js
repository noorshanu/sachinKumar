import { useReducedMotion } from 'framer-motion';

export function useScrollAnimation() {
  const prefersReducedMotion = useReducedMotion();

  return {
    initial: prefersReducedMotion ? 'visible' : 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-80px' },
  };
}
