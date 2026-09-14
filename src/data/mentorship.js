import { FiMonitor, FiUsers, FiUser } from 'react-icons/fi';

export const mentorshipPrograms = [
  {
    id: 'online',
    icon: FiMonitor,
    title: 'Online Mentorship',
    description: 'Learn from anywhere, at your pace.',
    features: [
      '13-15 live sessions',
      '3 months of live trading',
      'Weekend doubt sessions',
    ],
  },
  {
    id: 'offline',
    icon: FiUsers,
    title: 'Offline Mentorship',
    description: 'In-person learning experience.',
    features: [
      '4 days of Offline Workshops',
      'Taught directly by Sachin Kumar',
      'Interactive workshops & networking',
    ],
  },
  {
    id: 'inner-circle',
    icon: FiUser,
    title: '1-to-1 Inner Circle',
    description: 'Personalized guidance for serious traders.',
    features: [
      '1-to-1 strategy and portfolio guidance',
      'Best topics from all programs',
      '3 months of ongoing support',
    ],
  },
];
