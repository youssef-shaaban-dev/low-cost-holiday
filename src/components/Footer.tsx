"use client";

import { Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "/#hero" },
    { name: "عروض السفر", href: "/#packages" },
    { name: "لماذا تختارنا", href: "/#why-choose-us" },
    { name: "آراء عملائنا", href: "/#reviews" },
  ];

  // const waLink = "https://wa.me/201000961382?text=مرحباً لو كوست هوليدايز، أود التواصل مع خدمة العملاء لطلب عرض سعر.";

  return (
    <footer className="bg-[#0b1222] text-white pt-20 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 text-right">
        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
              لوكوست هوليدايز متخصصة في تقديم باقات سفر فاخرة واقتصادية إلى تركيا وتونس وأرمينيا وغيرها من الوجهات السياحية الدولية، صُممت لتناسب مختلف الميزانيات. لتجمع لك بين الأسعار الذكية، رحلات الطيران المريحة، الفنادق المختارة بعناية، والبرامج السياحية المتكاملة، لنمنحك رحلات واجازات طيران مباشر من مصر على مدار العام.

              لوكوست هوليدايز علامة تجارية تابعة للشركة المصرية العالمية للسياحة - ترخيص سياحة (أ) رقم 789.
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
              لوكوست هوليدايز
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-white/80">
                  لوكوست هوليدايز علامة تجارية تابعة للشركة المصرية العالمية للسياحة - ترخيص سياحة (أ) رقم 789.
                </span>
              </li>
            </ul>
          </div>
        </div>


        {/* Copyright Area */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-white/60 font-semibold">
          © 2026 لوكوست هوليدايز - جميع الحقوق محفوظة. يُحظر تماماً الاستخدام غير المصرح به، بما في ذلك تدريب نماذج الذكاء الاصطناعي، أو إعادة الإنتاج، أو الاستغلال التجاري.

          صُنع بكل فخر في مصر بحب ❤️  <a href="https://mrco-egypt.com" target="_blank" rel="noopener noreferrer" className="underline text-brand-orange">تم تصميم وتطوير الموقع من خلال شركة ميركو ايجيبت</a>
        </div>
      </div>
    </footer>
  );
}
