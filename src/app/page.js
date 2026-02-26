import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white py-32 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
          L'Éveil des Sens
        </h1>
        <p className="text-slate-300 text-xl max-w-2xl mx-auto font-light">
          Découvrez un refuge d'exception où le luxe rencontre la sérénité de l'Atlantique.
        </p>
      </section>

      {/* réservation */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-10">
        <BookingForm />
      </section>

      {/* Services */}
      <Features />

      {/* Texte */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">L'Hôtel de la Mer</span>
          <h2 className="text-3xl font-serif mt-4 text-gray-900">Plus qu'un hôtel, une destination.</h2>
          <p className="mt-6 text-gray-600 leading-loose">
            Depuis 1954, nous cultivons l'art de recevoir. Nos 24 chambres et suites 
            offrent toutes une vue imprenable sur l'horizon, pour un dépaysement total 
            à seulement quelques heures de Paris.
          </p>
        </div>
      </section>
    </main>
  );
}