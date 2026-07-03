"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TravelPackage } from "@/types/package";

interface PackageCardProps {
  pkg: TravelPackage;
  phone: string;
}

export default function PackageCard({ pkg, phone }: PackageCardProps) {
  const router = useRouter();

  const getWaLink = () => {
    const text = encodeURIComponent(pkg.whatsappMessage);
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onClick={() => router.push(`/packages/${pkg.id}`)}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-brand-blue/5 flex flex-col h-full group transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 right-4 z-10 bg-brand-orange text-white text-xs font-black px-3.5 py-1.5 rounded-xl shadow-lg">
          {pkg.badge}
        </span>
        <span className="absolute bottom-4 right-4 z-10 bg-brand-blue/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg">
          {pkg.destination === "turkey" ? "تركيا 🇹🇷" : "تونس 🇹🇳"} - {pkg.city}
        </span>
      </div>

      <div className="p-6 sm:p-8 flex flex-col grow justify-between">
        <div>
          <div className="flex items-center mb-3.5 text-xs text-brand-blue/60 font-bold">
            <span className="flex items-center gap-1 bg-brand-blue/5 px-2.5 py-1 rounded-md">
              🕒 {pkg.duration}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-brand-blue mb-5 leading-snug group-hover:text-brand-orange transition-colors">
            {pkg.title}
          </h3>
          <div className="border-t border-brand-blue/5 pt-4 mb-6">
            <span className="text-[11px] text-brand-blue/50 font-bold uppercase tracking-wider block mb-2.5">
              تفاصيل الباقة:
            </span>
            <p className="text-sm font-bold text-brand-blue/80 line-clamp-3 leading-relaxed">
              {pkg.description || "تواصل معنا لمعرفة تفاصيل هذه الباقة المميزة."}
            </p>
          </div>
        </div>

        <div className="border-t border-brand-blue/5 pt-5 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-col text-right">
            <span className="text-[10px] text-brand-blue/50 font-extrabold uppercase">تبدأ من</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-black text-brand-orange">
                {pkg.price.toLocaleString("ar-EG")}
              </span>
              <span className="text-xs font-black text-brand-blue">ج.م</span>
            </div>
          </div>
          <a
            href={getWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4.5 py-3 rounded-2xl text-xs sm:text-sm shadow-md active:scale-95 transition-all group/btn"
          >
            <MessageSquare className="w-4 h-4 fill-white group-hover/btn:animate-bounce" />
            <span>واتساب</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
