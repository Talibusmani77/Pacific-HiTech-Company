import AnimatedCarousel from '@/components/AnimatedCarousel';
import { heroSlides, productsList, projectsData, serviceCards, whyChooseUs, clientsList } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const t = useTranslation();
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

    const scrollToExpertise = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section with Carousel */}
            <section className="relative h-screen">
                <div className="absolute inset-0 z-0">
                    <AnimatedCarousel
                        slides={heroSlides}
                        autoplay={true}
                        autoplayDelay={5000}
                        effect="fade"
                        height="100vh"
                        showCaptions={false}
                    />
                </div>

                {/* Dark Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1] pointer-events-none" />

                {/* Hero Content - Centered */}
                <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
                    <div className="container-custom text-center pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-5xl mx-auto px-4"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
                                {t.home.heroTitle}
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-light">
                                {t.home.heroSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={scrollToExpertise}
                                    className="btn-primary flex items-center space-x-2 text-base px-8 py-3"
                                >
                                    <span>{t.home.exploreExpertise}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => window.open('/brochure.pdf', '_blank')}
                                    className="btn-outline border-2 border-white text-white hover:bg-white hover:text-cta-blue flex items-center space-x-2 text-base px-8 py-3"
                                >
                                    <span>{t.home.viewBrochure}</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="section-padding bg-industrial-slate-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                                {t.home.aboutTitle}
                            </h2>
                            <p className="text-lg text-industrial-slate-700 leading-relaxed mb-8">
                                {t.home.aboutDesc}
                            </p>
                            <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
                                <span>{t.home.readMore}</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group"
                        >
                            <img
                                src="/images/hero/man.webp"
                                alt="About Pacific Hitech"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Range Section - Smooth Auto-Scrolling */}
            <section className="py-16 bg-industrial-slate-900 text-white overflow-hidden">
                <div className="container-custom mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">
                        {t.products.title}
                    </h3>
                    <p className="text-white/70 mb-8">
                        {t.products.subtitle}
                    </p>
                </div>

                <div className="relative w-full overflow-x-auto scrollbar-hide mb-10">
                    <div className="flex space-x-8 animate-marquee-reverse pb-4" style={{ width: 'max-content' }}>
                        {[...productsList, ...productsList, ...productsList].map((product, index) => (
                            <div
                                key={`${product.id}-${index}`}
                                className="inline-flex flex-col items-center w-64 flex-shrink-0"
                            >
                                <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-center p-2 cursor-pointer">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-lg font-semibold text-white text-center px-2 line-clamp-2">
                                    {product.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
                        <span>{t.products.viewDetails}</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Services Quick Cards */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                            {t.home.ourServices}
                        </h2>
                        <p className="text-lg text-industrial-slate-600 max-w-2xl mx-auto">
                            {t.home.servicesSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceCards.map((service, index) => {
                            const IconComponent = (Icons as any)[service.icon];
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card group cursor-pointer"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            {IconComponent && (
                                                <IconComponent className="w-10 h-10 text-white" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-h3 font-semibold text-industrial-slate-900 mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-industrial-slate-600">{service.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-gradient-to-br from-industrial-blue-600 to-industrial-steel-600 text-white">
                <div className="container-custom">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-h2 font-bold mb-6">{t.home.whyChoose}</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            {t.home.whySubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUs.map((pillar, index) => {
                            const IconComponent = (Icons as any)[pillar.icon];
                            return (
                                <motion.div
                                    key={pillar.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                                >
                                    {IconComponent && (
                                        <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                    )}
                                    <h3 className="text-h3 font-semibold mb-4">{pillar.title}</h3>
                                    <p className="text-white/90">{pillar.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Clients Section - Smooth Auto-Scrolling */}
            <section className="py-12 bg-white border-b border-industrial-slate-100 overflow-hidden">
                <div className="container-custom mb-8 text-center">
                    <h3 className="text-2xl font-bold text-industrial-slate-900">
                        {t.home.ourClients}
                    </h3>
                    <p className="text-industrial-slate-500">
                        {t.home.clientsSubtitle}
                    </p>
                </div>

                <div className="relative w-full overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-12 animate-marquee items-center pb-4" style={{ width: 'max-content' }}>
                        {[...clientsList, ...clientsList, ...clientsList].map((client, index) => (
                            <div key={`${client.id}-${index}`} className="inline-block w-40 h-24 flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                            {t.home.featuredProjects}
                        </h2>
                        <p className="text-lg text-industrial-slate-600 max-w-2xl mx-auto">
                            {t.home.projectsSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {projectsData.slice(0, 6).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div>
                                        <h4 className="text-white font-semibold">{project.title}</h4>
                                        <p className="text-white/80 text-sm">{project.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/work" className="btn-primary inline-flex items-center space-x-2">
                            <span>{t.home.viewAllProjects}</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="section-padding bg-industrial-slate-900 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-h2 font-bold mb-6">
                            {t.home.needSolution}
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            {t.home.solutionSubtitle}
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center space-x-2"
                        >
                            <span>{t.home.contactUs}</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
