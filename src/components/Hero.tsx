"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sliderImages = [
  {
    url: "/Armenia.webp",
    title: "إسطنبول الساحرة",
    caption: "عبق التاريخ وروعة المضيق",
  },
  {
    url: "/Istanbul.webp",
    title: "شواطئ أنطاليا الذهبية",
    caption: "حيث تلتقي الجبال بمياه البحر المتوسط الفيروزية",
  },
  {
    url: "/tunisia.webp",
    title: "سيدي بوسعيد - تونس",
    caption: "سحر اللونين الأبيض والأزرق في لؤلؤة قرطاج",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);


  return (
    <section id="hero" className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-brand-blue">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${sliderImages[currentSlide].url}')` }}
          />
        </AnimatePresence>
        {/* Dark Gradient Overlay for optimal text contrast */}
        <div className="absolute opacity-50 inset-0 bg-linear-to-t from-brand-blue via-brand-blue/60 to-brand-blue/30" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <div className="flex flex-col items-center">

          {/* Captivating Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-4xl mb-6"
          >
            سافر من القاهرة إلى
            <br />
            <span className="text-brand-orange pt-2 mb-2">
              تركيا، ألبانيا، أرمينيا وتونس الجميلة
            </span>
            <br />
            طيران مباشر بأفضل الأسعار فى مصر.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-medium"
          >
            استمتع بأقوى باقات السفر المتكاملة (طيران مباشر + انتقالات + جولات سياحية).
          </motion.p>
          <Link href="/#packages">
            <button className="px-8 py-4 bg-brand-orange text-white rounded-xl font-black shadow-lg hover:bg-brand-blue/70  hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              شاهد عروض الرحلات
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
