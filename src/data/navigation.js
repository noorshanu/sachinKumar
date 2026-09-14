import { SITE } from '../lib/constants';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: SITE.clubName, href: '/#club' },
  { label: 'Mentorship', href: '/#mentorship' },
  { label: 'Book', href: '/book' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: SITE.clubLabel, href: '/#club' },
  { label: 'Mentorship', href: '/#mentorship' },
  { label: 'Partner Exchanges', href: '/#partners' },
  { label: 'About', href: '/about' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
];

/** Profile URLs */
export const socialLinks = [
  { label: 'X (Twitter)', href: 'https://x.com/ad_vertiser', id: 'x' },
  { label: 'YouTube', href: 'https://youtube.com/@sachinkumarfinance?si=PFB162cnbDRlhHKC', id: 'youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/oxsachin04/', id: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sachin-kumar-3a3207161/', id: 'linkedin' },
  { label: 'Telegram', href: 'https://t.me/advertiser247', id: 'telegram' },
];

export const footerLegal = {
  riskTitle: 'Legal & Risk Disclaimer',
  riskText:
    'Cryptocurrency trading involves significant risk of loss and is highly volatile. Past performance is not indicative of future results. Content on this website is for educational purposes only and should not be considered financial advice. Always do your own research (DYOR) and never invest more than you can afford to lose.',
  regulatoryTitle: 'Regulatory Notice',
  regulatoryText:
    'Crypto assets are not legal tender and are not regulated as financial products in many jurisdictions, including India. Trading crypto may not be suitable for all investors. Please ensure compliance with local laws and regulations before engaging in any crypto-related activities.',
};

/** @deprecated use footerQuickLinks */
export const footerLinks = footerQuickLinks;
