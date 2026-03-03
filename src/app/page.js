import About from '@/components/sections/About';
import BookingForm from '@/components/sections/BookingForm';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Rooms from '@/components/sections/Room';
import Restaurant from '@/components/sections/Restaurant';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-hotel-sable">

      <Hero />

      <section id="booking" className="scroll-mt-20 max-w-5xl mx-auto px-6 -mt-16 relative z-10">
        <Suspense fallback={
          <div className="bg-white p-8 md:p-10 shadow-sm border border-hotel-abysse/5 h-24 animate-pulse" />
        }>
          <BookingForm />
        </Suspense>
      </section>

      <About />

      <Features />

      <Rooms />

      <Restaurant />

      {/* CTA */}
      <section className="py-24 flex flex-col items-center text-center px-6 bg-hotel-sable">
        <h3 className="font-serif text-3xl text-hotel-abysse mb-6 italic">
          Prêt à réserver votre séjour ?
        </h3>
        <a href="#booking" className="bg-hotel-abysse text-hotel-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-hotel-gold transition-all duration-500">
          Vérifier les disponibilités
        </a>
      </section>

    </main>
  );
}