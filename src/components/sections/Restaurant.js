import Image from "next/image";
import { CARTE_RESTAURANT } from '@/data/restaurantData';

export default function Restaurant() {
    return (
        <section className="py-32 bg-hotel-sable px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-hotel-gold uppercase tracking-[0.3em] text-[10px] font-sans block mb-4">{CARTE_RESTAURANT.subtitle}</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-hotel-abysse max-w-2xl leading-tight">{CARTE_RESTAURANT.title}</h2>
                </div>
            </div>

            <div className="w-full md:w-3/5 overflow-hidden mx-auto shadow-hotel-abysse/10">
                <Image
                    src="/images/restaurant.jpg"
                    alt="L'ambiance de notre restaurant"
                    width={1920}
                    height={1080}
                    className="object-cover hover:scale-105 transition-transform duration-1000 ease-out w-full h-full"
                />
            </div>


            <div className="mb-20 mt-70 flex flex-col items-center gap-12">
                <h2 className="text-5xl md:text-6xl font-serif text-hotel-abysse max-w-2xl leading-tight">{CARTE_RESTAURANT.titleDescription}</h2>
                <span className="text-hotel-gold uppercase tracking-[0.3em] text-[10px] font-sans block mb-4">{CARTE_RESTAURANT.description}</span>
            </div>

            <div className="flex flex-col items-center gap-24 mb-68">
                {CARTE_RESTAURANT.menuRestaurant.map((plat, index) => (
                    <div key={plat.id} className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
                        <span className="w-1/2 h-px bg-hotel-gold/20 mx-auto mb-12"></span>
                        <div>
                            <span className="text-hotel-gold font-serif italic text-sm">0{index + 1}</span>
                            <h3 className="text-3xl font-serif font-bold text-hotel-abysse mb-4">{plat.name}</h3>
                            <p className="text-hotel-abysse/70 leading-relaxed font-sans text-sm max-w-sm mb-6">{plat.description}</p>
                        </div>
                        <p className="text-hotel-gold font-serif italic mt-8 text-xl text-right">
                            <span className="text-sm font-sans uppercase tracking-widest not-italic mr-2">À partir de</span>
                            {plat.price}€
                        </p>

                    </div>
                ))}
            </div>

        </section>
    );
}
