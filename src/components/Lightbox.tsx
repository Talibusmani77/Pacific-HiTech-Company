import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    captions?: string[];
}

const Lightbox: React.FC<LightboxProps> = ({
    images,
    currentIndex: initialIndex,
    onClose,
    captions = [],
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') onClose();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                onClick={onClose}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                    aria-label="Close lightbox"
                >
                    <X className="w-6 h-6 text-white" />
                </button>

                {/* Previous Button */}
                {images.length > 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevious();
                        }}
                        className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                )}

                {/* Next Button */}
                {images.length > 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                )}

                {/* Image */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-7xl max-h-[90vh] mx-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex]}
                        alt={captions[currentIndex] || `Image ${currentIndex + 1}`}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                    {captions[currentIndex] && (
                        <p className="text-white text-center mt-4 text-lg">
                            {captions[currentIndex]}
                        </p>
                    )}
                    {images.length > 1 && (
                        <p className="text-white/60 text-center mt-2 text-sm">
                            {currentIndex + 1} / {images.length}
                        </p>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
