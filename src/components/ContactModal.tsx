import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

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
    // State and handlers removed; handled by ContactForm


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



                    {/* Form */}
                    <div className="p-6">
                        <ContactForm
                            prefilledData={prefilledData}
                            onSuccess={onClose}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
