import './globals.css';

export const metadata = {
  title: 'Medjome Beauty Clinic | Salon de Beauté à Cotonou',
  description: 'Coiffure, nails, soins, massage et makeup à Cadjèhoun, Cotonou. Prenez rendez-vous sur WhatsApp.',
  keywords: 'salon de beauté Cotonou, coiffeur Cotonou, massage Cotonou, manucure Cotonou, Cadjèhoun',
};

export default function RootLayout({ children }) {
  return <html lang="fr"><body>{children}</body></html>;
}
