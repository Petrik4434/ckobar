import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { id: 'beranda', label: 'Beranda', to: '/' },
    { id: 'tentang', label: 'Tentang', to: '/tentang' },
    { id: 'anggota', label: 'Anggota', to: '/anggota' },
    { id: 'kegiatan', label: 'Kegiatan', to: '/kegiatan' },
    { id: 'kontak', label: 'Kontak', to: '/kontak' },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomePage ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
  }`;
  const linkClasses = (isActive: boolean) => `font-medium transition-all duration-300 hover:text-primary-600 ${
    isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
  } ${isActive ? 'text-primary-600' : ''}`;

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              Kobar
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `${linkClasses(isActive)} relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-600 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `block w-full text-left px-6 py-2 font-medium transition-colors duration-300 ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
