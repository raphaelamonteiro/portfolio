"use client";

import { FC, useState } from "react";
import { LuHeart } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Hobby {
    name: string;
    image: string;
}

interface HobbiesCarouselProps {
    items: Hobby[];
}

const HobbyCard: FC<{ item: Hobby }> = ({ item }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="group relative h-72 overflow-hidden rounded-[28px] border border-purple-500/40 bg-[#12091c] shadow-[0_0_25px_rgba(139,92,246,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/70 hover:shadow-[0_0_35px_rgba(236,72,153,0.3)]">

            <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#09000f] via-[#09000f]/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]">
                    {item.name}
                </h3>
            </div>

            <button
                type="button"
                onClick={() => setLiked((prev) => !prev)}
                aria-label={liked ? "Remover curtida" : "Curtir hobby"}
                className={`absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 ${liked
                    ? "border-pink-400 bg-pink-500/20 text-pink-400 shadow-[0_0_18px_rgba(236,72,153,0.6)]"
                    : "border-pink-400/40 bg-black/40 text-pink-300"
                    }`} >
                <LuHeart size={18} strokeWidth={2}
                    className={liked ? "heart-pop fill-pink-500" : ""} color={liked ? "#ec4899" : "#f9a8d4"} />
            </button>
        </div>
    );
};

const HobbiesCarousel: FC<HobbiesCarouselProps> = ({ items }) => {
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
};

export default HobbiesCarousel;
