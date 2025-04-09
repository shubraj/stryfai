"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // Controlla se esiste già un consenso
    const cookieConsent = localStorage.getItem("cookie-consent");

    // Mostra banner solo se non c'è già consenso
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur-md z-50 p-4 shadow-lg border-t border-gray-700">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-grow pr-4">
            <h3 className="text-lg font-semibold mb-2">Utilizziamo i cookie</h3>
            <p className="text-sm text-gray-300 pr-8 md:pr-0">
              Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito.
              Puoi scegliere quali cookie accettare. Leggi la nostra {" "}
              <Link href="/cookies" className="text-primary underline hover:text-primary-hover">
                Cookie Policy
              </Link>
              {" "} per saperne di più.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="whitespace-nowrap"
            >
              Solo essenziali
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptCookies}
              className="whitespace-nowrap"
            >
              Accetta tutti
            </Button>
          </div>
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            aria-label="Chiudi banner cookie"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
