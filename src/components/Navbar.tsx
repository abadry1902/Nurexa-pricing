import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from './Button';
import { Button } from './Button';
import logoImage from '../assets/images/regenerated_image_1789466898066.png';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'عن نيوريكسا', path: '/about' },
  { name: 'الحلول', path: '/solutions' },
  { name: 'الأسعار', path: '/pricing' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-nurexa-white/80 backdrop-blur-md border-b border-nurexa-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Nurexa" 
                className="h-10 w-auto" 
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-base font-semibold transition-colors hover:text-nurexa-green",
                  location.pathname === link.path ? "text-nurexa-green" : "text-nurexa-navy",
                  link.name === 'الأسعار' ? "mr-4 lg:mr-8" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Link to="/contact">
              <Button variant="ghost">تواصل معنا</Button>
            </Link>
            <Link to="/new-client">
              <Button variant="primary">عميل جديد</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-nurexa-navy hover:text-nurexa-green focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-nurexa-white border-b border-nurexa-gray-border absolute w-full left-0 top-20 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-semibold",
                  location.pathname === link.path 
                    ? "bg-nurexa-green-light text-nurexa-green" 
                    : "text-nurexa-navy hover:bg-nurexa-gray-light"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3 px-3">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="secondary" fullWidth>تواصل معنا</Button>
              </Link>
              <Link to="/new-client" onClick={() => setIsOpen(false)}>
                <Button variant="primary" fullWidth>عميل جديد</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
