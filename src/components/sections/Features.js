import Image from "next/image"; 
import { FEATURES } from "@/data/ui";

export default function Features() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 italic">Une Expérience Unique</h2>
          <div className="h-px w-20 bg-blue-200 mx-auto mt-6"></div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((service) => (
            <div key={service.id} className="group cursor-default">
             
              <div className="relative mb-6 overflow-hidden rounded-2xl h-80 shadow-sm">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <h3 className="text-2xl font-serif text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}