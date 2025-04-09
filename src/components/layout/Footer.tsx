"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Versione semplificata per il rendering lato server
  if (!isClient) {
    return (
      <footer className="bg-secondary py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center pt-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center mr-10">
                <div className="flex items-center">
                  <div className="object-contain h-8 w-8 mr-2 bg-gray-600" />
                  <span className="text-white text-xl font-bold">Stryfai</span>
                </div>
              </div>

              <nav className="flex items-center space-x-6 text-sm">
                <Link href="https://calendly.com/danilakardin/call-conoscitiva-con-danila-kardin" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Prenota
                </Link>
                <Link href="https://www.skool.com/stryfai/about?ref=b16e3d63012a4f958738524fb43d7a52" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300"><Youtube size={24} /></span>
              <span className="text-gray-300"><Instagram size={24} /></span>
              <span className="text-gray-300"><Linkedin size={24} /></span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 mt-8 pt-6 border-t border-gray-800">
            <p className="mb-2">
              Copyright © 2025. Tutti i diritti riservati.
              <Link href="/terms" className="hover:text-white mx-1">Termini e Condizioni</Link> |
              <Link href="/privacy" className="hover:text-white mx-1">Privacy Policy</Link> |
              <Link href="/cookies" className="hover:text-white mx-1">Cookie Policy</Link> – P.IVA 03095410357
            </p>
            <p>
              Progettato con l'intelligenza artificiale in 2 ore di lavoro
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Versione completa con interattività per il client
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/#hero" className="flex items-center mr-10">
              <div className="flex items-center">
                <img
                  src="/images/stryfai-logo.png"
                  alt="Stryfai Logo"
                  width={32}
                  height={32}
                  className="object-contain h-8 w-8 mr-2"
                />
                <span className="text-white text-xl font-bold">Stryfai</span>
              </div>
            </Link>

            <nav className="flex items-center space-x-6 text-sm">
              <Link href="https://calendly.com/danilakardin/call-conoscitiva-con-danila-kardin" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                Prenota
              </Link>
              <Link href="https://www.skool.com/stryfai/about?ref=b16e3d63012a4f958738524fb43d7a52" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                Community
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <Link href="https://www.youtube.com/@danilakardin" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <Youtube size={24} />
            </Link>
            <Link href="https://www.instagram.com/kardindanila?igsh=ZGJvdGlvOWdzbXNq" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com/company/stryfai" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-8 pt-6 border-t border-gray-800">
          <p className="mb-2">
            Copyright © 2025. Tutti i diritti riservati.
            <Link href="/terms" className="hover:text-white mx-1">Termini e Condizioni</Link> |
            <Link href="/privacy" className="hover:text-white mx-1">Privacy Policy</Link> |
            <Link href="/cookies" className="hover:text-white mx-1">Cookie Policy</Link> – P.IVA 03095410357
          </p>
          <p>
            Progettato con l'intelligenza artificiale in 2 ore di lavoro
          </p>
        </div>
      </div>
    </footer>
  );
}
