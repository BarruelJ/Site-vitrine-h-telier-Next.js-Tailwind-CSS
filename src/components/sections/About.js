import { ABOUT_CONTENT } from "@/data/ui";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32  bg-hotel-sable text-center">
      <div className="max-w-3xl mx-auto px-6">
        
        <span className="text-hotel-gold uppercase tracking-[0.3em] text-[10px] font-sans block mb-4">
          {ABOUT_CONTENT.badge}
        </span>
        
       
        <h2 className="text-5xl md:text-6xl font-serif text-hotel-abysse max-w-2xl leading-tight italic">
          {ABOUT_CONTENT.title}
        </h2>
        
        
        <p className="mt-8 text-gray-600 leading-relaxed text-lg font-light">
          {ABOUT_CONTENT.description}
        </p>
        
        <div className="mt-10 h-px w-20 mx-auto" />
      </div>
    </section>
  );
}