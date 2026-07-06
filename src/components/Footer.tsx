"use client";

import { Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "الرئيسية", href: "/#hero" },
    { name: "عروض السفر", href: "/#packages" },
    { name: "لماذا تختارنا", href: "/#why-choose-us" },
    { name: "آراء عملائنا", href: "/#reviews" },
  ];

  return (
    <footer className="bg-[#0b1222] text-white pt-20 border-t border-white/5 relative overflow-hidden" dir="rtl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 text-right">
        {/* Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Logo & Agency Info (يأخذ مساحة عمودين في الشاشات الكبيرة) */}
          <div className="lg:col-span-2 flex flex-col xl:flex-row items-center xl:items-start gap-6 text-center xl:text-right">
            <a href="#hero" className="shrink-0 group">
              <Image
                src="/logo.webp"
                alt="Low Cost Holidays Logo"
                width={200}
                height={200}
                className="h-32 sm:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-sm text-white/60 leading-relaxed font-medium max-w-md xl:pt-4">
              المصرية العالمية للسياحة متخصصة في تقديم باقات سفر فاخرة واقتصادية إلى تركيا وتونس وأرمينيا وغيرها من الوجهات السياحية الدولية، صُممت لتناسب مختلف الميزانيات. لتجمع لك بين الأسعار الذكية، رحلات الطيران المريحة، الفنادق المختارة بعناية، والبرامج السياحية المتكاملة، لنمنحك رحلات واجازات طيران مباشر من مصر على مدار العام.
            </p>
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
                    className="text-sm font-semibold text-white/70 hover:text-brand-orange hover:-translate-x-2 inline-block transition-all duration-200"
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
              المصرية العالمية للسياحة
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-white/80 leading-relaxed">
                  المصرية العالمية للسياحة - ترخيص سياحة (أ) رقم 789.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-right text-xs text-white/60 font-semibold">
          <p className="max-w-2xl leading-relaxed">
            © 2026  المصرية العالمية للسياحة - جميع الحقوق محفوظة. يُحظر تماماً الاستخدام غير المصرح به، بما في ذلك تدريب نماذج الذكاء الاصطناعي، أو إعادة الإنتاج، أو الاستغلال التجاري.
          </p>
          <p className="shrink-0">
            صُنع بكل فخر في مصر بحب ❤️ <br className="lg:hidden" />
            <a href="https://mrco-egypt.com" target="_blank" rel="noopener noreferrer" className="underline text-brand-orange hover:text-white transition-colors duration-200 mr-1">
              تم تصميم وتطوير الموقع من خلال شركة ميركو ايجيبت
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}