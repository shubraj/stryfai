"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Renderizziamo una versione semplificata durante il server-side rendering
  // e poi aggiorniamo quando il componente viene montato lato client
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center relative z-20">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2 bg-primary/20 rounded-md" />
              <span className="text-white text-xl font-bold">Stryfai</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-gray-200">Team</span>
            <button className="bg-primary text-white px-4 py-2 rounded-md">Community</button>
          </nav>
          <div className="md:hidden text-white z-20 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </header>
    );
  }

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-secondary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/#hero" className="flex items-center relative z-20">
          <div className="flex items-center">
            {mounted ? (
              <Image
                src="/images/stryfai-logo.png"
                alt="Stryfai Logo"
                width={32}
                height={32}
                className="mr-2"
                priority // Carica immediatamente il logo come risorsa critica
              />
            ) : (
              <div className="w-8 h-8 mr-2 bg-primary/20 rounded-md"></div>
            )}
            <span className="text-white text-xl font-bold">Stryfai</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <AnimatedButton
            href="https://www.skool.com/stryfai/about?ref=b16e3d63012a4f958738524fb43d7a52"
            variant="glow"
            className="rounded-md"
          >
            Community
          </AnimatedButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-20 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-background z-10 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-24 pb-8 px-6`}>
        <nav className="flex flex-col space-y-6 items-center">
          <Link
            href="/#hero"
            className="text-xl text-white hover:text-primary transition-colors w-full text-center py-2"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/#team"
            className="text-xl text-white hover:text-primary transition-colors w-full text-center py-2"
            onClick={handleLinkClick}
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="text-xl text-white hover:text-primary transition-colors w-full text-center py-2"
            onClick={handleLinkClick}
          >
            Contatti
          </Link>

          <div className="w-full mt-6">
            <AnimatedButton
              href="https://www.skool.com/stryfai/about?ref=b16e3d63012a4f958738524fb43d7a52"
              variant="pulse"
              className="w-full rounded-md"
              onClick={handleLinkClick}
            >
              Community
            </AnimatedButton>
          </div>
        </nav>

        <div className="mt-auto pt-8 border-t border-gray-700 w-full">
          <div className="flex justify-center space-x-4">
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Termini
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
