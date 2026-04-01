import { useState } from 'react';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Steps', href: '#steps' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-violet-300 transition-shadow duration-300">
              <Zap size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent tracking-tight">
              DigiTools
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side: Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">

            {/* Cart Icon */}
            <a
              href="#products"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-600 transition-all duration-200 group"
            >
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Get Started Button (desktop) */}
            <a
              href="#products"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-sm font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-violet-200"
            >
              Get Started
            </a>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-1 bg-white border-t border-gray-100 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-sm font-semibold rounded-xl text-center"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
