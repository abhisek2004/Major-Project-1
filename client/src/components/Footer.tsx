import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About Us', href: '#about' }
  ];

  const resources = [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'Support Center', href: '#support' },
    { label: 'Community', href: '#community' }
  ];

  const legal = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'GDPR', href: '#gdpr' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', color: 'hover:text-gray-300' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="border-t bg-slate-950 border-slate-800/50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-blue-500 transition-colors duration-300 group-hover:text-blue-400" />
                <div className="absolute inset-0 transition-all duration-300 rounded-full bg-blue-500/20 blur-lg group-hover:bg-blue-400/30"></div>
              </div>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                FutureMesh
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Revolutionizing career development through AI-powered mentorship, smart job matching, and comprehensive placement automation. Connecting students, alumni, and employers in a unified ecosystem.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">contact@futuremesh.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Giet University</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 text-slate-400 hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 text-slate-400 hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 text-slate-400 hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="p-6 mb-8 border bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl border-slate-700/50">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-sm text-slate-400">Get the latest updates on new features and career opportunities.</p>
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-white border rounded-lg bg-slate-800 border-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-blue-500/25"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col pt-8 border-t md:flex-row md:items-center md:justify-between border-slate-800/50">
          <div className="mb-4 text-sm text-slate-400 md:mb-0">
            © 2025 FutureMesh. All rights reserved. Built with ❤️ for the future of career development.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-slate-400 ${social.color} transition-colors duration-300`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;