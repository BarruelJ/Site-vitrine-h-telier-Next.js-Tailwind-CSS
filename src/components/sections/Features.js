import Image from "next/image";
import { FEATURES } from "@/data/ui";

export default function Features() {
  return (
    <section className="py-32 bg-hotel-sable px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <span className="text-hotel-gold uppercase tracking-[0.3em] text-[10px] font-sans block mb-4">Services Exclusifs</span>
          <h2 className="text-5xl md:text-6xl font-serif text-hotel-abysse max-w-2xl leading-tight">
            Une Expérience Unique
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-x-16 items-start">
          {FEATURES.map((service, index) => (
            <div
              key={service.id}
              className={`md:col-span-4 ${index === 1 ? 'md:mt-24' : ''} ${index === 2 ? 'md:mt-12' : ''}`}
            >

              <div className="relative mb-8 overflow-hidden aspect-3/4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              <h3 className="text-xl font-serif text-hotel-abysse mb-4 uppercase tracking-wider italic">
                {service.title}
              </h3>
              <p className="text-hotel-abysse/70 leading-relaxed font-sans text-sm max-w-xs">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}