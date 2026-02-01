'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_eqkywht';
const EMAILJS_TEMPLATE_ID = 'template_8v5z45q';
const EMAILJS_PUBLIC_KEY = 'mxtoyiaFxmABGTQuG';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    location: 'Kolkata'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS send - using exact template variables: name, reply_to, message
      const message = `Phone: ${formData.phone}\nEvent Type: ${formData.eventType}\nLocation: ${formData.location}`;
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          reply_to: 'coolmadecompany@gmail.com',
          message: message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', eventType: '', location: 'Kolkata' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2667ff]/10 rounded-full mb-6 border border-[#2667ff]/20"
            >
              <span className="text-sm font-semibold text-[#2667ff] uppercase tracking-wide">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Scale Your
              <span className="text-[#2667ff]"> Cooling Solution?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed mb-8"
            >
              Connect with our team for a customized quote. We specialize in large-scale commercial 
              projects and provide 24/7 support.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=919874023696&text=Hi%20Cool%20Made%20%26%20Co.%2C%20I%20am%20interested%20in%20a%20commercial%20cooling%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#2667ff]/20 rounded-full flex items-center justify-center group-hover:bg-[#2667ff]/30 transition-colors">
                  <svg className="w-5 h-5 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone / WhatsApp</div>
                  <div className="font-semibold group-hover:text-[#2667ff] transition-colors">+91 98740 23696</div>
                </div>
              </a>

              <a 
                href="mailto:coolmadecompany@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#2667ff]/20 rounded-full flex items-center justify-center group-hover:bg-[#2667ff]/30 transition-colors">
                  <svg className="w-5 h-5 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-semibold group-hover:text-[#2667ff] transition-colors">coolmadecompany@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2667ff]/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2667ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold">12/1 Ismail Street, Kolkata 700014</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="https://api.whatsapp.com/send?phone=919874023696&text=Hi%20Cool%20Made%20%26%20Co.%2C%20I%20am%20interested%20in%20a%20commercial%20cooling%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2667ff] text-white font-bold rounded-full hover:bg-[#1a4fd6] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(38,103,255,0.4)]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#132038] rounded-3xl p-8 lg:p-10 border border-[#2667ff]/30"
          >
            {/* B2B Disclaimer - Bold at top */}
            <div className="mb-6 p-4 bg-[#2667ff]/10 rounded-xl border-2 border-[#2667ff]">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2667ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-bold text-white text-lg">B2B Commercial Enquiries Only</p>
                  <p className="text-gray-400 text-sm mt-1">We do not provide residential services. Minimum 50+ ton capacity requirements.</p>
                </div>
              </div>
            </div>

            {/* Success/Error Messages */}
            <AnimatePresence mode="wait">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="mb-6 p-6 bg-green-500/10 rounded-xl border border-green-500/30"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="font-bold text-green-400 text-lg">Inquiry Sent Successfully!</p>
                      <p className="text-gray-400 text-sm">Our team will contact you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="mb-6 p-6 bg-red-500/10 rounded-xl border border-red-500/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-red-400 text-lg">Something went wrong</p>
                      <p className="text-gray-400 text-sm">Please try again or contact us via WhatsApp.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Contact Name <span className="text-[#2667ff]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-[#0a1628] border-2 border-[#2667ff]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2667ff] transition-colors"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number <span className="text-[#2667ff]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-[#0a1628] border-2 border-[#2667ff]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2667ff] transition-colors"
                />
              </div>

              {/* Event Type Dropdown */}
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-400 mb-2">
                  Event Type <span className="text-[#2667ff]">*</span>
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a1628] border-2 border-[#2667ff]/30 rounded-xl text-white focus:outline-none focus:border-[#2667ff] transition-colors"
                >
                  <option value="">Select event type</option>
                  <option value="Trade Fair / Exhibition">Trade Fair / Exhibition</option>
                  <option value="Warehouse / Logistics">Warehouse / Logistics</option>
                  <option value="Factory / Manufacturing">Factory / Manufacturing</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Data Center">Data Center</option>
                  <option value="Other Commercial">Other Commercial</option>
                </select>
              </div>

              {/* Location Field */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">
                  Location <span className="text-[#2667ff]">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Kolkata"
                  className="w-full px-4 py-3 bg-[#0a1628] border-2 border-[#2667ff]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2667ff] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-8 py-4 bg-[#2667ff] text-white font-bold rounded-xl transition-all border-2 border-[#2667ff] ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-[#1a4fd6] hover:shadow-[0_0_30px_rgba(38,103,255,0.4)]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Inquiry...
                  </span>
                ) : (
                  'Submit Commercial Inquiry'
                )}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to be contacted regarding your commercial AC rental inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
