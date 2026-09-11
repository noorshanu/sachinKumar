import { useLocation } from 'react-router-dom';

export function useIsActive(href) {
  const location = useLocation();

  if (href === '/') return location.pathname === '/' && !location.hash;
  if (href.startsWith('/#')) {
    return location.pathname === '/' && location.hash === href.slice(1);
  }
  return location.pathname === href;
}
