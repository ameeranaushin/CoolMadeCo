'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const menuLinks = [
  { href: '#services', label: 'Services', description: 'Tower AC, Portable AC, Ductable Systems' },
  { href: '#projects', label: 'Projects', description: 'Trade Fairs, Factories, Warehouses' },
  { href: '#contact', label: 'Contact', description: 'Get a Commercial Quote' },
];

const serviceLinks = [
  { href: '#services', label: 'Tower AC Rentals', icon: '🏢' },
  { href: '#services', label: 'Ductable AC Systems', icon: '🏭' },
  { href: '#services', label: 'Industrial Cooling', icon: '❄️' },
  { href: '#services', label: 'Portable AC Units', icon: '📦' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 focus:outline-none focus-visible:outline-none" onClick={closeMenu}>
              <img src="/images/logo.png" alt="Cool Made & Co." className="h-9 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Cool Made & Co.
              </span>
            </Link>

            {/* B2B Badge - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#2667ff]/10 rounded-full border border-[#2667ff]/20">
                <div className="w-2 h-2 bg-[#2667ff] rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-[#2667ff] uppercase tracking-wide">
                  Commercial Only
                </span>
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-[#2667ff] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=919874023696&text=Hi%20Cool%20Made%20%26%20Co.%2C%20I%20am%20interested%20in%20a%20commercial%20cooling%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#2667ff] text-white text-sm font-bold rounded-full hover:bg-[#1a4fd6] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(38,103,255,0.4)]"
              >
                Get Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-[#2667ff] transition-colors relative z-50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <motion.div
                animate={isOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-6 h-0.5 bg-current block mb-1.5 origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-current block mb-1.5"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-6 h-0.5 bg-current block origin-center"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0a1628] z-[70] lg:hidden shadow-2xl overflow-y-auto border-l border-gray-800"
            >
              <div className="pt-20 pb-8 px-6">
                {/* B2B Badge - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#2667ff]/10 rounded-xl border border-[#2667ff]/20">
                    <div className="w-3 h-3 bg-[#2667ff] rounded-full animate-pulse" />
                    <div>
                      <span className="text-sm font-bold text-[#2667ff] uppercase tracking-wide block">
                        Commercial Only
                      </span>
                      <span className="text-xs text-gray-500">
                        B2B & Institutional Services
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Commercial Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-8"
                >
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Commercial Services
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceLinks.map((service, index) => (
                      <motion.a
                        key={service.label}
                        href={service.href}
                        onClick={closeMenu}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="flex items-center gap-2 p-3 bg-[#132038] rounded-xl hover:bg-[#2667ff]/10 hover:border-[#2667ff]/20 border border-gray-800 transition-all"
                      >
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{service.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Navigation Links */}
                <motion.nav
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mb-8"
                >
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Navigation
                  </h3>
                  <div className="space-y-2">
                    {menuLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="flex items-center justify-between p-4 rounded-xl hover:bg-[#132038] transition-colors group"
                        >
                          <div>
                            <span className="text-base font-semibold text-white group-hover:text-[#2667ff] transition-colors">
                              {link.label}
                            </span>
                            <span className="text-xs text-gray-500 block mt-0.5">
                              {link.description}
                            </span>
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-600 group-hover:text-[#2667ff] group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.nav>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=919874023696&text=Hi%20Cool%20Made%20%26%20Co.%2C%20I%20am%20interested%20in%20a%20commercial%20cooling%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#2667ff] text-white font-bold rounded-xl hover:bg-[#1a4fd6] transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Get Commercial Quote
                  </a>
                  <a
                    href="tel:+919874023696"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 border-2 border-gray-700 text-white font-semibold rounded-xl hover:border-[#2667ff] hover:text-[#2667ff] transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call: +91 98740 23696
                  </a>
                </motion.div>

                {/* B2B Disclaimer */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-gray-500 text-center mt-8 px-4"
                >
                  We specialize exclusively in high-tonnage B2B and institutional requirements. 
                  No residential services.
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
