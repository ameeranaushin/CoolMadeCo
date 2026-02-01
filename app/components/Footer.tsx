'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white border-t border-gray-800">
      {/* B2B Exclusivity Banner */}
      <div className="bg-[#2667ff]/5 border-b border-[#2667ff]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2667ff]/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Specializing exclusively in high-tonnage B2B and institutional requirements</p>
                <p className="text-gray-400 text-sm">50+ tons minimum capacity • No residential services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2667ff] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CM</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Cool Made & Co.</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Kolkata&apos;s trusted partner for large-scale commercial air conditioning rentals. 
                Serving trade fairs, warehouses, factories, and corporate events since 2010.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="tel:+919874023696" className="flex items-center gap-3 text-gray-400 hover:text-[#2667ff] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 98740 23696
                </a>
                <a href="mailto:coolmadecompany@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#2667ff] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  coolmadecompany@gmail.com
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  12/1 Ismail Street, Kolkata 700014
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-[#2667ff]/10 border border-[#2667ff]/20 rounded-full w-fit">
                <div className="w-2 h-2 bg-[#2667ff] rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-[#2667ff] uppercase tracking-wide">
                  B2B Commercial Only
                </span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#2667ff] transition-colors">
                    Tower AC Rentals
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#2667ff] transition-colors">
                    Portable AC Units
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#2667ff] transition-colors">
                    Ductable Systems
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-[#2667ff] transition-colors">
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Industries We Serve</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trade Fairs & Exhibitions
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Warehouses & Logistics
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Manufacturing & Factories
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Corporate Events
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Data Centers
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} Cool Made & Co. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-500 hover:text-[#2667ff] transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-[#2667ff] transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
            
            {/* Final B2B Disclaimer */}
            <p className="text-center text-gray-600 text-xs mt-6">
              Cool Made & Co. provides commercial air conditioning rental services exclusively for businesses, institutions, and industrial applications. 
              We do not offer residential AC rental services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
