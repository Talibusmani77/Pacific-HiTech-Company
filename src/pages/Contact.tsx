import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import ContactForm from '@/components/ContactForm';
import { officeContacts } from '@/data/content';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactCarouselSlides = [
    {
        id: 1,
        image: '/images/contact/contact.webp',
        caption: "Let's Connect",
        description: 'We respond within 24 hours',
    },
    {
        id: 2,
        image: '/images/contact/expert.webp',
        caption: 'Expert Support',
        description: 'Our team is ready to assist you',
    },
    {
        id: 3,
        image: '/images/contact/global.webp',
        caption: 'Global Reach',
        description: 'Serving clients worldwide',
    },
];

const Contact: React.FC = () => {
    // Simplified logic as form state is handled in ContactForm
    // We can keep 'isSuccess' if we want custom message here, but simpler to delegate.
    // Removing unused state entirely for now.

    return (
        <div className="min-h-screen">
            {/* Hero Carousel */}
            <AnimatedCarousel
                slides={contactCarouselSlides}
                autoplay={true}
                autoplayDelay={5000}
                effect="fade"
                height="400px"
                showCaptions={true}
            />

            {/* Contact Section */}
            <section className="section-padding lg:pt-48 lg:pb-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                                Send Us a Message
                            </h2>



                            <ContactForm />
                        </motion.div>


                        {/* Office Contact Cards - Saudi Arabia First */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">
                                Our Offices
                            </h2>

                            {/* Saudi Arabia Office Card - First */}
                            <div className="bg-gradient-to-br from-industrial-blue-50 to-white p-8 rounded-xl shadow-lg border border-industrial-blue-100">
                                <div className="inline-block px-4 py-2 bg-industrial-blue-500 text-white rounded-full text-sm font-semibold mb-4">
                                    Branch Office
                                </div>
                                <h3 className="text-h3 font-bold text-industrial-slate-900 mb-6">
                                    Saudi Arabia
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-5 h-5 text-industrial-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.saudi.tel}
                                            </p>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.saudi.mobile}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Mail className="w-5 h-5 text-industrial-blue-600 mt-1 flex-shrink-0" />
                                        <a
                                            href={`mailto:${officeContacts.saudi.email}`}
                                            className="text-industrial-blue-600 hover:text-industrial-blue-700 transition-colors duration-200"
                                        >
                                            {officeContacts.saudi.email}
                                        </a>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-industrial-blue-600 mt-1 flex-shrink-0" />
                                        <p className="text-industrial-slate-700">
                                            {officeContacts.saudi.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* India Office Card - Second */}
                            <div className="bg-gradient-to-br from-industrial-steel-50 to-white p-8 rounded-xl shadow-lg border border-industrial-steel-100">
                                <div className="inline-block px-4 py-2 bg-industrial-steel-600 text-white rounded-full text-sm font-semibold mb-4">
                                    Head Office
                                </div>
                                <h3 className="text-h3 font-bold text-industrial-slate-900 mb-6">
                                    India
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-5 h-5 text-industrial-steel-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.india.tel}
                                            </p>
                                            <p className="text-industrial-slate-700">
                                                {officeContacts.india.mobile}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Mail className="w-5 h-5 text-industrial-steel-600 mt-1 flex-shrink-0" />
                                        <a
                                            href={`mailto:${officeContacts.india.email}`}
                                            className="text-industrial-blue-600 hover:text-industrial-blue-700 transition-colors duration-200"
                                        >
                                            {officeContacts.india.email}
                                        </a>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-industrial-steel-600 mt-1 flex-shrink-0" />
                                        <p className="text-industrial-slate-700">
                                            {officeContacts.india.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
