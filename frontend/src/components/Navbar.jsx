import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="KP Landscaping"
    className="h-30 w-auto object-contain"
  />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            
            {/* Service Areas Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center space-x-1">
                <span>Service Areas</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/buffalo" className="block px-4 py-3 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 transition-colors">Buffalo</Link>
                <Link to="/rochester" className="block px-4 py-3 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 transition-colors">Rochester</Link>
                <Link to="/albany" className="block px-4 py-3 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 transition-colors">Albany</Link>
              </div>
            </div>

            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="cta-button">Contact Us</Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Services</Link>
            
            <div className="py-2">
              <button 
                className="mobile-nav-link flex items-center justify-between w-full"
                onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
              >
                <span>Service Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServiceAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServiceAreasOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/buffalo" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>Buffalo</Link>
                  <Link to="/rochester" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>Rochester</Link>
                  <Link to="/albany" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>Albany</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
