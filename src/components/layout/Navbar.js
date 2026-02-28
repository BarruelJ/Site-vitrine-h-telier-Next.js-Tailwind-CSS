import { NAV_LINKS } from "@/data/layoutData";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="text-xl font-serif font-bold text-hotel-abysse tracking-tighter">
        MER & HORIZON
      </div>
      <div className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-hotel-abysse hover:text-hotel-gold transition"
        >
          {link.label}
        </a>
      ))}
      </div>
      <button className="bg-hotel-abysse text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-hotel-gold transition cursor-pointer">
        Réserver
      </button>
    </nav>
  );
}