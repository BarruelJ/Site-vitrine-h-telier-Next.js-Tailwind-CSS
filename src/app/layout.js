import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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