import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 font-medium text-xl mb-5">
              <span className="text-forest-green font-bold">Eco</span>
              <span className="text-earth-yellow font-bold">Valley</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming rural challenges into sustainable opportunities through intelligent technology.
            </p>
            <div className="flex space-x-3">
              <Link to="#" className="text-muted-foreground hover:text-forest-green transition-colors">
                <Facebook size={18} />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-forest-green transition-colors">
                <Twitter size={18} />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-forest-green transition-colors">
                <Instagram size={18} />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-forest-green transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-forest-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-forest-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-forest-green transition-colors">
                  Modules
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-forest-green transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-forest-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h3 className="font-semibold mb-5">Our Modules</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/modules/aquaguard" className="text-muted-foreground hover:text-forest-green transition-colors">
                  AquaGuard
                </Link>
              </li>
              <li>
                <Link to="/modules/agripulse" className="text-muted-foreground hover:text-forest-green transition-colors">
                  AgriPulse
                </Link>
              </li>
              <li>
                <Link to="/modules/edureach" className="text-muted-foreground hover:text-forest-green transition-colors">
                  EduReach
                </Link>
              </li>
              <li>
                <Link to="/modules/healthwatch" className="text-muted-foreground hover:text-forest-green transition-colors">
                  HealthWatch
                </Link>
              </li>
              <li>
                <Link to="/modules/climatesmart" className="text-muted-foreground hover:text-forest-green transition-colors">
                  ClimateSmart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-forest-green mr-3 mt-1" />
                <span className="text-muted-foreground">
                  123 Eco Boulevard, Sustainable City, SC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-forest-green mr-3" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-forest-green mr-3" />
                <span className="text-muted-foreground">contact@ecovalley.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} EcoValley. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-forest-green transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-forest-green transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-forest-green transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
