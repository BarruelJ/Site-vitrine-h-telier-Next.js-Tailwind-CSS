import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Hôtel de la Mer - Site Officiel",
  description: "Séjour de luxe face à l'océan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar /> {}
        {children}
        <Footer />
      </body>
    </html>
  );
}