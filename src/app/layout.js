import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Hôtel de la Mer - Site Officiel",
  description: "Séjour de luxe face à l'océan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden relative">
        <Navbar /> {}
        {children}
        <Footer />
      </body>
    </html>
  );
}