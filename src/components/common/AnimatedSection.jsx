import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeUp } from '../../lib/constants';

export default function AnimatedSection({
  children,
  className = '',
  id,
  as: Tag = 'section',
}) {
  const scrollProps = useScrollAnimation();

  return (
    <Tag id={id} className={className}>
      <motion.div variants={fadeUp} {...scrollProps}>
        {children}
      </motion.div>
    </Tag>
  );
}
