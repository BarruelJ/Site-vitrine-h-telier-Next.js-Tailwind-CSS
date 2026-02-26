import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Hôtel de la Mer</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Réservez votre séjour dans l'un des plus beaux cadres de la côte.
        </p>
      </section>

      {/* Booking Section - On fait chevaucher le formulaire sur le Hero */}
      <section className="max-w-5xl mx-auto px-6 -mt-12">
        <BookingForm />
      </section>

      {/* Content Section */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 italic">"L'horizon à portée de vue"</h2>
      </section>
    </main>
  );
}