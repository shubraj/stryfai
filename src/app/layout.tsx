import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieBanner from '@/components/ui/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stryfai - Agenti IA per il tuo Business',
  description: 'Stryfai sviluppa agenti IA personalizzati per incrementare l\'efficienza delle tue operazioni commerciali e far crescere il tuo business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
