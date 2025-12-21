import AnimatedCarousel from '@/components/AnimatedCarousel';
import Lightbox from '@/components/Lightbox';
import { projectsData } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';

import React, { useState } from 'react';

const workCarouselSlides = [
    {
        id: 1,
        image: '/images/work/project.webp',
        caption: 'Project Excellence',
        description: 'Delivering complex industrial projects on time',
    },
    {
        id: 2,
        image: '/images/work/quality.webp',
        caption: 'Quality Craftsmanship',
        description: 'Precision and attention to detail in every project',
    },
    {
        id: 3,
        image: '/images/work/client.webp',
        caption: 'Client Satisfaction',
        description: 'Building long-term partnerships through excellence',
    },
];

const Work: React.FC = () => {
    const t = useTranslation();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState(6);

    const displayedProjects = projectsData.slice(0, visibleProjects);

    const handleLoadMore = () => {
        setVisibleProjects((prev) => prev + 6);
    };

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="min-h-screen">
            {/* Top Carousel */}
            <div className="relative z-0 work-carousel">
                <AnimatedCarousel
                    slides={workCarouselSlides}
                    autoplay={true}
                    autoplayDelay={5000}
                    effect="fade"
                    height="600px"
                    showCaptions={false}
                />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .work-carousel .animated-carousel-container img {
                            object-fit: cover !important;
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
                            Our Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light"
                        >
                            Explore our portfolio of successfully completed projects across diverse industrial sectors. Each project showcases our commitment to quality, precision, and timely delivery.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">



                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="card cursor-pointer group"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/90 via-industrial-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-bold text-xl mb-2">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleProjects < projectsData.length && (
                        <div className="text-center mt-12">
                            <button onClick={handleLoadMore} className="btn-primary">
                                {t.work.loadMore}
                            </button>
                        </div>
                    )}

                    {/* No Results */}
                    {projectsData.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-industrial-slate-600 text-lg">
                                {t.work.noProjects}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    images={displayedProjects.map((p) => p.image)}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    captions={displayedProjects.map((p) => p.title)}
                />
            )}
        </div>
    );
};

export default Work;
