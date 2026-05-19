"use client";

import React from "react";
import { Plane, Phone, Mail, MapPin, ShieldAlert, Award, CreditCard, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const destinationsList = [
    { name: "إسطنبول الكلاسيكية", href: "#packages" },
    { name: "شواطئ أنطاليا عائلية", href: "#packages" },
    { name: "العرض الثنائي (تركيا)", href: "#packages" },
    { name: "تونس الخضراء والحمامات", href: "#packages" },
    { name: "استجمام ياسمين الحمامات", href: "#packages" },
  ];

  const quickLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "الوجهات السياحية", href: "#destinations" },
    { name: "عروض السفر والأسعار", href: "#packages" },
    { name: "لماذا تختارنا", href: "#why-choose-us" },
    { name: "تقييمات المسافرين", href: "#reviews" },
  ];

  const waLink = "https://wa.me/201000961382?text=مرحباً لو كوست هوليدايز، أود التواصل مع خدمة العملاء لطلب عرض سعر.";

  return (
    <footer className="bg-[#0b1222] text-white pt-20 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 text-right">
        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Agency Info */}
          <div>
            <a 
              href="#hero" 
              className="flex items-center gap-2 group mb-6 self-start"
            >
              <Image 
                src="/white-logo.png" 
                alt="Low Cost Holidays Logo" 
                width={200}
                height={200}
                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
            <p className="text-sm text-white/60 leading-relaxed mb-6 font-medium">
              الوكالة الأولى بمصر المتخصصة في تقديم أقوى باقات السفر الفاخرة والاقتصادية لتركيا وتونس. نجمع لك بين التكلفة الذكية، الطيران المباشر المريح، والفنادق الراقية لنوفر لك إجازة العمر بدون أعباء مالية.
            </p>
            {/* Trust and License */}
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3">
              <ShieldCheck className="w-8 h-8 text-brand-orange shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">مرخصين بالكامل</span>
                <span className="text-[10px] text-white/50">وزارة السياحة المصرية • ترخيص رقم ٢٠٩٥٤</span>
              </div>
            </div>
          </div>

          {/* Destination Links */}
          <div>
            <h3 className="text-base font-black text-brand-orange mb-6 border-r-2 border-brand-orange pr-3">
              أشهر الباقات والوجهات
            </h3>
            <ul className="space-y-3.5">
              {destinationsList.map((dest, idx) => (
                <li key={idx}>
                  <a
                    href={dest.href}
                    className="text-sm font-semibold text-white/70 hover:text-brand-orange hover:translate-x-[-4px] inline-block transition-all duration-200"
                  >
                    {dest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-black text-brand-orange mb-6 border-r-2 border-brand-orange pr-3">
              روابط سريعة
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-white/70 hover:text-brand-orange hover:translate-x-[-4px] inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-black text-brand-orange mb-6 border-r-2 border-brand-orange pr-3">
              تواصل معنا بمصر
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-white/80">
                  برج أركاديا، الدور الرابع، شارع التسعين الشمالي، التجمع الخامس، القاهرة، مصر
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <a
                  href="tel:+201000961382"
                  className="text-sm font-semibold text-white/80 hover:text-brand-orange tracking-wider transition-colors"
                >
                  +20 100 096 1382
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <a
                  href="mailto:info@lowcostholidays.com.eg"
                  className="text-sm font-semibold text-white/80 hover:text-brand-orange transition-colors"
                >
                  info@lowcostholidays.com.eg
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges strip (legal/partnership/security) */}
        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Security & Partnership logos */}
          <div className="flex flex-wrap items-center gap-5 justify-center">
            <div className="flex items-center gap-1.5 text-white/40 text-xs font-bold border border-white/5 bg-white/3 py-1.5 px-3.5 rounded-lg">
              <CreditCard className="w-4 h-4" />
              <span>دفع آمن بالكامل</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/40 text-xs font-bold border border-white/5 bg-white/3 py-1.5 px-3.5 rounded-lg">
              <Award className="w-4 h-4" />
              <span>باقات مضمونة 100%</span>
            </div>
          </div>

          {/* Social and quick contacts */}
          <div className="text-center sm:text-right">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black text-brand-orange hover:text-white bg-brand-orange/10 border border-brand-orange/20 hover:bg-brand-orange px-4 py-2 rounded-xl transition-all duration-300 shadow-md"
            >
              💬 راسلنا الآن على واتساب لأي استفسار طوال اليوم
            </a>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-white/40 font-semibold">
          <p>© {currentYear} لو كوست هوليدايز مصر. جميع الحقوق محفوظة لشركة Low Cost Holidays.</p>
          <p className="mt-1">
            مصمم بكل حب للشعب المصري 🇪🇬 • الأسعار مطبقة بالجنيه المصري (EGP) وشاملة الضرائب والرسوم الأساسية.
          </p>
        </div>
      </div>
    </footer>
  );
}
