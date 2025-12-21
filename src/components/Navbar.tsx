import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, FileText, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import MiniNavbar from './MiniNavbar';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBranchesOpen, setIsBranchesOpen] = useState(false);
    const location = useLocation();
    const { language, setLanguage, isRTL } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsBranchesOpen(false);
    }, [location]);

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.products, path: '/products' },
        { name: t.nav.expertise, path: '/expertise' },
        { name: t.nav.work, path: '/work' },
        { name: t.nav.equipments, path: '/equipments' },
    ];

    const branchLinks = [
        { name: t.nav.saudiOffice, path: '/branches#saudi' },
        { name: t.nav.indiaOffice, path: '/branches#india' },
    ];

    const handleBrochureClick = () => {
        window.open('/images/ph-brochure.pdf', '_blank');
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <div className="relative lg:fixed top-0 left-0 right-0 z-50 font-sans">
            <MiniNavbar />
            <nav
                className={`transition-all duration-300 w-full ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/90 backdrop-blur-sm'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo - Updated for WebP */}
                        <Link to="/" className="flex items-center space-x-3 group">
                            <img
                                src="/images/ph-logo.webp"
                                alt="Pacific Hitech Logo"
                                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-semibold transition-colors duration-200 relative group ${location.pathname === link.path
                                        ? 'text-cta-blue'
                                        : 'text-industrial-slate-700 hover:text-cta-blue'
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} h-0.5 bg-cta-blue transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </Link>
                            ))}

                            {/* Branches Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsBranchesOpen(true)}
                                onMouseLeave={() => setIsBranchesOpen(false)}
                            >
                                <button
                                    className={`text-sm font-semibold transition-colors duration-200 flex items-center space-x-1 ${location.pathname === '/branches'
                                        ? 'text-cta-blue'
                                        : 'text-industrial-slate-700 hover:text-cta-blue'
                                        }`}
                                >
                                    <span>{t.nav.branches}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${isBranchesOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isBranchesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden`}
                                        >
                                            {branchLinks.map((branch) => (
                                                <Link
                                                    key={branch.path}
                                                    to={branch.path}
                                                    className="block px-4 py-3 text-sm text-industrial-slate-700 hover:bg-industrial-blue-50 hover:text-cta-blue transition-colors duration-200"
                                                >
                                                    {branch.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                to="/contact"
                                className={`text-sm font-semibold transition-colors duration-200 ${location.pathname === '/contact'
                                    ? 'text-cta-blue'
                                    : 'text-industrial-slate-700 hover:text-cta-blue'
                                    }`}
                            >
                                {t.nav.contact}
                            </Link>

                            {/* Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-industrial-slate-100 hover:bg-industrial-slate-200 transition-colors duration-200"
                                aria-label="Toggle language"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="text-sm font-semibold">{language === 'en' ? 'العربية' : 'English'}</span>
                            </button>

                            {/* Brochure Button */}
                            <button
                                onClick={handleBrochureClick}
                                className="btn-primary flex items-center space-x-2"
                            >
                                <FileText className="w-4 h-4" />
                                <span>{t.nav.brochure}</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-industrial-slate-700 hover:text-cta-blue transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Side Drawer Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[100] shadow-2xl overflow-y-auto lg:hidden"
                        >
                            <div className="p-6 border-b border-industrial-slate-100 flex items-center justify-between">
                                <Link to="/" className="flex items-center space-x-3 group">
                            <img
                                src="/images/ph-logo.webp"
                                alt="Pacific Hitech Logo"
                                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-1 rounded-full hover:bg-industrial-slate-100 transition-colors"
                                >
                                    <X className="w-6 h-6 text-industrial-slate-500" />
                                </button>
                            </div>

                            <div className="p-4 space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${location.pathname === link.path
                                            ? 'bg-industrial-blue-50 text-cta-blue'
                                            : 'text-industrial-slate-700 hover:bg-industrial-slate-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {/* Mobile Branches */}
                                <div className="pt-2 pb-2">
                                    <button
                                        onClick={() => setIsBranchesOpen(!isBranchesOpen)}
                                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-industrial-slate-700 hover:bg-industrial-slate-50 rounded-lg transition-colors duration-200"
                                    >
                                        <span>{t.nav.branches}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${isBranchesOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isBranchesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden bg-industrial-slate-50 rounded-lg mx-4"
                                            >
                                                {branchLinks.map((branch) => (
                                                    <Link
                                                        key={branch.path}
                                                        to={branch.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block px-4 py-3 text-sm text-industrial-slate-600 hover:text-cta-blue transition-colors duration-200 border-b border-industrial-slate-200 last:border-0"
                                                    >
                                                        {branch.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${location.pathname === '/contact'
                                        ? 'bg-industrial-blue-50 text-cta-blue'
                                        : 'text-industrial-slate-700 hover:bg-industrial-slate-50'
                                        }`}
                                >
                                    {t.nav.contact}
                                </Link>
                            </div>

                            <div className="p-4 border-t border-industrial-slate-100 mt-auto">
                                <button
                                    onClick={toggleLanguage}
                                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-industrial-slate-100 hover:bg-industrial-slate-200 transition-colors duration-200 mb-3"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span className="text-sm font-semibold">{language === 'en' ? 'العربية' : 'English'}</span>
                                </button>

                                <button
                                    onClick={handleBrochureClick}
                                    className="w-full btn-primary flex items-center justify-center space-x-2"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>{t.nav.brochure}</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
