"use client";

import React, { useState } from "react";
import { Plane, Compass, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface DestinationItem {
  id: string;
  name: string;
  englishName: string;
  tagline: string;
  highlights: string[];
  image: string;
  country: "turkey" | "tunisia";
  description: string;
}

const destinations: DestinationItem[] = [
  {
    id: "istanbul",
    name: "إسطنبول التاريخية",
    englishName: "Istanbul",
    tagline: "جسر يربط بين قارتين وعبق حضارات الإمبراطوريات القديمة",
    highlights: ["جولات البوسفور البحرية", "المسجد الأزرق وآيا صوفيا", "التسوق في الجراند بازار", "المقاهي الشعبية الشهيرة"],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    country: "turkey",
    description: "استمتع بإقامة مريحة في قلب تقسيم أو الفاتح، مع جولات تاريخية شاملة لأهم المعالم الأثرية والأسواق الشعبية.",
  },
  {
    id: "antalya",
    name: "أنطاليا الساحلية",
    englishName: "Antalya",
    tagline: "لؤلؤة البحر المتوسط بمياهها الفيروزية ومنتجعاتها الفاخرة",
    highlights: ["شواطئ رملية ساحرة", "شلالات دودين الرائعة", "البلدة القديمة (كاليتشي)", "مدن الألعاب المائية الضخمة"],
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
    country: "turkey",
    description: "باقات إقامة شاملة كلياً (وجبات ومشروبات) في أفخم منتجعات أنطاليا المناسبة تماماً للعائلات المصرية وقضاء شهر العسل.",
  },
  {
    id: "tunis-capital",
    name: "تونس العاصمة & سيدي بوسعيد",
    englishName: "Tunis & Sidi Bou Said",
    tagline: "جمال الطبيعة الخلابة ولمسات الأندلس الفاتنة باللونين الأزرق والأبيض",
    highlights: ["سحر ضاحية سيدي بوسعيد الأسطورية", "آثار قرطاج التاريخية", "المدينة العتيقة والأسواق التراثية", "أطباق المطبخ التونسي الفريدة"],
    image: "https://images.unsplash.com/photo-1589182337358-2cb63acfc9c5?auto=format&fit=crop&w=800&q=80",
    country: "tunisia",
    description: "اكتشف تاريخ قرطاج العظيم واستمتع بالتقاط أجمل الصور في ضاحية سيدي بوسعيد بتكلفتها الاقتصادية الممتازة.",
  },
  {
    id: "hammamet",
    name: "الحمامات والياسمين",
    englishName: "Hammamet & Yasmine",
    tagline: "عاصمة الياسمين التونسية ووجهة الاسترخاء الأولى على شواطئ إفريقيا",
    highlights: ["منتجعات شاطئية راقية وجذابة", "شواطئ ذهبية نظيفة", "المدينة الترفيهية قرطاج لاند", "قلعة الحمامات الأثرية وميناء الياسمين"],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    country: "tunisia",
    description: "مثالية للاستجمام والسباحة بأقل تكلفة طيران وإقامة، مع عروض خاصة للعائلات والشباب طوال العام.",
  },
];

export default function Destinations() {
  const [filter, setFilter] = useState<"all" | "turkey" | "tunisia">("all");

  const filteredDestinations = destinations.filter(
    (dest) => filter === "all" || dest.country === filter
  );

  return (
    <section id="destinations" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-orange/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/5 text-brand-blue rounded-full text-sm font-bold mb-4">
            <Compass className="w-4 h-4 text-brand-orange" />
            <span>وجهاتنا السياحية الرئيسية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight mb-4">
            اكتشف وجهتك القادمة بلمسة <span className="text-brand-orange">اقتصادية فاخرة</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-blue/70">
            اخترنا لك بعناية أفضل المدن السياحية في تركيا وتونس التي توفر لك أعلى مستويات المتعة والراحة بأقل التكاليف الممكنة في السوق المصري.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
              filter === "all"
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105"
                : "bg-brand-offwhite text-brand-blue hover:bg-brand-blue/10"
            }`}
          >
            كل الوجهات
          </button>
          <button
            onClick={() => setFilter("turkey")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
              filter === "turkey"
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105"
                : "bg-brand-offwhite text-brand-blue hover:bg-brand-blue/10"
            }`}
          >
            تركيا (إسطنبول & أنطاليا)
          </button>
          <button
            onClick={() => setFilter("tunisia")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
              filter === "tunisia"
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105"
                : "bg-brand-offwhite text-brand-blue hover:bg-brand-blue/10"
            }`}
          >
            تونس (العاصمة & الحمامات)
          </button>
        </div>

        {/* Destinations Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDestinations.map((dest) => (
            <motion.div
              layout
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-brand-blue cursor-pointer"
            >
              {/* Image with zoom effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />
              {/* Premium dark overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Badges on Top */}
              <div className="absolute top-6 right-6 z-10 flex gap-2">
                <span className="bg-brand-orange text-white text-xs font-black px-3.5 py-1.5 rounded-lg shadow-md">
                  {dest.country === "turkey" ? "تركيا 🇹🇷" : "تونس 🇹🇳"}
                </span>
                <span className="bg-white/15 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.englishName}
                </span>
              </div>

              {/* Main Content Area */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex flex-col justify-end h-full">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {dest.name}
                </h3>
                <p className="text-sm text-white/90 font-medium mb-4 line-clamp-2 max-w-xl">
                  {dest.tagline}
                </p>

                {/* Hidden highlights appearing on hover */}
                <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-auto group-hover:opacity-100 group-hover:mt-2">
                  <p className="text-xs text-white/70 mb-4 border-t border-white/10 pt-4 leading-relaxed">
                    {dest.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-white/10 backdrop-blur-xs text-white hover:bg-white/20 transition-all text-xs font-semibold px-3 py-1 rounded-full border border-white/5"
                      >
                        🌟 {highlight}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#packages"
                    className="inline-flex items-center gap-2 text-brand-orange hover:text-white text-xs font-black transition-colors"
                  >
                    <span>عرض باقات السفر المتوفرة لهذه الوجهة ←</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
