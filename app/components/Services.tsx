'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  icon: React.ReactNode;
  whatsappMessage: string;
}

const services: Service[] = [
  {
    id: 'tower-ac',
    title: 'Tower AC Units',
    description: 'High-capacity tower air conditioners ideal for large open spaces requiring powerful and consistent cooling coverage.',
    features: [
      'High BTU capacity',
      'Wide area coverage',
      'Energy efficient operation',
      'Quick installation',
    ],
    useCases: ['Trade Fairs', 'Exhibitions', 'Corporate Events', 'Large Halls'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    whatsappMessage: 'Hello, I\'m interested in renting Tower AC units for my commercial space. Please provide details on capacity and pricing.',
  },
  {
    id: 'portable-ac',
    title: 'Portable AC Units',
    description: 'Flexible, mobile cooling solutions perfect for temporary setups and spaces requiring quick climate control.',
    features: [
      'Easy mobility',
      'No installation required',
      'Plug and play operation',
      'Multiple capacity options',
    ],
    useCases: ['Warehouses', 'Pop-up Events', 'Temporary Offices', 'Film Sets'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    whatsappMessage: 'Hello, I\'m interested in Portable AC rental solutions for a commercial event. Please share availability and specifications.',
  },
  {
    id: 'ductable-ac',
    title: 'Ductable AC Systems',
    description: 'Centralized cooling systems designed for factories, manufacturing plants, and large commercial facilities requiring uniform temperature control.',
    features: [
      'Centralized cooling',
      'Uniform temperature distribution',
      'Industrial-grade capacity',
      'Professional installation included',
    ],
    useCases: ['Factories', 'Manufacturing Plants', 'Data Centers', 'Large Offices'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    whatsappMessage: 'Hello, I need Ductable AC systems for my industrial facility. Please provide a consultation and quote.',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#132038] rounded-3xl p-8 lg:p-10 border border-gray-800 hover:border-[#2667ff]/30 transition-all duration-500"
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-[#2667ff]/10 rounded-2xl flex items-center justify-center text-[#2667ff] mb-6 group-hover:bg-[#2667ff] group-hover:text-white transition-all duration-300">
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">Features</h4>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-[#2667ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Use Cases */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">Ideal For</h4>
        <div className="flex flex-wrap gap-2">
          {service.useCases.map((useCase, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#0a1628] text-gray-300 text-sm rounded-full border border-gray-700"
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={`https://api.whatsapp.com/send?phone=919874023696&text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#2667ff] text-white font-bold rounded-full hover:bg-[#1a4fd6] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(38,103,255,0.4)] group/btn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Direct Inquiry
        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </motion.article>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2667ff]/10 rounded-full mb-6 border border-[#2667ff]/20"
          >
            <span className="text-sm font-semibold text-[#2667ff] uppercase tracking-wide">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Commercial AC Rental Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Enterprise-grade cooling equipment tailored for industrial and commercial applications. 
            No residential services—100% B2B focus.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* B2B Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 bg-[#2667ff]/5 border border-[#2667ff]/20 rounded-2xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-[#2667ff]">Commercial Clients Only</span>
          </div>
          <p className="text-gray-400 text-sm">
            Our services are exclusively designed for businesses, events, and industrial applications. 
            We do not offer residential AC rentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
