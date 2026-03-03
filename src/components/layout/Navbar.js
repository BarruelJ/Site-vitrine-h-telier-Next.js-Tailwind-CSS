import { NAV_LINKS } from "@/data/layoutData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-white/70 backdrop-blur-md border-b border-white/20 transition-all duration-500">
      <div className="text-xl font-serif text-hotel-abysse tracking-[0.2em] uppercase italic">
        Mer & Horizon
      </div>

      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative group text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-hotel-abysse transition-all duration-300"
          >
            {link.label}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-hotel-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <a href="#booking" className="bg-hotel-abysse text-hotel-white px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-hotel-gold transition-all duration-300 cursor-pointer active:scale-95 shadow-sm">
        Réserver
      </a>
    </nav>
  );
}