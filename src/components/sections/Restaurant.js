import Image from "next/image";


export default function Restaurant({restaurant}) {
    return (
        <section id="restaurant" className="py-32 bg-hotel-sable">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 px-6">
                    <span className="text-hotel-gold uppercase tracking-[0.3em] text-[10px] font-sans block mb-4">Une expérience culinaire inoubliable</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-hotel-abysse max-w-2xl leading-tight">Le Restaurant</h2>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <Image
                    src="/images/restaurant.jpg"
                    alt="L'ambiance de notre restaurant"
                    width={1920}
                    height={1080}
                    className="object-cover max-h-[62vh] hover:scale-105 transition-transform duration-1000 ease-out w-full h-full"
                />
            </div>


            <div className="mb-20 mt-40 flex flex-col items-center gap-12">
                <div className="w-px h-20 bg-linear-to-b from-hotel-gold to-transparent mb-8"></div>
                <h2 className="text-5xl md:text-6xl font-serif text-hotel-abysse max-w-2xl leading-tight">La Carte du Jour</h2>
                <span className="text-hotel-gold uppercase tracking-[0.3em] text-[10px] font-sans block mb-4">La carte évolue au fil des saisons pour vous offrir des plats frais et savoureux.</span>
            </div>

            <div className="flex flex-col items-center gap-24">
                {restaurant.map((plat, index) => (
                    <div key={plat._id} className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
                        <span className="w-1/2 h-px bg-linear-to-r from-transparent via-hotel-gold to-transparent mx-auto mb-12 block"></span>
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

            <div className="py-40 flex flex-col items-center text-center px-6">
                <div className="w-px h-20 bg-linear-to-b from-transparent to-hotel-gold mb-8"></div>
                <h3 className="font-serif text-3xl text-hotel-abysse mb-6 italic">Une table face à l'horizon ?</h3>
                <p className="font-sans uppercase tracking-[0.2em] text-[10px] text-hotel-gold">Réservez votre expérience sensorielle</p>
            </div>

        </section>
    );
}
