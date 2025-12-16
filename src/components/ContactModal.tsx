import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    prefilledData?: {
        name?: string;
        service?: string;
        message?: string;
    };
}

const ContactModal: React.FC<ContactModalProps> = ({
    isOpen,
    onClose,
    prefilledData,
}) => {
    const [formData, setFormData] = useState({
        name: prefilledData?.name || '',
        email: '',
        phone: '',
        company: '',
        service: prefilledData?.service || '',
        office: 'saudi', // Default to Saudi Arabia
        message: prefilledData?.message || '',
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
            onClose();
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

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-industrial-slate-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                        <h2 className="text-h3">Get in Touch</h2>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full hover:bg-industrial-slate-100 flex items-center justify-center transition-colors duration-200"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Success Message */}
                    {isSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mx-6 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                        >
                            <p className="text-green-800 font-semibold">
                                ✓ Message sent successfully!
                            </p>
                            <p className="text-green-700 text-sm mt-1">
                                We'll respond within 24 hours.
                            </p>
                        </motion.div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
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
                                <label htmlFor="office" className="block text-sm font-semibold mb-2">
                                    Preferred Office
                                </label>
                                <select
                                    id="office"
                                    name="office"
                                    value={formData.office}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                                >
                                    <option value="saudi">Saudi Arabia (Branch)</option>
                                    <option value="india">India (Head Office)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent resize-none"
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
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
