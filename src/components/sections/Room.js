import Image from "next/image";
import {urlFor} from "@/sanity/lib/image";

export default function Rooms({rooms}) {
  return (
    <section id="rooms"className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-hotel-gold uppercase tracking-[0.3em] text-[10px] font-sans block mb-4">Sérénité</span>
          <h2 className="text-5xl md:text-6xl font-serif text-hotel-abysse max-w-2xl leading-tight">
            Hébergements
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {rooms.map((room, index) => (
            <div key={room._id} className={`flex flex-col md:flex-row items-center gap-12 mb-68 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}  >
              <div className="w-full md:w-3/5 relative h-140 overflow-hidden shadow-sm">
                <Image
                  src={urlFor(room.image).width(1200).quality(90).url()}
                  alt={room.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-hotel-abysse mb-4">
                    {room.name}
                  </h3>
                  <p className="text-hotel-abysse leading-relaxed text-lg mb-6">
                    {room.description}
                  </p>
                </div>
                <p className="text-hotel-gold font-serif italic text-xl">
                  <span className="text-sm font-sans uppercase tracking-widest not-italic mr-2">À partir de</span>
                  {room.price}€
                </p>
                <button className="group relative text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-hotel-abysse transition-colors duration-500 cursor-pointer w-fit pb-2">
                  Découvrir la suite
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-hotel-gold transition-all duration-500 group-hover:w-full"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}