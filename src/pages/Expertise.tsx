import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import StickyQuoteCTA from '@/components/StickyQuoteCTA';
import { expertiseSections } from '@/data/content';

import { AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const expertiseCarouselSlides = [
    {
        id: 1,
        image: '/images/expertise/exp1.webp',
        caption: 'Precision Engineering',
        description: 'Advanced fabrication and cutting technologies',
    },
    {
        id: 2,
        image: '/images/expertise/exp2.webp',
        caption: 'Industrial Excellence',
        description: 'Serving global clients with certified processes',
    },
    {
        id: 3,
        image: '/images/expertise/exp3.webp',
        caption: 'Quality Assurance',
        description: 'Tight tolerances and consistent results',
    },
];

const Expertise: React.FC = () => {
   
    const { isRTL } = useLanguage();
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            {/* Top Carousel with Full Image Display */}
            <div className="relative z-0 expertise-carousel">
                <AnimatedCarousel
                    slides={expertiseCarouselSlides}
                    autoplay={true}
                    autoplayDelay={5000}
                    effect="fade"
                    height="700px"
                    showCaptions={false}
                />
                {/* Add inline style to override image styling for full image display */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .expertise-carousel .animated-carousel-container img {
                            object-fit: contain !important;
                            object-position: center !important;
                        }
                    `
                }} />

                {/* Central Overlay Text */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
                    <div className="max-w-4xl bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 pointer-events-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Our Expertise in Heavy Fabrication, Precision Cutting & Custom Engineering
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light"
                        >
                            Pacific Hitech provides world-class services across heavy industrial fabrication, precision cutting, machining, ductwork and custom engineered solutions. Our machinery and processes ensure high accuracy and reliable delivery to global clients.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Expertise Sections */}
            <section className="bg-industrial-slate-50">
                {expertiseSections.map((section, index) => (
                    <div
                        key={section.id}
                        className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-industrial-slate-50'
                            }`}
                    >
                        <div className="container-custom">
                            <div
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${section.direction === 'right' ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: (section.direction === 'left' ? -50 : 50) * (isRTL ? -1 : 1) }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`${section.direction === 'right' ? 'lg:order-2' : ''}`}
                                >
                                    <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                                        <img
                                            src={section.image}
                                            alt={section.heading}
                                            className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: (section.direction === 'left' ? 50 : -50) * (isRTL ? -1 : 1) }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`${section.direction === 'right' ? 'lg:order-1' : ''}`}
                                >
                                    <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                                        {section.heading}
                                    </h2>
                                    <h3 className="text-h3 text-industrial-blue-600 mb-6">
                                        {section.subheading}
                                    </h3>

                                    {section.highlight && (
                                        <div className={`bg-industrial-blue-50 ${isRTL ? 'border-r-4 rounded-l-lg' : 'border-l-4 rounded-r-lg'} border-industrial-blue-500 p-4 mb-6`}>
                                            <div className="flex items-start space-x-3 rtl:space-x-reverse">
                                                <AlertCircle className="w-5 h-5 text-industrial-blue-600 flex-shrink-0 mt-0.5" />
                                                <p className="text-industrial-slate-800 font-medium">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {!section.highlight && (
                                        <p className="text-industrial-slate-700 leading-relaxed mb-6">
                                            {section.content}
                                        </p>
                                    )}

                                    {section.bullets && (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {section.bullets.map((bullet, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start space-x-2 rtl:space-x-reverse text-industrial-slate-700"
                                                >
                                                    <span className="w-2 h-2 bg-industrial-blue-500 rounded-full mt-2 flex-shrink-0" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Sticky Quote CTA */}
            <StickyQuoteCTA />
        </div>
    );
};

export default Expertise;