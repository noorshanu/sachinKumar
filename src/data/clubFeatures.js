import { RiLineChartLine } from 'react-icons/ri';
import { FiMonitor, FiCpu } from 'react-icons/fi';

export const clubFeatures = [
  {
    id: 'trading-vip',
    icon: RiLineChartLine,
    title: 'Trading VIP Signals & Analysis',
    description: 'High-conviction trade ideas with real-time analysis.',
    badge: 'LIVE',
    badgeVariant: 'live',
    features: [
      'Real-time market alerts',
      'Entry & exit zones',
      'Technical & market structure analysis',
      'Risk management guidance',
      'BTC & ETH market outlook',
      'Trade setup explanations',
      'Members-only market updates',
    ],
  },
  {
    id: 'online-sessions',
    icon: FiMonitor,
    title: 'Online Sessions',
    description: 'Learn, trade and grow with structured live sessions.',
    badge: 'INCLUDED',
    badgeVariant: 'included',
    features: [
      'Live trading & market analysis sessions',
      'Beginner-to-advanced trading roadmap',
      'Price action & market structure',
      'Risk and position management',
      'Trading psychology',
      'Trade breakdowns & case studies',
      'Q&A / interactive sessions',
    ],
  },
  {
    id: 'algo-trading',
    icon: FiCpu,
    title: 'Algo Trading (Crypto)',
    description: 'Automated strategies for consistent opportunities.',
    badge: 'COMING SOON',
    badgeVariant: 'soon',
    features: [
      'Rule-based trading algorithms',
      'BTC & ETH strategy models',
      'Automated entry/exit execution',
      'Risk-controlled algorithms',
      'Backtesting & performance analytics',
      'Strategy dashboard',
      'Early access for club members',
    ],
  },
];

export const clubStats = [
  { value: '500+', label: 'Active Members' },
  { value: '24/7', label: 'Market Coverage' },
  { value: '100+', label: 'Trade Setups' },
];
