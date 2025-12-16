import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ContactFormProps {
    prefilledData?: {
        name?: string;
        service?: string;
        message?: string;
    };
    onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ prefilledData, onSuccess }) => {
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct mailto link
        const subject = `Inquiry from ${formData.name} - ${formData.service || 'General Inquiry'}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service}
Preferred Office: ${formData.office === 'saudi' ? 'Saudi Arabia' : 'India'}

Message:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:info.ksa@phitechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form or show success state
        setTimeout(() => {
            setIsSubmitting(false);
            if (onSuccess) onSuccess();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-industrial-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
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
                    <label htmlFor="office" className="block text-sm font-semibold mb-2">
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
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
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
                    placeholder="Tell us about your project requirements..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Opening Email Client...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                    </>
                )}
            </button>

            <p className="text-sm text-industrial-slate-600 text-center">
                This will open your default email client to send the message.
            </p>
        </form>
    );
};

export default ContactForm;
