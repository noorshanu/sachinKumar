import { FaTelegram } from 'react-icons/fa6';
import Button from './Button';
import { SITE } from '../../lib/constants';

export default function TelegramCta({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  iconPosition = 'left',
  ...props
}) {
  return (
    <Button
      href={SITE.telegramUrl}
      variant={variant}
      size={size}
      icon={FaTelegram}
      iconPosition={iconPosition}
      className={className}
      aria-label={`Open Telegram ${SITE.telegramHandle}`}
      {...props}
    >
      {children || `Telegram ${SITE.telegramHandle}`}
    </Button>
  );
}
