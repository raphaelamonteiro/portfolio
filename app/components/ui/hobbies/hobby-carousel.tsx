"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { HobbyCard } from "./hobby-card";

interface Hobby {
    name: string;
    image: string;
}

interface HobbiesCarouselProps {
    items: Hobby[];
}

export default function HobbiesCarousel({
    items,
}: HobbiesCarouselProps) {
    return (
        <div className="mx-auto mt-12 w-full max-w-6xl px-4">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="kuromi-swiper"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={`${item.name}-${index}`}>
                        <HobbyCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}