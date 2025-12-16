import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import Lightbox from '@/components/Lightbox';
import { projectsData } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { Filter } from 'lucide-react';

const workCarouselSlides = [
    {
        id: 1,
        image: '/images/work/carousel-1.jpg',
        caption: 'Project Excellence',
        description: 'Delivering complex industrial projects on time',
    },
    {
        id: 2,
        image: '/images/work/carousel-2.jpg',
        caption: 'Quality Craftsmanship',
        description: 'Precision and attention to detail in every project',
    },
    {
        id: 3,
        image: '/images/work/carousel-3.jpg',
        caption: 'Client Satisfaction',
        description: 'Building long-term partnerships through excellence',
    },
];

const Work: React.FC = () => {
    const t = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState(6);

    const categories = ['All', 'Fabrication', 'Laser', 'Machining', 'Ductwork', 'Piping'];

    const filteredProjects =
        selectedCategory === 'All'
            ? projectsData
            : projectsData.filter((project) => project.category === selectedCategory);

    const displayedProjects = filteredProjects.slice(0, visibleProjects);

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
            <AnimatedCarousel
                slides={workCarouselSlides}
                autoplay={true}
                autoplayDelay={5000}
                effect="fade"
                height="500px"
                showCaptions={true}
            />

            {/* Page Header */}
            <section className="section-padding lg:pt-48 lg:pb-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h1 className="text-h1 font-bold text-industrial-slate-900 mb-4">
                            {t.work.title}
                        </h1>
                        <p className="text-lg text-industrial-slate-700 max-w-3xl mx-auto">
                            {t.work.subtitle}
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        <div className="flex items-center space-x-2 text-industrial-slate-600">
                            <Filter className="w-5 h-5" />
                            <span className="font-semibold">{t.work.filter}</span>
                        </div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setVisibleProjects(6);
                                }}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-cta-blue text-white shadow-lg scale-105'
                                    : 'bg-industrial-slate-100 text-industrial-slate-700 hover:bg-industrial-slate-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

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
                                        <p className="text-white/90 text-sm mb-3">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleProjects < filteredProjects.length && (
                        <div className="text-center mt-12">
                            <button onClick={handleLoadMore} className="btn-primary">
                                {t.work.loadMore}
                            </button>
                        </div>
                    )}

                    {/* No Results */}
                    {filteredProjects.length === 0 && (
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
