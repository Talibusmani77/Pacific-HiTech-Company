import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import ContactModal from '@/components/ContactModal';
import { equipmentList } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { FileText } from 'lucide-react';

const equipmentCarouselSlides = [
    {
        id: 1,
        image: '/images/equipment/carousel-1.jpg',
        caption: 'State-of-the-Art Machinery',
        description: 'Advanced equipment for precision manufacturing',
    },
    {
        id: 2,
        image: '/images/equipment/carousel-2.jpg',
        caption: 'CNC Technology',
        description: 'Computer-controlled precision and repeatability',
    },
    {
        id: 3,
        image: '/images/equipment/carousel-3.jpg',
        caption: 'Heavy-Duty Equipment',
        description: 'Capable of handling large-scale industrial projects',
    },
];

const Equipments: React.FC = () => {
    const t = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState<string>('');

    const handleRequestSpec = (machineName: string) => {
        setSelectedMachine(machineName);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen">
            {/* Top Carousel */}
            <AnimatedCarousel
                slides={equipmentCarouselSlides}
                autoplay={true}
                autoplayDelay={5000}
                effect="fade"
                height="500px"
                showCaptions={true}
            />

            {/* Page Header */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h1 className="text-h1 font-bold text-industrial-slate-900 mb-4">
                            {t.equipments.title}
                        </h1>
                        <p className="text-lg text-industrial-slate-700 max-w-3xl mx-auto">
                            {t.equipments.subtitle}
                        </p>
                    </div>

                    {/* Equipment Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipmentList.map((equipment, index) => (
                            <motion.div
                                key={equipment.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={equipment.image}
                                        alt={equipment.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate-900/80 to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-industrial-blue-500 text-white text-xs font-semibold rounded-full">
                                            {equipment.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-h3 font-bold text-industrial-slate-900 mb-3">
                                        {equipment.name}
                                    </h3>

                                    <ul className="space-y-2 mb-6">
                                        {equipment.specs.map((spec, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start space-x-2 text-industrial-slate-700"
                                            >
                                                <span className="w-1.5 h-1.5 bg-industrial-blue-500 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-sm">{spec}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => handleRequestSpec(equipment.name)}
                                        className="w-full btn-outline flex items-center justify-center space-x-2"
                                    >
                                        <FileText className="w-4 h-4" />
                                        <span>{t.equipments.requestSpec}</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            <ContactModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                prefilledData={{ service: selectedMachine }}
            />
        </div>
    );
};

export default Equipments;
