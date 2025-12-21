import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import { officeContacts } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { Phone, Mail, MapPin, Navigation, FileText } from 'lucide-react';

const branchesCarouselSlides = [
    {
        id: 1,
        image: '/images/branches/global.webp',
        caption: 'Global Presence',
        description: 'Serving clients across India and the Middle East',
    },
    {
        id: 2,
        image: '/images/branches/india.webp',
        caption: 'India Head Office',
        description: 'Located in New Delhi, India',
    },
    {
        id: 3,
        image: '/images/branches/saudi.webp',
        caption: 'Saudi Arabia Branch',
        description: 'Serving the Middle East from Riyadh',
    },
];

const Branches: React.FC = () => {
    const t = useTranslation();
    const location = useLocation();

    useEffect(() => {
        // Scroll to section if hash is present
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    // Function to handle map click
    const handleMapClick = (directionsUrl: string) => {
        window.open(directionsUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen">
            {/* Top Carousel */}
            <div className="relative z-0 branches-carousel">
                <AnimatedCarousel
                    slides={branchesCarouselSlides}
                    autoplay={true}
                    autoplayDelay={5000}
                    effect="fade"
                    height="600px"
                    showCaptions={false}
                />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .branches-carousel .animated-carousel-container img {
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
                            Our Locations
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light"
                        >
                            Pacific Hitech operates from two strategic locations to serve our global clientele. Contact the office nearest to you for personalized service and support.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* India Office */}
            <section id="india" className="section-padding bg-industrial-slate-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Contact Info */}
                            <div className="p-8 md:p-12">
                                <div className="inline-block px-4 py-2 bg-industrial-blue-100 text-industrial-blue-700 rounded-full text-sm font-semibold mb-4">
                                    {t.branches.headOffice}
                                </div>
                                <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                                    {officeContacts.india.name}
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-industrial-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-industrial-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-industrial-slate-900 mb-1">
                                                {t.branches.phone}
                                            </h4>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.india.tel}
                                            </p>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.india.mobile}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-industrial-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-industrial-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-industrial-slate-900 mb-1">
                                                {t.branches.email}
                                            </h4>
                                            <a
                                                href={`mailto:${officeContacts.india.email}`}
                                                className="text-industrial-blue-600 hover:text-industrial-blue-700 transition-colors duration-200"
                                            >
                                                {officeContacts.india.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-industrial-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-industrial-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-industrial-slate-900 mb-1">
                                                {t.branches.address}
                                            </h4>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.india.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-6">
                                        <a
                                            href={officeContacts.india.directionsUrl || officeContacts.india.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary inline-flex items-center space-x-2"
                                        >
                                            <Navigation className="w-5 h-5" />
                                            <span>{t.branches.getDirections}</span>
                                        </a>
                                        <button
                                            onClick={() => window.open('/images/ph-brochure2.pdf', '_blank')}
                                            className="btn-primary inline-flex items-center space-x-2"
                                        >
                                            <FileText className="w-5 h-5" />
                                            <span>{t.nav.brochure}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Map - Now Clickable */}
                            <div
                                className="h-[500px] lg:h-auto relative cursor-pointer group"
                                onClick={() => handleMapClick(officeContacts.india.directionsUrl || officeContacts.india.mapUrl)}
                            >
                                <iframe
                                    src={officeContacts.india.embedUrl || officeContacts.india.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, pointerEvents: 'none' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="India Office Location"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-6 py-3 rounded-full shadow-lg">
                                        <span className="text-industrial-blue-600 font-semibold flex items-center space-x-2">
                                            <Navigation className="w-5 h-5" />
                                            <span>Click for Directions</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Saudi Arabia Office */}
            <section id="saudi" className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Map - Now Clickable */}
                            <div
                                className="h-[500px] lg:h-auto order-2 lg:order-1 relative cursor-pointer group"
                                onClick={() => handleMapClick(officeContacts.saudi.directionsUrl || officeContacts.saudi.mapUrl)}
                            >
                                <iframe
                                    src={officeContacts.saudi.embedUrl || officeContacts.saudi.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, pointerEvents: 'none' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Saudi Arabia Office Location"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-6 py-3 rounded-full shadow-lg">
                                        <span className="text-industrial-blue-600 font-semibold flex items-center space-x-2">
                                            <Navigation className="w-5 h-5" />
                                            <span>Click for Directions</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 md:p-12 order-1 lg:order-2">
                                <div className="inline-block px-4 py-2 bg-industrial-steel-100 text-industrial-steel-700 rounded-full text-sm font-semibold mb-4">
                                    {t.branches.branchOffice}
                                </div>
                                <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                                    {officeContacts.saudi.name}
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-industrial-steel-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-industrial-steel-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-industrial-slate-900 mb-1">
                                                {t.branches.phone}
                                            </h4>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.saudi.tel}
                                            </p>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.saudi.mobile}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-industrial-steel-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-industrial-steel-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-industrial-slate-900 mb-1">
                                                {t.branches.email}
                                            </h4>
                                            <a
                                                href={`mailto:${officeContacts.saudi.email}`}
                                                className="text-industrial-blue-600 hover:text-industrial-blue-700 transition-colors duration-200"
                                            >
                                                {officeContacts.saudi.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-industrial-steel-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-industrial-steel-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-industrial-slate-900 mb-1">
                                                {t.branches.address}
                                            </h4>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.saudi.address}
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href={officeContacts.saudi.directionsUrl || officeContacts.saudi.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary inline-flex items-center space-x-2 mt-4"
                                    >
                                        <Navigation className="w-5 h-5" />
                                        <span>{t.branches.getDirections}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Branches;