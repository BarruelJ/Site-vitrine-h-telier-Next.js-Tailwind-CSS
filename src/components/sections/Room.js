import Image from "next/image";
import { ROOMS } from '@/data/roomsData';

export default function Rooms() {
  return (
    <section className="py-24 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Nos Chambres</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {ROOMS.map((room, index) => (
            <div key={room.id} className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}  >
              <div className="w-full md:w-1/2 relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {room.description}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {room.price}€ / nuit
                </p>
              </div>
            </div>
          ))}
            </div>
      </div>
    </section >
  );
}