import { FOOTER_SECTIONS } from "@/data/layoutData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-white font-serif font-bold text-xl mb-4">MER & HORIZON</h3>
          <p className="text-sm leading-relaxed">
            Une parenthèse enchantée sur la côte d'Opale. Luxe, calme et volupté depuis 1954.
          </p>
        </div>

        {FOOTER_SECTIONS.map((section, index) => (
          <div key={index}>
            
            <h4 className="text-white font-bold mb-4">{section.title}</h4>

            <ul className="space-y-2 text-sm">
              
              {section.links && section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}

              
              {section.infos && section.infos.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Recevez nos offres exclusives.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="bg-slate-800 border-none p-2 rounded-l text-sm w-full focus:ring-1 focus:ring-blue-500"
            />
            <button className="bg-blue-600 p-2 rounded-r hover:bg-blue-700 transition">
              OK
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 Hôtel Mer & Horizon. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Mentions légales</a>
          <a href="#" className="hover:text-white">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}