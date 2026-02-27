import { ABOUT_CONTENT } from "@/data/ui";

export default function About() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        
        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
          {ABOUT_CONTENT.badge}
        </span>
        
       
        <h2 className="text-4xl md:text-5xl font-serif mt-4 text-slate-900 italic">
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