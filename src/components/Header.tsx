"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Plane } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "وجهاتنا", href: "#destinations" },
    { name: "عروض السفر", href: "#packages" },
    { name: "لماذا تختارنا", href: "#why-choose-us" },
    { name: "آراء عملائنا", href: "#reviews" },
  ];

  const waLink = "https://wa.me/201000961382?text=مرحباً لو كوست هوليدايز، أود الاستفسار عن عروض السفر لتركيا وتونس.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-blue/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              className="flex items-center gap-2 group"
            >
              <Image 
                src="/LCH.png" 
                alt="Low Cost Holidays Logo" 
                width={140} 
                height={48} 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-white/80 hover:text-brand-orange hover:translate-y-[-1px] transition-all duration-255"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>تواصل معنا</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-brand-orange p-2 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-brand-blue shadow-2xl p-6 border-l border-white/10 transition-transform duration-300 transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="flex items-center justify-between mb-8">
          <a 
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <Image 
              src="/LCH.png" 
              alt="Low Cost Holidays Logo" 
              width={160}
              height={160}
              className="h-24 w-auto object-contain" 
            />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-brand-orange p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-5 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-white/90 hover:text-brand-orange py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-brand-orange/30 active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5 animate-bounce" />
            <span>تواصل معنا الآن</span>
          </a>
        </div>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 md:hidden backdrop-blur-sm transition-opacity"
          style={{ zIndex: 9998 }}
        />
      )}
    </>
  );
}
