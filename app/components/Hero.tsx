'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isWhatsAppLoading, setIsWhatsAppLoading] = useState(false);

  const handleWhatsAppClick = () => {
    setIsWhatsAppLoading(true);
    setTimeout(() => {
      window.open('https://api.whatsapp.com/send?phone=919874023696&text=Hi%20Cool%20Made%20%26%20Co.%2C%20I%20am%20interested%20in%20a%20commercial%20cooling%20quote.', '_blank', 'noopener,noreferrer');
      setTimeout(() => setIsWhatsAppLoading(false), 1000);
    }, 100);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#0a1628] overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(38,103,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(38,103,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Animated floating dots */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#2667ff] rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#2667ff] rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#2667ff] rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#2667ff] rounded-full"
          />
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2667ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2667ff]/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-24">
          
          {/* Top Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#2667ff] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest">
                Commercial Only
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" />
            <span className="text-xs sm:text-sm text-gray-500">
              Trusted by <span className="text-[#2667ff] font-semibold">50+ Industries</span> across Kolkata
            </span>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-white block">Industrial</span>
                  <span className="text-[#2667ff] block">Cooling</span>
                  <span className="text-white block">Solutions</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-400 max-w-md leading-relaxed"
              >
                Kolkata&apos;s premier B2B partner for high-tonnage AC rentals. 
                Powering <span className="text-[#2667ff]">trade fairs</span>, <span className="text-[#2667ff]">factories</span>, 
                and <span className="text-[#2667ff]">commercial events</span> with industrial-grade cooling.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row sm:flex-nowrap items-center gap-4"
              >
                <button
                  onClick={handleWhatsAppClick}
                  disabled={isWhatsAppLoading}
                  className={`group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2667ff] text-white font-bold rounded-full hover:bg-[#1a4fd6] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(38,103,255,0.4)] whitespace-nowrap ${isWhatsAppLoading ? 'opacity-80 cursor-wait' : ''}`}
                >
                  {isWhatsAppLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Get Quote
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white font-semibold rounded-full hover:bg-[#2667ff] hover:border-[#2667ff] transition-all whitespace-nowrap"
                >
                  Explore Services
                </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-800"
              >
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-white">500<span className="text-[#2667ff]">+</span></div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-white">50<span className="text-[#2667ff]">+</span></div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-white">24<span className="text-[#2667ff]">/7</span></div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Support</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Image Card */}
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-[#2667ff]/30 rounded-3xl" />
                <div className="absolute -inset-8 border border-gray-800 rounded-3xl hidden lg:block" />
                
                {/* Image container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#132038]">
                  <Image
                    src="/images/hero.png"
                    alt="Cool Made & Co. commercial AC installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-[#2667ff] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Live Project
                  </div>
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#132038] border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2667ff]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">3000+ Tons</p>
                      <p className="text-gray-500 text-sm">Cooling Capacity</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#2667ff] rounded-tr-xl" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#2667ff] rounded-br-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 bg-[#132038]/80 backdrop-blur-sm border-t border-gray-800">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-gray-600 text-sm uppercase tracking-widest">Trade Fairs</span>
              <span className="text-[#2667ff]">★</span>
              <span className="text-gray-600 text-sm uppercase tracking-widest">Factories</span>
              <span className="text-[#2667ff]">★</span>
              <span className="text-gray-600 text-sm uppercase tracking-widest">Warehouses</span>
              <span className="text-[#2667ff]">★</span>
              <span className="text-gray-600 text-sm uppercase tracking-widest">Exhibitions</span>
              <span className="text-[#2667ff]">★</span>
              <span className="text-gray-600 text-sm uppercase tracking-widest">Corporate Events</span>
              <span className="text-[#2667ff]">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
