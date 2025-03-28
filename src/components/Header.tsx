import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Modules',
      path: '#',
      children: [
        { name: 'AquaGuard', path: '/modules/aquaguard' },
        { name: 'AgriPulse', path: '/modules/agripulse' },
        { name: 'EduReach', path: '/modules/edureach' },
        { name: 'ResourceSafe', path: '/modules/resourcesafe' },
        { name: 'HealthWatch', path: '/modules/healthwatch' },
        { name: 'ClimateSmart', path: '/modules/climatesmart' },
        { name: 'EmpowerHer', path: '/modules/empowerher' },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-6 md:px-10",
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-medium text-xl"
        >
          <span className="text-forest-green font-bold">Eco</span>
          <span className="text-earth-yellow font-bold">Valley</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <button
                  className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-accent"
                  onClick={() => toggleDropdown(item.name)}
                >
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="text-sm font-medium transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown for desktop */}
              {item.children && (
                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-in-out">
                  <div className="py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Login/Register buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-all btn-hover-effect"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40 animate-scale-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-left py-2 text-sm font-medium"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block py-2 text-sm text-gray-600"
                            onClick={toggleMobileMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 text-sm font-medium"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col space-y-3">
              <Link
                to="/login"
                className="text-sm font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium text-center"
                onClick={toggleMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
