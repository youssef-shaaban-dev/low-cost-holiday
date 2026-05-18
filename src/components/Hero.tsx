"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Calendar, ShieldCheck, Star } from "lucide-react";
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

  const waLink = "https://wa.me/201021487823?text=مرحباً لو كوست هوليدايز، أود حجز رحلتي لتركيا أو تونس الآن.";

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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-brand-blue/30" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider"
          >
            <Star className="w-4 h-4 fill-brand-orange" />
            <span>الوكالة رقم #1 لرحلات تركيا وتونس الاقتصادية</span>
          </motion.div>

          {/* Captivating Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-none max-w-4xl mb-6"
          >
            سافر من القاهرة إلى <span className="text-brand-orange">تركيا وتونس</span>
            <br />
            بأرخص الأسعار وطيران مباشر!
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

          {/* Direct CTA Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full sm:w-auto px-4"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="orange-pulse inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 text-white text-lg font-black px-8 py-5 rounded-2xl shadow-2xl shadow-brand-orange/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-6 h-6 fill-white" />
              <span>احجز رحلتك الآن عبر الواتساب</span>
            </a>
          </motion.div>

          {/* Slide Caption Indicator */}
          <div className="absolute bottom-8 right-4 sm:right-8 md:right-16 text-right hidden md:block">
            <span className="text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">الوجهة المعروضة الآن</span>
            <span className="text-xl font-bold text-white block">{sliderImages[currentSlide].title}</span>
            <span className="text-sm text-white/60 block">{sliderImages[currentSlide].caption}</span>
          </div>

          {/* Value Propositions Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl w-full mt-16 sm:mt-24 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-orange mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">تأشيرات سريعة</h3>
              <p className="text-[10px] sm:text-xs text-white/50 mt-1">تسهيل كافة الإجراءات</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-orange mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">أرخص سعر بمصر</h3>
              <p className="text-[10px] sm:text-xs text-white/50 mt-1">باقات اقتصادية 100%</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-orange mb-3">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">فنادق مختارة</h3>
              <p className="text-[10px] sm:text-xs text-white/50 mt-1">إقامة مريحة ومجربة</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
