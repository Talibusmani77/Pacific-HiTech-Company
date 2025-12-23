import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { officeContacts } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
    const t = useTranslation();
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.products, path: '/products' },
        { name: t.nav.expertise, path: '/expertise' },
        { name: t.nav.work, path: '/work' },
        { name: t.nav.equipments, path: '/equipments' },
        { name: t.nav.branches, path: '/branches' },
        { name: t.nav.contact, path: '/contact' },
    ];

    const handleBrochureClick = () => {
        window.open('/images/ph-brochure.pdf', '_blank');
    };

    return (
        <footer className="bg-industrial-slate-900 text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Column 1: Logo & About */}
                    <div>
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-3 group">
                            <img
                                src="/images/ph-logo.webp"
                                alt="Pacific Hitech Logo"
                                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </Link>
                        <p className="text-industrial-slate-300 text-sm leading-relaxed pt-5">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-h3 mb-6">{t.footer.quickLinks}</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-industrial-slate-300 hover:text-industrial-blue-400 transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-industrial-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={handleBrochureClick}
                                    className="text-industrial-slate-300 hover:text-industrial-blue-400 transition-colors duration-200 text-sm flex items-center group"
                                >
                                    <span className="w-0 h-0.5 bg-industrial-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                    {t.footer.brochure}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Information */}
                    <div>
                        <h3 className="text-h3 mb-6">{t.footer.contactUs}</h3>

                        {/* India Office */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-industrial-blue-400 mb-3">
                                {language === 'ar' ? officeContacts.india.nameAr : officeContacts.india.nameEn}
                            </h4>
                            <ul className="space-y-2 text-sm text-industrial-slate-300">
                                <li className="flex items-start space-x-2">
                                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <div>{officeContacts.india.tel}</div>
                                        <div>{officeContacts.india.mobile}</div>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <a
                                        href={`mailto:${officeContacts.india.email}`}
                                        className="hover:text-industrial-blue-400 transition-colors duration-200"
                                    >
                                        {officeContacts.india.email}
                                    </a>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <a
                                        href={`mailto:${officeContacts.saudi.email}`}
                                        className="hover:text-industrial-blue-400 transition-colors duration-200"
                                    >
                                        {officeContacts.saudi.email}
                                    </a>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>{officeContacts.india.address}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Saudi Arabia Office */}
                        <div>
                            <h4 className="font-semibold text-industrial-blue-400 mb-3">
                                {language === 'ar' ? officeContacts.saudi.nameAr : officeContacts.saudi.nameEn}
                            </h4>
                            <ul className="space-y-2 text-sm text-industrial-slate-300">
                                <li className="flex items-start space-x-2">
                                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <div>{officeContacts.saudi.tel}</div>
                                        <div>{officeContacts.saudi.mobile}</div>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <a
                                        href={`mailto:${officeContacts.saudi.email}`}
                                        className="hover:text-industrial-blue-400 transition-colors duration-200"
                                    >
                                        {officeContacts.saudi.email}
                                    </a>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>{officeContacts.saudi.address}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-industrial-slate-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <p className="text-sm text-industrial-slate-400">
                            {t.footer.copyright.replace('{year}', currentYear.toString())}
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.linkedin.com/company/pacifichitech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-industrial-slate-800 flex items-center justify-center hover:bg-industrial-blue-500 transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-industrial-slate-400">
                            <a
                                href="https://www.nexbern.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-industrial-blue-400 transition-colors duration-200"
                            >
                                {t.footer.developedBy}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
