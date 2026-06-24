"use client";

import { useState, useEffect } from "react";
import { Calendar, ShieldCheck, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sliderImages = [
  {
    url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1920&q=80",
    title: "إسطنبول الساحرة",
    caption: "عبق التاريخ وروعة المضيق",
  },
  {
    url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1920&q=80",
    title: "شواطئ أنطاليا الذهبية",
    caption: "حيث تلتقي الجبال بمياه البحر المتوسط الفيروزية",
  },
  {
    url: "https://images.unsplash.com/photo-1589182337358-2cb63acfc9c5?auto=format&fit=crop&w=1920&q=80",
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
        <div className="absolute inset-0 bg-linear-to-t from-brand-blue via-brand-blue/60 to-brand-blue/30" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <div className="flex flex-col items-center">

          {/* Captivating Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-none max-w-4xl mb-6"
          >
            سافر من القاهرة إلى <span className="text-brand-orange">تركيا وتونس</span>
            <br />
            الأسعار وطيران مباشر!
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-medium"
          >
            استمتع بأقوى باقات السفر المتكاملة (طيران مباشر + فنادق راقية 4* و 5* + انتقالات + جولات سياحية). احجز الآن بأقل مقدم والباقي قبل السفر!
          </motion.p>


        </div>
      </div>
    </section>
  );
}
