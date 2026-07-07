"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";import Link from "next/link";
import {
  MessageSquare,
  CheckCircle2,
  Info,
  CalendarDays,
  Baby,
  Plane,
  Hotel,
  Users,
  Loader2, // أضفنا أيقونة التحميل
} from "lucide-react";
import Image from "next/image";
import { createClient } from "@/lib/supabase";

// استبدل هذا بملف إعداد Supabase الخاص بـ Client-side

export default function PackageDetailsClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [pkg, setPkg] = useState<any>(null);
  const [phone, setPhone] = useState<string>("201000961382");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const supabase = createClient();

        // 1. جلب بيانات الباقة
        const { data: pkgData, error: pkgError } = await supabase
          .from("packages")
          .select("*")
          .eq("id", id)
          .single();

        if (pkgError || !pkgData) {
          setError(true);
          setLoading(false);
          return;
        }

        setPkg({
          id: pkgData.id,
          title: pkgData.title,
          destination: pkgData.destination,
          city: pkgData.city,
          duration: pkgData.duration,
          price: pkgData.price,
          childPrice: pkgData.child_price,
          inclusions: {
            flight: pkgData.flight,
            hotel: pkgData.hotel,
            transfers: pkgData.transfers,
            guide: pkgData.guide,
          },
          badge: pkgData.badge,
          image: pkgData.image,
          images: pkgData.images ?? [],
          whatsappMessage: pkgData.whatsapp_message,
          availableTravelDate: pkgData.available_travel_date,
          description: pkgData.description || "",
          airline: pkgData.airline,
          accommodationType: pkgData.accommodation_type,
          flightDetails: pkgData.flight_details,
          transfersDetails: pkgData.transfers_details,
          guideDetails: pkgData.guide_details,
          guidelines: pkgData.guidelines,
        });

        // 2. جلب رقم الهاتف
        const { data: phoneData } = await supabase
          .from("site_settings")
          .select("value")
          .eq("key", "whatsapp_phone")
          .single();

        if (phoneData?.value) {
          setPhone(phoneData.value);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  // واجهة التحميل
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-offwhite">
        <Loader2 className="w-12 h-12 animate-spin text-brand-orange" />
      </div>
    );
  }

  // واجهة الخطأ أو عدم العثور على الباقة
  if (error || !pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-offwhite font-cairo">
        <h2 className="text-2xl sm:text-3xl font-black text-brand-blue mb-4">عفواً، لم يتم العثور على العرض!</h2>
        <Link href="/" className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold hover:opacity-90">
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(pkg.whatsappMessage)}`;
  const isTurkey = pkg.destination === "turkey";
  const isArmenia = pkg.destination === "armenia";
  const destinationText = isTurkey ? "تركيا 🇹🇷" : isArmenia ? "أرمينيا 🇦🇲" : "تونس 🇹🇳";

  return (
    <div className="min-h-screen bg-brand-offwhite py-36 md:py-46 font-cairo">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-brand-blue/60 mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">الرئيسية</Link>
          <span className="text-brand-blue/30 font-light">/</span>
          <Link href="/#packages" className="hover:text-brand-orange transition-colors">عروض السفر</Link>
          <span className="text-brand-blue/30 font-light">/</span>
          <span className="text-brand-blue/70">{destinationText}</span>
          <span className="text-brand-blue/30 font-light">/</span>
          <span className="text-brand-orange font-extrabold">{pkg.city}</span>
        </nav>
      </div>

      {/* Title & Badges Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-brand-orange text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-sm">
            {pkg.badge}
          </span>
          <span className="bg-brand-blue/5 text-brand-blue text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1">
            📍 {pkg.city}
          </span>
          <span className="bg-brand-blue/5 text-brand-blue text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1">
            🕒 {pkg.duration}
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight mb-2">
          {pkg.title}
        </h1>
      </div>

      {/* Image Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-3xl group shadow-md border border-brand-blue/5">
            <Image
              src={pkg.images[0] || pkg.image}
              alt={`${pkg.title} - 1`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              width={800}
              height={600}
              priority
              unoptimized // ضروري جداً للاستضافة المشتركة
            />
          </div>
          <div className="flex md:flex-col gap-4 h-auto md:h-[450px]">
            <div className="flex-1 relative h-[120px] sm:h-[160px] md:h-[calc(50%-8px)] overflow-hidden rounded-2xl group shadow-sm border border-brand-blue/5">
              <Image
                src={pkg.images[1] || pkg.image}
                alt={`${pkg.title} - 2`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                width={400}
                height={300}
                unoptimized // ضروري جداً للاستضافة المشتركة
              />
            </div>
            <div className="flex-1 relative h-[120px] sm:h-[160px] md:h-[calc(50%-8px)] overflow-hidden rounded-2xl group shadow-sm border border-brand-blue/5">
              <Image
                src={pkg.images[2] || pkg.image}
                alt={`${pkg.title} - 3`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                width={400}
                height={300}
                unoptimized // ضروري جداً للاستضافة المشتركة
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Columns */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-blue/5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-blue mb-4">نظرة عامة على الرحلة</h2>
              <p className="text-brand-blue/80 text-base font-semibold leading-relaxed whitespace-pre-line">
                {pkg.description || (isTurkey
                  ? "استكشف سحر تركيا حيث يلتقي الشرق بالغرب..."
                  : isArmenia
                  ? "استكشف جمال أرمينيا وتاريخها الحضاري العريق..."
                  : "اكتشف جمال تونس الخضراء وسحر شواطئها الفيروزية...")}
              </p>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-blue/5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-blue mb-6 pb-3 border-b border-brand-blue/5">
                تفاصيل العرض
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {pkg.airline && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-offwhite/50 border border-brand-blue/5">
                    <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange"><Plane className="w-5 h-5" /></div>
                    <div>
                      <span className="block text-[10px] sm:text-xs text-brand-blue/50 font-bold mb-0.5">اسم شركة الطيران</span>
                      <span className="block text-sm font-extrabold text-brand-blue">{pkg.airline}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-offwhite/50 border border-brand-blue/5">
                  <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange"><CalendarDays className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-[10px] sm:text-xs text-brand-blue/50 font-bold mb-0.5">تاريخ السفر المتاح</span>
                    <span className="block text-sm font-extrabold text-brand-blue">{pkg.availableTravelDate}</span>
                  </div>
                </div>
                {pkg.accommodationType && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-offwhite/50 border border-brand-blue/5">
                    <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange"><Hotel className="w-5 h-5" /></div>
                    <div>
                      <span className="block text-[10px] sm:text-xs text-brand-blue/50 font-bold mb-0.5">نظام الإقامة</span>
                      <span className="block text-sm font-extrabold text-brand-blue">{pkg.accommodationType}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-offwhite/50 border border-brand-blue/5">
                  <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange"><Users className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-[10px] sm:text-xs text-brand-blue/50 font-bold mb-0.5">السعر للفرد</span>
                    <span className="block text-sm font-extrabold text-brand-blue">في غرفة مزدوجة</span>
                  </div>
                </div>
                {pkg.childPrice > 0 && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-offwhite/50 border border-brand-blue/5">
                    <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange"><Baby className="w-5 h-5" /></div>
                    <div>
                      <span className="block text-[10px] sm:text-xs text-brand-blue/50 font-bold mb-0.5">سعر الطفل</span>
                      <span className="block text-sm font-extrabold text-brand-blue">{pkg.childPrice.toLocaleString("ar-EG")} ج.م</span>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-blue/5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-blue mb-6 pb-3 border-b border-brand-blue/5">الباقة تشمل ما يلي</h2>
              <div className="space-y-6">
                {pkg.inclusions.flight && (
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 flex-shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h3 className="font-extrabold text-brand-blue text-base sm:text-lg">تذاكر طيران ذهاب وعودة</h3>
                      <p className="text-xs sm:text-sm text-brand-blue/60 font-bold mt-1 leading-relaxed whitespace-pre-line">{pkg.flightDetails}</p>
                    </div>
                  </div>
                )}
                {pkg.inclusions.transfers && (
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 flex-shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h3 className="font-extrabold text-brand-blue text-base sm:text-lg">الانتقالات الداخلية الكاملة</h3>
                      <p className="text-xs sm:text-sm text-brand-blue/60 font-bold mt-1 leading-relaxed whitespace-pre-line">{pkg.transfersDetails}</p>
                    </div>
                  </div>
                )}
                {pkg.inclusions.guide && (
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 flex-shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h3 className="font-extrabold text-brand-blue text-base sm:text-lg">جولات سياحية ومعالم البرنامج</h3>
                      <p className="text-xs sm:text-sm text-brand-blue/60 font-bold mt-1 leading-relaxed whitespace-pre-line">{pkg.guideDetails}</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {pkg.guidelines && (
              <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-blue/5">
                <h2 className="text-xl sm:text-2xl font-black text-brand-blue mb-6 pb-3 border-b border-brand-blue/5 flex items-center gap-2">
                  <Info className="w-6 h-6 text-brand-orange" /> إرشادات هامة قبل السفر
                </h2>
                <ul className="space-y-4">
                  {pkg.guidelines.split("\n").filter((line: string) => line.trim() !== "").map((line: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm text-brand-blue/80 font-bold leading-relaxed">
                      <span className="text-brand-orange mt-1.5">•</span> {line.trim()}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sticky Pricing Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-brand-blue/5 border-2 border-brand-orange/20 lg:sticky lg:top-24">
              <h3 className="text-brand-blue/60 text-sm font-bold mb-2 uppercase">إجمالي السعر للشخص يبدأ من</h3>
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-brand-blue/5">
                <span className="text-4xl font-black text-brand-orange">
                  {pkg.price.toLocaleString("ar-EG")}
                </span>
                <span className="text-lg font-black text-brand-blue">ج.م</span>
              </div>

              <div className="space-y-4 mb-8 text-sm font-semibold text-brand-blue/70">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> الضرائب والرسوم</span>
                  <span className="text-emerald-600 font-bold">مشمولة بالكامل</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> تأكيد فوري للحجز</span>
                  <span className="text-brand-blue font-bold">يتطلب دفعة مقدمة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> الدعم والمساعدة</span>
                  <span className="text-brand-blue font-bold">متوفر 24/7</span>
                </div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-4 rounded-2xl text-lg shadow-lg shadow-emerald-600/20 active:scale-95 transition-all duration-300"
              >
                <MessageSquare className="w-6 h-6 fill-white animate-pulse" />
                <span>احجز الآن عبر واتساب</span>
              </a>
              <p className="text-center text-xs text-brand-blue/50 mt-4 font-bold">تواصل عبر واتساب للاستفسارات والحجز.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-brand-blue/10 lg:hidden shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)] z-40">
        <div className="flex items-center justify-between max-w-6xl mx-auto gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-brand-blue/60 font-bold">سعر الشخص يبدأ من</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-brand-orange">{pkg.price.toLocaleString("ar-EG")}</span>
              <span className="text-xs font-black text-brand-blue">ج.م</span>
            </div>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4 py-3.5 rounded-xl text-sm shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>احجز بالواتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}