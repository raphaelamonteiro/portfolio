"use client";

import { useState } from "react";
import { LuHeart } from "react-icons/lu";

interface Hobby {
    name: string;
    image: string;
}

interface HobbyCardProps {
    item: Hobby;
}

export function HobbyCard({ item }: HobbyCardProps) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="group relative h-72 overflow-hidden rounded-[28px] border border-[var(--moon-pink-hover)]/40 transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/70">
            <img src={item.image} alt={item.name} loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105" />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--moon-pink-hover)] via-[var(--moon-pink-hover)]/5 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">
                    {item.name}
                </h3>
            </div>

            <button
                type="button"
                onClick={() => setLiked((prev) => !prev)}
                aria-label={liked ? "Dislike curtida" : "Like hobby"}
                className={`absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 ${liked
                    ? "border-[var(--moon-pink)] text-[var(--moon-pink)]"
                    : "border[var(--moon-pink)-] text-[var(--moon-pink)]"
                    }`}>
                <LuHeart size={18} strokeWidth={2}
                    className={liked ? "heart-pop fill-[var(--moon-pink)]" : ""} />
            </button>
        </div>
    );
}