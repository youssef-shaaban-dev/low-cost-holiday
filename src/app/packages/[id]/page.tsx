import { packages } from "../../../data/packages";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star, Plane, Hotel, Bus, Compass, MessageSquare, CheckCircle2 } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-brand-offwhite pb-24 font-cairo">
      {/* Hero */}
      <div className="relative w-full h-[50vh] sm:h-[60vh]">
        <Image
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-brand-blue/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand-orange text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
              {pkg.badge}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {pkg.destination === "turkey" ? "تركيا 🇹🇷" : "تونس 🇹🇳"} - {pkg.city}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-2">
            {pkg.title}
          </h1>
          <p className="text-white/90 text-lg font-bold flex items-center gap-2">
            🕒 {pkg.duration}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link href="/#packages" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-orange transition-colors mb-6 bg-white px-4 py-2 rounded-xl shadow-sm border border-brand-blue/5">
          <ChevronRight className="w-5 h-5" />
          <span>العودة للعروض</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hotel Section */}
            <section className="bg-white p-6 rounded-3xl shadow-sm border border-brand-blue/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full filter blur-2xl -z-10 group-hover:bg-brand-orange/10 transition-colors" />
              <h2 className="text-xl font-black text-brand-blue mb-4 flex items-center gap-2">
                <Hotel className="w-6 h-6 text-brand-orange" />
                تفاصيل الإقامة
              </h2>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-blue leading-tight">{pkg.hotelName}</h3>
                  <div className="flex items-center gap-1 mt-3">
                    <span className="text-sm font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100 flex items-center gap-1">
                      {pkg.hotelStars} نجوم
                      <div className="flex items-center ml-1">
                        {Array.from({ length: pkg.hotelStars }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current text-yellow-500" />
                        ))}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Inclusions */}
            <section className="bg-white p-6 rounded-3xl shadow-sm border border-brand-blue/5">
              <h2 className="text-xl font-black text-brand-blue mb-6">الباقة تشمل ما يلي</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-brand-offwhite rounded-2xl hover:shadow-md transition-shadow">
                  <div className="bg-white shadow-sm p-2.5 rounded-xl border border-brand-blue/5">
                    <Plane className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-blue text-sm">تذاكر الطيران</div>
                    <div className="text-xs text-brand-blue/60 font-semibold">ذهاب وعودة (طيران مباشر)</div>
                  </div>
                  {pkg.inclusions.flight && <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-auto" />}
                </div>

                <div className="flex items-center gap-3 p-4 bg-brand-offwhite rounded-2xl hover:shadow-md transition-shadow">
                  <div className="bg-white shadow-sm p-2.5 rounded-xl border border-brand-blue/5">
                    <Hotel className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-blue text-sm">الإقامة بالفندق</div>
                    <div className="text-xs text-brand-blue/60 font-semibold">{pkg.duration}</div>
                  </div>
                  {pkg.inclusions.hotel && <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-auto" />}
                </div>

                <div className="flex items-center gap-3 p-4 bg-brand-offwhite rounded-2xl hover:shadow-md transition-shadow">
                  <div className="bg-white shadow-sm p-2.5 rounded-xl border border-brand-blue/5">
                    <Bus className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-blue text-sm">الانتقالات</div>
                    <div className="text-xs text-brand-blue/60 font-semibold">من وإلى المطار</div>
                  </div>
                  {pkg.inclusions.transfers && <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-auto" />}
                </div>

                <div className={`flex items-center gap-3 p-4 rounded-2xl transition-shadow ${pkg.inclusions.guide ? 'bg-brand-offwhite hover:shadow-md' : 'bg-gray-50 opacity-60'}`}>
                  <div className={`shadow-sm p-2.5 rounded-xl border border-brand-blue/5 ${pkg.inclusions.guide ? 'bg-white' : 'bg-transparent shadow-none'}`}>
                    <Compass className={`w-6 h-6 ${pkg.inclusions.guide ? 'text-brand-orange' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <div className={`font-bold text-sm ${pkg.inclusions.guide ? 'text-brand-blue' : 'text-gray-500 line-through'}`}>مزارات سياحية</div>
                    <div className={`text-xs font-semibold ${pkg.inclusions.guide ? 'text-brand-blue/60' : 'text-gray-400'}`}>مع مرشد سياحي</div>
                  </div>
                  {pkg.inclusions.guide && <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-auto" />}
                </div>
              </div>
            </section>
          </div>

          {/* Pricing & CTA Card (Sticky Desktop) */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-brand-blue/5 border-2 border-brand-orange/20 sticky top-24">
              <h3 className="text-brand-blue/60 text-sm font-bold mb-2 uppercase">إجمالي السعر للشخص</h3>
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-brand-blue/5">
                <span className="text-4xl font-black text-brand-orange">
                  {pkg.price.toLocaleString("ar-EG")}
                </span>
                <span className="text-lg font-black text-brand-blue">ج.م</span>
              </div>

              <div className="space-y-4 mb-8 text-sm font-semibold text-brand-blue/70">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> الضرائب والرسوم</span>
                  <span className="text-emerald-600 font-bold">مشمولة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> تأكيد الحجز</span>
                  <span className="text-brand-blue font-bold">مطلوب دفع مسبق</span>
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
                دعم فني متواصل 24/7 لمساعدتك في رحلتك
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-brand-blue/10 lg:hidden shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)] z-40">
        <div className="flex items-center justify-between max-w-4xl mx-auto gap-4">
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
