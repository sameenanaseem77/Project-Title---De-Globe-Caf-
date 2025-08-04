import React from 'react';
import { Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-gold-400" />
              <span className="text-2xl font-bold">De Globe Café</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the perfect blend of exceptional coffee, delicious food, and warm hospitality at De Globe Café.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-400" />
                <span className="text-sm">123 Coffee Street, Café District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-400" />
                <span className="text-sm">hello@deglobecafe.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gold-400" />
                <div className="text-sm">
                  <div>Mon-Fri: 7:00 AM - 9:00 PM</div>
                  <div>Sat-Sun: 8:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="/menu" className="block text-sm hover:text-gold-400 transition-colors">
                Our Menu
              </a>
              <a href="/about" className="block text-sm hover:text-gold-400 transition-colors">
                About Us
              </a>
              <a href="/contact" className="block text-sm hover:text-gold-400 transition-colors">
                Contact
              </a>
              <a href="/admin" className="block text-sm hover:text-gold-400 transition-colors">
                Admin
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 De Globe Café. All rights reserved. Crafted with ❤️ for coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;