import Image from "next/image";
import { HERO_CONTENT } from "@/data/ui";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center text-white">
      <Image
        src={HERO_CONTENT.image}
        alt={HERO_CONTENT.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
          {HERO_CONTENT.title}
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
          {HERO_CONTENT.subtitle}
        </p>

        <button className="mt-10 bg-hotel-white/10 backdrop-blur-md text-hotel-white px-8 py-4 rounded-full font-sans uppercase tracking-[0.2em] text-xs border border-hotel-white/30 hover:border-hotel-gold transition-all duration-500 active:scale-95 cursor-pointer">
          {HERO_CONTENT.cta}
        </button>
      </div>
    </section>
  );
}