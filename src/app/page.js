import About from '@/components/sections/About';
import BookingForm from '@/components/sections/BookingForm';
import Features from '@/components/sections/Features'; 
import Hero from '@/components/sections/Hero';
import Rooms from '@/components/sections/Room';

export default function Home() {
  return (
    <main className="min-h-screen bg-hotel-sable overflow-x-hidden" >

      {/* Hero */}
      <Hero />

      {/* Réservation */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-10">
      <BookingForm />
      </section>
      {/* Texte */}
      <About />

      {/* Services */}
      <Features />

      {/* Chambres */}
      <Rooms />


    </main>
  );
}