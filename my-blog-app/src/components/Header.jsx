import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-xl transition duration-200 text-sm md:text-base font-medium ${
      location.pathname === path
        ? 'bg-[#274BDB] text-white'
        : 'text-white hover:bg-[#3e61e7]'
    }`;

  return (
    <header className="bg-[#4169e1]">
      <nav className="flex justify-center flex-wrap gap-3 px-4 py-4">
        <Link to="/" className={linkClass('/')}>🏠 მთავარი</Link>
        <Link to="/about" className={linkClass('/about')}>👤 ჩემს შესახებ</Link>
        <Link to="/projects" className={linkClass('/projects')}>💼 პროექტები</Link>
        <Link to="/contact" className={linkClass('/contact')}>📬 კონტაქტი</Link>
      </nav>
    </header>
  );
}

export default Header;
