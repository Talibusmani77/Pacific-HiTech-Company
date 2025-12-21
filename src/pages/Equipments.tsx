import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCarousel from '@/components/AnimatedCarousel';
import { equipmentList } from '@/data/content';


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
    // const t = useTranslation();

    return (
        <div className="min-h-screen">
            {/* Top Carousel */}
            <div className="relative z-0 equipment-carousel">
                <AnimatedCarousel
                    slides={equipmentCarouselSlides}
                    autoplay={true}
                    autoplayDelay={5000}
                    effect="fade"
                    height="600px"
                    showCaptions={false}
                />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .equipment-carousel .animated-carousel-container img {
                            object-fit: cover !important;
                            object-position: center !important;
                        }
                    `
                }} />

                {/* Central Overlay Text */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
                    <div className="max-w-4xl bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 pointer-events-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Our Equipment
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light"
                        >
                            Pacific Hitech operates a comprehensive range of state-of-the-art machinery from leading manufacturers. Our equipment enables us to deliver precision fabrication, cutting, and machining services with consistent quality.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Page Header */}
            <section className="section-padding bg-white">
                <div className="container-custom">

                    {/* Equipment Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipmentList.map((equipment, index) => (
                            <motion.div
                                key={equipment.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                {/* Image Container with Fixed Aspect Ratio */}
                                <div className="relative overflow-hidden bg-gray-100">
                                    <div className="aspect-square w-full">
                                        <img
                                            src={equipment.image}
                                            alt={equipment.name}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Name Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent py-6 px-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-white text-center tracking-wide">
                                            {equipment.name}
                                        </h3>
                                    </div>
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
