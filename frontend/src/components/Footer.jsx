import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { offices } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KP Landscaping</h3>
            <p className="text-emerald-100 mb-4">
              Professional landscaping services across Western and Central New York. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-emerald-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-emerald-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-emerald-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-emerald-100 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-emerald-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/buffalo" className="text-emerald-100 hover:text-white transition-colors">Buffalo & Surrounding</Link></li>
              <li><Link to="/rochester" className="text-emerald-100 hover:text-white transition-colors">Rochester & Surrounding</Link></li>
              <li><Link to="/albany" className="text-emerald-100 hover:text-white transition-colors">Albany & Surrounding</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index} className="text-emerald-100">
                  <p className="font-semibold text-white mb-1">{office.city} Office</p>
                  <div className="flex items-start space-x-2 text-sm mb-1">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100">
          <p>&copy; {new Date().getFullYear()} KP Landscaping. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
