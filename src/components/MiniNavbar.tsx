import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { officeContacts } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const MiniNavbar: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Default to India office for general contact, or provide a way to choose?
    // Using India office as primary for now as per "head office" status, or maybe show both?
    // Requirement says "email and contact us (phone no. to click and call)".
    const contact = officeContacts.india;

    return (
        <div className="bg-industrial-slate-900 text-white py-2 text-sm z-[60] relative border-b border-industrial-slate-800">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse">
                    <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center space-x-2 text-industrial-slate-300 hover:text-white transition-colors group"
                    >
                        <Mail className="w-4 h-4 text-industrial-blue-400 group-hover:text-cta-blue transition-colors" />
                        <span>{t.miniNav.email} {contact.email}</span>
                    </a>
                    <a
                        href={`tel:${contact.tel}`}
                        className="flex items-center space-x-2 text-industrial-slate-300 hover:text-white transition-colors group"
                    >
                        <Phone className="w-4 h-4 text-industrial-blue-400 group-hover:text-cta-blue transition-colors" />
                        <span>{t.miniNav.call} {contact.tel}</span>
                    </a>
                </div>
                <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse text-industrial-slate-400">
                    {/* Optional: Add social links or other meta-links here if needed */}
                </div>
            </div>
        </div>
    );
};

export default MiniNavbar;
