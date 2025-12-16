import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import { officeContacts } from '@/data/content';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';

const contactCarouselSlides = [
    {
        id: 1,
        image: '/images/contact/carousel-1.jpg',
        caption: "Let's Connect",
        description: 'We respond within 24 hours',
    },
    {
        id: 2,
        image: '/images/contact/carousel-2.jpg',
        caption: 'Expert Support',
        description: 'Our team is ready to assist you',
    },
    {
        id: 3,
        image: '/images/contact/carousel-3.jpg',
        caption: 'Global Reach',
        description: 'Serving clients worldwide',
    },
];

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        office: 'saudi', // Default to Saudi Arabia
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                office: 'saudi',
                message: '',
            });
        }, 3000);
    };

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

                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                                >
                                    <p className="text-green-800 font-semibold">
                                        ✓ Message sent successfully!
                                    </p>
                                    <p className="text-green-700 text-sm mt-1">
                                        We'll respond within 24 hours.
                                    </p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-semibold mb-2"
                                        >
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-semibold mb-2"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-semibold mb-2"
                                        >
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-semibold mb-2"
                                        >
                                            Service Interest
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="fabrication">Steel Fabrication</option>
                                            <option value="laser">Laser Cutting</option>
                                            <option value="cnc">CNC Machining</option>
                                            <option value="ductwork">Ductwork</option>
                                            <option value="piping">Piping Work</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="office"
                                            className="block text-sm font-semibold mb-2"
                                        >
                                            Preferred Office
                                        </label>
                                        <select
                                            id="office"
                                            name="office"
                                            value={formData.office}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                        >
                                            <option value="saudi">Saudi Arabia (Branch)</option>
                                            <option value="india">India (Head Office)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : isSuccess ? (
                                        <>
                                            <span>✓ Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-sm text-industrial-slate-600 text-center">
                                    We typically respond within 24 hours
                                </p>
                            </form>
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
