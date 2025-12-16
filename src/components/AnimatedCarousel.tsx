import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface CarouselSlide {
    id: number;
    image: string;
    caption?: string;
    description?: string;
}

interface AnimatedCarouselProps {
    slides: CarouselSlide[];
    autoplay?: boolean;
    autoplayDelay?: number;
    effect?: 'slide' | 'fade';
    height?: string;
    showCaptions?: boolean;
}

const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
    slides,
    autoplay = true,
    autoplayDelay = 5000,
    effect = 'fade',
    height = '600px',
    showCaptions = true,
}) => {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        // Pause autoplay on hover
        const swiperElement = swiperRef.current;
        if (swiperElement && autoplay) {
            const handleMouseEnter = () => {
                if (swiperElement.swiper?.autoplay) {
                    swiperElement.swiper.autoplay.stop();
                }
            };
            const handleMouseLeave = () => {
                if (swiperElement.swiper?.autoplay) {
                    swiperElement.swiper.autoplay.start();
                }
            };

            swiperElement.addEventListener('mouseenter', handleMouseEnter);
            swiperElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                swiperElement.removeEventListener('mouseenter', handleMouseEnter);
                swiperElement.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [autoplay]);

    return (
        <div ref={swiperRef} className="w-full" style={{ height }}>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={
                    autoplay
                        ? {
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }
                        : false
                }
                effect={effect}
                fadeEffect={{ crossFade: true }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            {/* Image */}
                            <img
                                src={slide.image}
                                alt={slide.caption || `Slide ${slide.id}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            {/* Gradient Overlay */}
                            {showCaptions && (slide.caption || slide.description) && (
                                <div className="gradient-overlay-vertical" />
                            )}

                            {/* Caption */}
                            {showCaptions && (slide.caption || slide.description) && (
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                                    <div className="container-custom">
                                        {slide.caption && (
                                            <h3 className="text-h2 md:text-h1 text-white font-bold mb-2 animate-fade-in">
                                                {slide.caption}
                                            </h3>
                                        )}
                                        {slide.description && (
                                            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in">
                                                {slide.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AnimatedCarousel;
