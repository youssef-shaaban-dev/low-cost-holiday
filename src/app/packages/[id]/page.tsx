import { packages } from "../../../data/packages";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star, Plane, Bus, Compass, MessageSquare, CheckCircle2, Info } from "lucide-react";
import Image from "next/image";

export function generateStaticParams() {
  return packages.map((p) => ({
    id: p.id,
  }));
}

export default async function PackageDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.id === resolvedParams.id);

  if (!pkg) {
    notFound();
  }

  const waLink = `https://wa.me/201000961382?text=${encodeURIComponent(pkg.whatsappMessage)}`;

  const isTurkey = pkg.destination === "turkey";
  const destinationText = isTurkey ? "تركيا 🇹🇷" : "تونس 🇹🇳";

  return (
    <div className="min-h-screen bg-brand-offwhite pb-24 font-cairo pt-24 sm:pt-28">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-brand-blue/60 mb-6">
          <Link href="/" className="hover:text-brand-orange transition-colors">
            الرئيسية
          </Link>
          <span className="text-brand-blue/30 font-light">/</span>
          <Link href="/#packages" className="hover:text-brand-orange transition-colors">
            عروض السفر
          </Link>
          <span className="text-brand-blue/30 font-light">/</span>
          <span className="text-brand-blue/70">
            {destinationText}
          </span>
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
          <span className="bg-brand-blue/5 text-brand-blue text-xs font-bold px-3.5 py-1.5 rounded-full">
            📍 {pkg.city}
          </span>
          <span className="bg-brand-blue/5 text-brand-blue text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1">
            🕒 {pkg.duration}
          </span>
          <span className="bg-amber-500/10 text-amber-600 text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            4.9 (48 تقييم)
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight mb-2">
          {pkg.title}
        </h1>
      </div>

      {/* Image Gallery Grid (1 Large + 2 Stacked Small) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Large Image */}
          <div className="md:col-span-2 relative h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-3xl group shadow-md border border-brand-blue/5">
            <Image
              src={pkg.images[0] || pkg.image}
              alt={`${pkg.title} - 1`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              width={800}
              height={600}
              priority
            />
          </div>
          
          {/* Stacked Smaller Images */}
          <div className="flex md:flex-col gap-4 h-auto md:h-[450px]">
            <div className="flex-1 relative h-[120px] sm:h-[160px] md:h-[calc(50%-8px)] overflow-hidden rounded-2xl group shadow-sm border border-brand-blue/5">
              <Image
                src={pkg.images[1] || pkg.image}
                alt={`${pkg.title} - 2`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                width={400}
                height={300}
              />
            </div>
            <div className="flex-1 relative h-[120px] sm:h-[160px] md:h-[calc(50%-8px)] overflow-hidden rounded-2xl group shadow-sm border border-brand-blue/5">
              <Image
                src={pkg.images[2] || pkg.image}
                alt={`${pkg.title} - 3`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Columns Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Trip Overview Card */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-blue/5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-blue mb-4">نظرة عامة على الرحلة</h2>
              <p className="text-brand-blue/80 text-base font-semibold leading-relaxed">
                {isTurkey ? (
                  "استكشف سحر تركيا حيث يلتقي الشرق بالغرب في مزيج مذهل من التاريخ العريق والطبيعة الساحرة. نوفر لك في هذه الباقة تجربة سفر متكاملة ومثيرة تشمل تذاكر الطيران، والانتقالات المريحة، والزيارات السياحية الاستثنائية مع دعم متواصل طوال فترة إقامتك لضمان قضاء عطلة مميزة لا تُنسى مع عائلتك أو أصدقائك."
                ) : (
                  "اكتشف جمال تونس الخضراء وسحر شواطئها الفيروزية وتاريخها الممتد لآلاف السنين. تأخذك هذه الرحلة الاستثنائية في جولات حرة ومنظمة بين المعالم التاريخية كقرطاج وسيدي بوسعيد الأسطورية والأسواق التقليدية النابضة بالحياة، مع خدمات انتقال ممتازة لتستمتع بجوهرة البحر الأبيض المتوسط."
                )}
              </p>
            </section>

            {/* Inclusions (Text Writing Style) */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-blue/5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-blue mb-6 pb-3 border-b border-brand-blue/5">
                الباقة تشمل ما يلي
              </h2>
              <div className="space-y-6">
                {pkg.inclusions.flight && (
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-brand-blue text-base sm:text-lg">تذاكر طيران ذهاب وعودة</h3>
                      <p className="text-xs sm:text-sm text-brand-blue/60 font-bold mt-1 leading-relaxed">
                        تذاكر الطيران الدولي المباشر ذهاب وعودة من مصر، شاملة كافة الضرائب ورسوم المطارات مع الأوزان والحقائب المقررة.
                      </p>
                    </div>
                  </div>
                )}

                {pkg.inclusions.transfers && (
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-brand-blue text-base sm:text-lg">الانتقالات الداخلية الكاملة</h3>
                      <p className="text-xs sm:text-sm text-brand-blue/60 font-bold mt-1 leading-relaxed">
                        الاستقبال والترحيب في المطار عند الوصول والتوصيل للفندق، والنقل عند العودة بواسطة حافلات سياحية حديثة ومكيفة ومريحة.
                      </p>
                    </div>
                  </div>
                )}

                {pkg.inclusions.guide && (
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-brand-blue text-base sm:text-lg">جولات سياحية ومعالم البرنامج</h3>
                      <p className="text-xs sm:text-sm text-brand-blue/60 font-bold mt-1 leading-relaxed">
                        برنامج جولات سياحية منظم وممتع لزيارة أشهر المعالم التاريخية والطبيعية والترفيهية المذكورة في خطة الرحلة بمرافقة مرشد سياحي مؤهل.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Travel Guidelines */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-brand-blue/5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-blue mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-brand-orange" />
                إرشادات هامة قبل السفر
              </h2>
              <ul className="list-disc list-inside space-y-3 text-xs sm:text-sm text-brand-blue/75 font-semibold leading-relaxed pr-2">
                <li>يرجى التأكد من أن جواز سفرك سارٍ لمدة لا تقل عن ٦ أشهر من تاريخ السفر المقرر.</li>
                <li>الحصول على التأشيرة والموافقات الأمنية يختلف حسب جنسية المسافر والوجهة.</li>
                <li>تخضع مواعيد رحلات الطيران للتأكيد النهائي والتغييرات الطفيفة من قبل شركات الطيران قبل المغادرة بـ ٤٨ ساعة.</li>
                <li>يتواجد مندوبونا في المطارات لتسهيل إجراءات استقبالكم وانتقالاتكم بسلاسة.</li>
              </ul>
            </section>
          </div>

          {/* Pricing & CTA Card (Sticky Desktop) */}
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
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> الضرائب والرسوم
                  </span>
                  <span className="text-emerald-600 font-bold">مشمولة بالكامل</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> تأكيد فوري للحجز
                  </span>
                  <span className="text-brand-blue font-bold">يتطلب دفعة مقدمة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> الدعم والمساعدة
                  </span>
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

              <p className="text-center text-xs text-brand-blue/50 mt-4 font-bold">
                تواصل معنا مباشرة عبر واتساب لتأكيد الحجز والاستفسارات
              </p>
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
              <span className="text-xl font-black text-brand-orange">
                {pkg.price.toLocaleString("ar-EG")}
              </span>
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
