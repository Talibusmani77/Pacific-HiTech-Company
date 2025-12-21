import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import { equipmentList } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';

const equipmentCarouselSlides = [
    {
        id: 1,
        image: '/images/equipment/state.webp',
        caption: 'State-of-the-Art Machinery',
        description: 'Advanced equipment for precision manufacturing',
    },
    {
        id: 2,
        image: '/images/equipment/tech.webp',
        caption: 'CNC Technology',
        description: 'Computer-controlled precision and repeatability',
    },
    {
        id: 3,
        image: '/images/equipment/eqi.webp',
        caption: 'Heavy-Duty Equipment',
        description: 'Capable of handling large-scale industrial projects',
    },
];

const Equipments: React.FC = () => {
    const t = useTranslation();

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
            <section className="section-padding lg:pt-48 lg:pb-24 bg-white">
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

                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-h3 font-bold text-industrial-slate-900 mb-3 text-center">
                                        {equipment.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Equipments;
