import { FOOTER_SECTIONS } from "@/data/layoutData";

export default function Footer() {
  return (
    <div className="bg-hotel-abysse text-hotel-white/60 py-24 pt-40 px-6 border-t border-hotel-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

        <div className="flex flex-col gap-6">
          <h3 className="text-hotel-white font-serif text-2xl tracking-[0.15em] uppercase italic">
            Mer & Horizon
          </h3>
          <p className="text-xs leading-relaxed font-sans max-w-xs tracking-wide">
            Une parenthèse enchantée sur la côte d'Opale. Luxe, calme et sérénité depuis 1954.
          </p>
        </div>

        {FOOTER_SECTIONS.map((section, index) => (
          <div key={index}>
            <h4 className="text-hotel-gold font-sans text-[10px] uppercase tracking-[0.3em] mb-8">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-4 text-xs font-sans tracking-wide">
              {section.links?.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-hotel-gold transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
              {section.infos?.map((info, i) => (
                <li key={i} className="cursor-default">{info}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="text-hotel-gold font-sans text-[10px] uppercase tracking-[0.3em] mb-8">
            Newsletter
          </h4>
          <p className="text-xs mb-6 tracking-wide">Recevez nos invitations exclusives.</p>
          <div className="relative group">
            <input
              type="email"
              id="newsletter-email"
              aria-label="Adresse email pour la newsletter"
              placeholder="votre@email.com"
              className="bg-transparent border-b border-hotel-white/20 py-2 text-xs w-full focus:outline-none focus:border-hotel-gold transition-colors font-sans placeholder:text-hotel-white/30"
            />
            <button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest font-bold text-hotel-gold hover:text-hotel-white transition-colors cursor-pointer">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-hotel-white/5 text-[10px] uppercase tracking-[0.15em] flex flex-col md:flex-row justify-between items-center gap-8">
        <p>© 2026 Hôtel Mer & Horizon. Tous droits réservés.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-hotel-gold transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-hotel-gold transition-colors">Confidentialité</a>
        </div>
      </div>
    </div>
  );
}