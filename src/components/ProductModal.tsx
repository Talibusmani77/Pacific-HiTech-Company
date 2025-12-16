import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import ContactForm from './ContactForm';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const t = useTranslation();
    const [showForm, setShowForm] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (product) {
            setShowForm(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [product]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    };

    return (
        <AnimatePresence>
            {product && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                        className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-industrial-slate-900 md:text-white flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Section */}
                        <div className={`w-full md:w-1/2 relative bg-industrial-slate-100 ${showForm ? 'hidden md:block' : 'h-64 md:h-auto'}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/60 to-transparent md:bg-gradient-to-r" />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                            {!showForm ? (
                                <>
                                    <div className="mb-auto">
                                        <h2 className="text-3xl font-bold text-industrial-slate-900 mb-4">
                                            {product.name}
                                        </h2>
                                        <div className="w-16 h-1 bg-cta-blue mb-6 rounded-full" />
                                        <p className="text-lg text-industrial-slate-600 leading-relaxed mb-8">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-industrial-slate-100">
                                        <h3 className="font-semibold text-industrial-slate-900 mb-4">
                                            Interested in this product?
                                        </h3>
                                        <button
                                            onClick={() => setShowForm(true)}
                                            className="btn-primary w-full flex items-center justify-center space-x-2"
                                        >
                                            <span>{t.common.requestQuote}</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="h-full flex flex-col">
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="flex items-center text-industrial-slate-500 hover:text-industrial-blue-600 mb-6 transition-colors self-start"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-1" />
                                        Back to details
                                    </button>

                                    <h3 className="text-2xl font-bold text-industrial-slate-900 mb-1">
                                        Request a Quote
                                    </h3>
                                    <p className="text-industrial-slate-600 mb-6">
                                        For {product.name}
                                    </p>

                                    <div className="flex-grow overflow-y-auto">
                                        <ContactForm
                                            prefilledData={{ service: `Quote: ${product.name}` }}
                                            onSuccess={onClose}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
