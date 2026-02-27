import Image from "next/image"; 

const SERVICES = [
  { id: 1, title: "Spa & Bien-être", desc: "Sauna, hammam et massages face à l'océan.", image: "/images/services/spa.jpg" },
  { id: 2, title: "Gastronomie", desc: "Une cuisine raffinée avec des produits locaux.", image: "/images/services/gastronomy.jpg" },
  { id: 3, title: "Piscine chauffée", desc: "Baignez-vous toute l'année à 28°C.", image: "/images/services/pool.jpg" },
];

export default function Features() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Une Expérience Unique</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-xl h-64">
                <Image src={service.image} 
                       alt={service.title} 
                       fill
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}