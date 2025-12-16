import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { companyStats, whyChooseUs } from '@/data/content';
import { Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    const t = useTranslation();

    const statsIcons = [
        <CheckCircle className="w-8 h-8 text-cta-blue" />,
        <Users className="w-8 h-8 text-cta-blue" />,
        <Globe className="w-8 h-8 text-cta-blue" />
    ];

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="bg-industrial-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero/steel-fabrication.jpg"
                        alt="About Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        {t.about.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        {t.about.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Main Content & Stats */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-industrial-slate-900 mb-6">
                                {t.home.aboutTitle}
                            </h2>
                            <p className="text-lg text-industrial-slate-700 leading-relaxed mb-6">
                                {t.home.aboutDesc}
                            </p>
                            <p className="text-lg text-industrial-slate-700 leading-relaxed">
                                Pacific Hitech is committed to delivering excellence in every project. With our state-of-the-art facilities and experienced team, we ensure precision, quality, and timely delivery for all industrial needs.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                        >
                            {companyStats.map((stat, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-industrial-slate-100 text-center">
                                    <div className="flex justify-center mb-4">
                                        {statsIcons[index]}
                                    </div>
                                    <h3 className="text-3xl font-bold text-industrial-slate-900 mb-2">{stat.value}</h3>
                                    <p className="text-industrial-slate-600 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Values / Why Choose Us */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUs.map((pillar, index) => (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-industrial-slate-50 p-8 rounded-xl hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-industrial-slate-900 mb-4">{pillar.title}</h3>
                                <p className="text-industrial-slate-600">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Marquee */}
            <section className="py-16 bg-white border-y border-industrial-slate-100 overflow-hidden">
                <div className="container-custom mb-10 text-center">
                    <h2 className="text-2xl font-bold text-industrial-slate-900 mb-2">{t.about.clientsTitle}</h2>
                </div>
                <div className="relative w-full overflow-hidden">
                    <div className="flex space-x-12 animate-marquee whitespace-nowrap">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                            <div key={index} className="inline-block w-40 h-24 bg-industrial-slate-50 rounded-lg flex items-center justify-center border border-industrial-slate-200">
                                <span className="text-industrial-slate-400 font-bold">Client Logo {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Quote CTA */}
            <section className="py-20 bg-industrial-blue-600 text-white text-center">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">{t.about.quoteTitle}</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            {t.about.quoteDesc}
                        </p>
                        <Link to="/contact" className="btn-primary bg-white text-industrial-blue-900 hover:bg-industrial-slate-100 inline-flex items-center space-x-2">
                            <span>{t.about.getQuote}</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
