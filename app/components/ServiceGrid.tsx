'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ServiceGridItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  whatsappMessage: string;
}

const serviceGridItems: ServiceGridItem[] = [
  {
    id: 'tower-ac',
    title: 'Tower AC',
    description: 'High-capacity tower units perfect for trade fairs, exhibitions, and large commercial events.',
    image: '/images/Tower.jpeg',
    features: ['High BTU Output', 'Wide Coverage', 'Quick Setup'],
    whatsappMessage: 'Hello, I\'m interested in Tower AC rental for my commercial event.',
  },
  {
    id: 'portable-ac',
    title: 'Portable AC',
    description: 'Flexible mobile cooling solutions for warehouses, pop-up events, and temporary spaces.',
    image: '/images/portablee-ac.jpg.jpeg',
    features: ['No Installation', 'Plug & Play', 'Easy Mobility'],
    whatsappMessage: 'Hello, I need Portable AC units for my business. Please share details.',
  },
  {
    id: 'ductable-ac',
    title: 'Ductable AC',
    description: 'Industrial-grade centralized cooling for factories, manufacturing plants, and data centers.',
    image: '/images/duct.jpeg',
    features: ['Centralized Cooling', 'Uniform Distribution', 'Industrial Grade'],
    whatsappMessage: 'Hello, I\'m interested in Ductable AC systems for my facility.',
  },
];

function ServiceGridCard({ item, index }: { item: ServiceGridItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-500"
    >
      {/* Image Container with Hover Scale Effect */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500"
          />
        </motion.div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        
        {/* Title overlay on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {item.features.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={`https://api.whatsapp.com/send?phone=919874023696&text=${encodeURIComponent(item.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue/90 transition-all group-hover:scale-[1.02]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Get Quote
        </a>
      </div>
    </motion.div>
  );
}

export default function ServiceGrid() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full mb-4"
          >
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">
              Equipment Showcase
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our AC Rental Fleet
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Browse our range of commercial-grade cooling equipment designed for industrial applications.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceGridItems.map((item, index) => (
            <ServiceGridCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
