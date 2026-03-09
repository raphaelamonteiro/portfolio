"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Hobby {
    name: string;
    image: string;
}

interface HobbiesCarouselProps {
    items: Hobby[];
}

const HobbiesCarousel: FC<HobbiesCarouselProps> = ({ items }) => {
    return (
        <div className="w-full max-w-6xl mx-auto mt-12">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-64 rounded-2xl overflow-hidden group">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                                <p className="text-white text-lg font-semibold text-center">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HobbiesCarousel;