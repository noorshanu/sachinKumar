import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function NavLink({ href, children, className, onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    onClick?.(e);

    if (!href.includes('#')) return;

    const [path = '/', hash] = href.split('#');
    const targetPath = path || '/';
    const targetHash = hash ? `#${hash}` : '';

    if (location.pathname === targetPath) {
      if (targetHash) {
        e.preventDefault();
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', targetHash);
      }
      return;
    }

    e.preventDefault();
    navigate(`${targetPath}${targetHash}`);
  };

  return (
    <Link to={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
