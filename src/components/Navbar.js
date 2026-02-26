export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="text-xl font-serif font-bold text-blue-900 tracking-tighter">
        MER & HORIZON
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-blue-600 transition">Accueil</a>
        <a href="#" className="hover:text-blue-600 transition">Chambres</a>
        <a href="#" className="hover:text-blue-600 transition">Restaurant</a>
        <a href="#" className="hover:text-blue-600 transition">Contact</a>
      </div>

      <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition">
        Réserver
      </button>
    </nav>
  );
}