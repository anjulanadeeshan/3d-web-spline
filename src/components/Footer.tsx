import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-cream mb-4">DigitalSolutions</h3>
            <p className="text-cream-300 mb-4">
              CS Undergraduates from University of Jaffna, delivering cutting-edge digital solutions with modern technologies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300">
                <Facebook className="h-5 w-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300">
                <Twitter className="h-5 w-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300">
                <Linkedin className="h-5 w-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300">
                <Instagram className="h-5 w-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-300 hover:text-primary-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-primary-600 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-cream-300 hover:text-primary-600 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-cream-300 hover:text-primary-600 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-300 hover:text-primary-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-cream-300">
                <Mail className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:anjulanadeeshan2002@gmail.com" className="hover:text-primary-600 transition-colors">
                  anjulanadeeshan2002@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream-300">
                <Phone className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+94760899476" className="hover:text-primary-600 transition-colors">
                  +94 76 089 9476
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream-300">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>Gampaha, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-cream-300 text-sm">
            &copy; {currentYear} DigitalSolutions. All rights reserved. Built with React & Laravel.
          </p>
        </div>
      </div>
    </footer>
  );
}
