'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  capacity: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'India International Trade Fair',
    category: 'Trade Fair',
    capacity: '3000+ Tons',
    description: 'Large-Scale Exhibition Cooling',
    image: '/images/internationalTradeFair.png',
    size: 'large',
  },
  {
    id: 2,
    title: 'Textile Manufacturing Hub',
    category: 'Factory',
    capacity: '150 Tons',
    description: 'Industrial Factory Cooling',
    image: '/images/textliehub.jpeg',
    size: 'medium',
  },
  {
    id: 3,
    title: 'E-Commerce Fulfillment Center',
    category: 'Warehouse',
    capacity: '300 Tons',
    description: 'Industrial Warehouse Cooling',
    image: '/images/e-commerce.jpg',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Auto Expo 2025',
    category: 'Exhibition',
    capacity: '500+ Tons',
    description: 'Large-Scale Exhibition Cooling',
    image: '/images/autoExpo.jpg',
    size: 'large',
  },
  {
    id: 5,
    title: 'Pharmaceutical Cold Storage',
    category: 'Industrial',
    capacity: '80 Tons',
    description: 'Cold Storage Facility',
    image: '/images/pharmacy.jpeg',
    size: 'small',
  },
  {
    id: 6,
    title: 'Corporate Tech Summit',
    category: 'Corporate Event',
    capacity: '120 Tons',
    description: 'Event Venue Cooling',
    image: '/images/techsummit.jpg',
    size: 'small',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1',
  };

  const handleEnquireClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const message = `Hi Cool Made & Co., I am interested in a similar project to "${project.title}" (${project.description}). Please provide details.`;
      window.open(`https://api.whatsapp.com/send?phone=919874023696&text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      setTimeout(() => setIsLoading(false), 1000);
    }, 100);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale }}
      className={`group relative overflow-hidden rounded-3xl bg-gray-900 ${sizeClasses[project.size]}`}
    >
      {/* Parallax Image Container */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
        {/* Project Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full min-h-[300px] md:min-h-[400px] p-6 md:p-8 flex flex-col justify-end">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-blue text-white text-xs font-semibold rounded-full uppercase tracking-wide">
            {project.category}
          </span>
        </motion.div>

        {/* Project Info */}
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-blue transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {project.description}
            </span>
          </div>

          {/* Hover Reveal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button
              onClick={handleEnquireClick}
              disabled={isLoading}
              className={`inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  Enquire for Similar Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-blue/50 rounded-3xl transition-colors duration-300 z-30 pointer-events-none" />
    </motion.div>
  );
}

export default function ProjectGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Parallax */}
        <motion.div style={{ y: headerY }} className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 rounded-full mb-6"
          >
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">
              Project Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Kolkata&apos;s Most Trusted Partner
            <span className="text-brand-blue"> for Major Exhibitions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Serving Kolkata and beyond with high-tonnage cooling solutions. From trade fairs at Milan Mela 
            to factories across the city—our portfolio proves our capability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-brand-blue font-semibold mt-4"
          >
            📍 Proudly serving all of Kolkata & West Bengal.
          </motion.p>
        </motion.div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* B2B Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            <span className="text-brand-blue font-semibold">Note:</span> All projects shown are commercial/industrial scale (50+ tons). 
            We specialize exclusively in high-tonnage B2B requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
