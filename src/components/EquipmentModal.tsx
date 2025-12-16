import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Equipment {
    id: number;
    name: string;
    category: string;
    specs: string[];
    image: string;
    fullDescription?: string;
    features?: string[];
}

interface EquipmentModalProps {
    equipment: Equipment | null;
    onClose: () => void;
}

const EquipmentModal: React.FC<EquipmentModalProps> = ({ equipment, onClose }) => {
    // Reset form state when equipment changes or modal opens
    useEffect(() => {
        if (equipment) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [equipment]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    };

    if (!equipment) return null;

    return (
        <AnimatePresence>
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
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-industrial-slate-100">
                        <img
                            src={equipment.image}
                            alt={equipment.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/60 to-transparent md:bg-gradient-to-r" />
                        <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
                            <h2 className="text-2xl font-bold">{equipment.name}</h2>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                        <div className="mb-auto">
                            <h2 className="text-3xl font-bold text-industrial-slate-900 mb-2 hidden md:block">
                                {equipment.name}
                            </h2>
                            <p className="text-industrial-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                                {equipment.category}
                            </p>
                            <div className="w-16 h-1 bg-industrial-slate-200 mb-6 rounded-full" />

                            <p className="text-lg text-industrial-slate-600 leading-relaxed mb-6">
                                {equipment.fullDescription || "Detailed description available upon request."}
                            </p>

                            {equipment.features && (
                                <div className="mb-6">
                                    <h4 className="font-bold text-industrial-slate-900 mb-2">Key Features</h4>
                                    <ul className="space-y-2">
                                        {equipment.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-2 text-industrial-slate-600">
                                                <span className="w-1.5 h-1.5 bg-industrial-blue-500 rounded-full mt-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="font-bold text-industrial-slate-900 mb-2">Specifications</h4>
                                <div className="flex flex-wrap gap-2">
                                    {equipment.specs.map((spec, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-industrial-slate-100 text-industrial-slate-700 rounded-full text-sm">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default EquipmentModal;
