"use client";

import React, { useState } from "react";
import { Plane, Hotel, Bus, Compass, Star, MessageSquare} from "lucide-react";
import { packages, TravelPackage } from "../data/packages";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Packages() {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "turkey" | "tunisia">("all");

  const filteredPackages = packages.filter(
    (pkg) => filter === "all" || pkg.destination === filter
  );

  const getWaLink = (pkg: TravelPackage) => {
    const text = encodeURIComponent(pkg.whatsappMessage);
    return `https://wa.me/201000961382?text=${text}`;
  };

  return (
    <section id="packages" className="py-24 bg-brand-offwhite relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold mb-4">
            <Plane className="w-4 h-4" />
            <span>عروض السفر الحالية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight mb-4">
            باقات سفر متكاملة <span className="text-brand-orange">بأفضل سعر بمصر</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-blue/70">
            تصفح باقات السفر الحصرية لتركيا وتونس. تشمل الرحلات الطيران المباشر، الإقامة الفندقية الممتازة، الانتقالات والجولات مع مرشد سياحي مؤهل.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              filter === "all"
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105"
                : "bg-white text-brand-blue hover:bg-brand-blue/5 border border-brand-blue/10"
            }`}
          >
            كل عروض السفر ({packages.length})
          </button>
          <button
            onClick={() => setFilter("turkey")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              filter === "turkey"
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105"
                : "bg-white text-brand-blue hover:bg-brand-blue/5 border border-brand-blue/10"
            }`}
          >
            عروض تركيا 🇹🇷
          </button>
          <button
            onClick={() => setFilter("tunisia")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              filter === "tunisia"
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105"
                : "bg-white text-brand-blue hover:bg-brand-blue/5 border border-brand-blue/10"
            }`}
          >
            عروض تونس 🇹🇳
          </button>
        </div>

        {/* Packages Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => router.push(`/packages/${pkg.id}`)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-brand-blue/5 flex flex-col h-full group transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with aspect ratio and hover-zoom */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                  {/* Aspect Dark Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  <span className="absolute top-4 right-4 z-10 bg-brand-orange text-white text-xs font-black px-3.5 py-1.5 rounded-xl shadow-lg">
                    {pkg.badge}
                  </span>

                  {/* Destination Label */}
                  <span className="absolute bottom-4 right-4 z-10 bg-brand-blue/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                    {pkg.destination === "turkey" ? "تركيا 🇹🇷" : "تونس 🇹🇳"} - {pkg.city}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col grow justify-between">
                  <div>
                    {/* Duration */}
                    <div className="flex items-center mb-3.5 text-xs text-brand-blue/60 font-bold">
                      <span className="flex items-center gap-1 bg-brand-blue/5 px-2.5 py-1 rounded-md">
                        🕒 {pkg.duration}
                      </span>
                    </div>

                    {/* Package Title */}
                    <h3 className="text-lg sm:text-xl font-black text-brand-blue mb-5 leading-snug group-hover:text-brand-orange transition-colors">
                      {pkg.title}
                    </h3>

                    {/* Inclusions Row */}
                    <div className="border-t border-brand-blue/5 pt-4 mb-6">
                      <span className="text-[11px] text-brand-blue/50 font-bold uppercase tracking-wider block mb-2.5">
                        الباقة تشمل ما يلي:
                      </span>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-blue/80">
                          <Plane className="w-4 h-4 text-brand-orange" />
                          <span>طيران ذهاب وعودة</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-blue/80">
                          <Hotel className="w-4 h-4 text-brand-orange" />
                          <span>الإقامة بالفندق</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-blue/80">
                          <Bus className="w-4 h-4 text-brand-orange" />
                          <span>الانتقالات الداخلية</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-blue/80">
                          {pkg.inclusions.guide ? (
                            <>
                              <Compass className="w-4 h-4 text-brand-orange" />
                              <span>مزارات سياحية</span>
                            </>
                          ) : (
                            <>
                              <Compass className="w-4 h-4 text-brand-blue/30" />
                              <span className="text-brand-blue/40 line-through">مزارات سياحية</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and WhatsApp Trigger */}
                  <div className="border-t border-brand-blue/5 pt-5 flex items-center justify-between gap-2 mt-auto">
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-brand-blue/50 font-extrabold uppercase">تبدأ الأسعار من</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-black text-brand-orange">
                          {pkg.price.toLocaleString("ar-EG")}
                        </span>
                        <span className="text-xs font-black text-brand-blue">ج.م</span>
                      </div>
                    </div>

                    <a
                      href={getWaLink(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4.5 py-3 rounded-2xl text-xs sm:text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all duration-300 group/btn"
                    >
                      <MessageSquare className="w-4 h-4 fill-white group-hover/btn:animate-bounce" />
                      <span>احجز بالواتساب</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
