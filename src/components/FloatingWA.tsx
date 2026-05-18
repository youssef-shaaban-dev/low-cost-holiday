"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingWA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const waLink = "https://wa.me/201000961382?text=مرحباً لو كوست هوليدايز، أود الاستفسار عن عروض السفر المتوفرة لتركيا وتونس حالياً.";

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-55 flex flex-col items-end gap-3 group">
      {/* Floating tooltip */}
      <div className="bg-brand-blue/95 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-xl border border-white/10 opacity-0 transform translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-right whitespace-nowrap">
        تحدث معنا الآن عبر الواتساب! 💬
      </div>

      {/* Pulsing FAB */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
      </a>
    </div>
  );
}
