import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';
import { useTranslation } from '@/hooks/useTranslation';

const StickyQuoteCTA: React.FC = () => {
    const t = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible] = useState(true);

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="fixed bottom-6 right-6 z-40"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-cta-blue text-white px-6 py-3 rounded-full shadow-2xl hover:bg-cta-hover hover:scale-105 transition-all duration-300 flex items-center space-x-2 group animate-pulse-glow"
                            aria-label="Request a quote"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-semibold">{t.common.requestQuote}</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default StickyQuoteCTA;
