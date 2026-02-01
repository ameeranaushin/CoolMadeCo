'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Auto Expo 2025',
    category: 'Trade Fair',
    description: 'Provided climate control for 50,000 sq ft exhibition space with 30+ Tower AC units at Kolkata Trade Fair grounds.',
    stats: { units: '30+', coverage: '50,000 sq ft', duration: '10 days' },
  },
  {
    id: 2,
    title: 'Textile Manufacturing Plant',
    category: 'Factory',
    description: 'Complete ductable AC installation for continuous 24/7 industrial cooling at a Kolkata textile manufacturing unit.',
    stats: { units: '12', coverage: '25,000 sq ft', duration: 'Ongoing' },
  },
  {
    id: 3,
    title: 'E-Commerce Warehouse',
    category: 'Warehouse',
    description: 'Temperature-controlled environment for sensitive inventory storage using portable units at Kolkata logistics hub.',
    stats: { units: '45', coverage: '80,000 sq ft', duration: '6 months' },
  },
  {
    id: 4,
    title: 'Corporate Summit 2025',
    category: 'Corporate Event',
    description: 'Multi-zone cooling solution for a 3-day corporate leadership conference in Kolkata convention center.',
    stats: { units: '20', coverage: '15,000 sq ft', duration: '3 days' },
  },
];

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#132038]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2667ff]/10 rounded-full mb-6 border border-[#2667ff]/20"
          >
            <span className="text-sm font-semibold text-[#2667ff] uppercase tracking-wide">
              Our Work
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            From trade fairs to manufacturing plants, we&apos;ve delivered reliable cooling solutions 
            for businesses across industries.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0a1628] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#2667ff]/30 transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-[#2667ff]/10 to-[#0a1628] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#2667ff]/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-[#2667ff] text-white text-sm font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2667ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                  <div>
                    <div className="text-xl font-bold text-[#2667ff]">{project.stats.units}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">AC Units</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#2667ff]">{project.stats.coverage}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Coverage</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#2667ff]">{project.stats.duration}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
