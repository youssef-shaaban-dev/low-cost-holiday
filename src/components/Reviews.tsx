"use client";
import { Star, Quote, Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  location: string;
  trip: string;
  rating: number;
  content: string;
  date: string;
}

export default function Reviews() {
  const testimonials: Testimonial[] = [
    {
      name: "أحمد عكاشة",
      location: "اسطنبول",
      trip: "رحلة إسطنبول وأنطاليا معاً",
      rating: 5,
      content: "بجد تجربة فوق الممتازة! كانت أول مرة نسافر مع لو كوست هوليدايز وكان عندنا قلق شوية من الأسعار الاقتصادية، لكن الخدمة كانت فوق الوصف. الفنادق كانت نظيفة جداً وموقعها ممتاز في تقسيم، وطيران النيل مباشر ومريح جداً. الانتقالات دقيقة بالدقيقة والمرشد كان قمة في الذوق والمعرفة. شكراً ليكم وإن شاء الله الرحلة الجاية معاكم لتونس.",
      date: "أبريل ٢٠٢٦",
    },
    {
      name: "ايمان مبروك",
      location: "تونس",
      trip: "شهر عسل في الحمامات (تونس)",
      rating: 5,
      content: "قضينا أسبوع في تونس والحمامات بجد كان ساحر بكل المقاييس. ضاحية سيدي بوسعيد تجنن والون الأبيض والأزرق مريح جداً. الفندق 5 نجوم في ياسمين الحمامات كان خدمة ملوكي والأكل كان رائع. السعر كان أقل بكتير من شركات تانية سألنا فيها. الواتساب بتاعهم بيرد بسرعة جداً وحلوا لينا إجراءات الفيزا التونسية في أسبوع واحد.",
      date: "مايو ٢٠٢٦",
    },
    {
      name: "خالد الشامى",
      location: "أرمينيا",
      trip: "رحلة إسطنبول الكلاسيكية",
      rating: 5,
      content: "رحلة ممتازة وقيمة عالية جداً مقابل السعر. أنا سافرت لوحدي وجمعت أصدقاء جداد في الجروب. البرنامج السياحي كان متوازن جداً ومش متعب، وزرنا كل المعالم الأساسية زي آيا صوفيا ورحلة اليخت في البوسفور. الفندق كان هادئ ومريح والفريق متعاون جداً وبيتابعنا لحظة بلحظة على جروب الواتساب المشترك.",
      date: "مارس ٢٠٢٦",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-orange/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/5 text-brand-blue rounded-full text-sm font-bold mb-4">
            <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span>آراء وتقييمات مسافرينا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight mb-4">
            قصص حقيقية من <span className="text-brand-orange">مسافرينا في مصر</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-blue/70">
            فخورون بثقة أكثر من ٥,٠٠٠ مسافر مصري اختاروا عروض الرحلات للدول المختلفة معانا.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-brand-offwhite rounded-3xl p-8 border border-brand-blue/5 hover:border-brand-orange/20 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 left-6 text-brand-blue/10">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-500 gap-0.5 mb-5">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Content Text */}
                <p className="text-brand-blue/80 text-sm leading-relaxed font-medium mb-6 text-right">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* User details */}
              <div className="border-t border-brand-blue/5 pt-5 mt-auto flex items-center gap-4 text-right">
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-blue">{test.name} • {test.location}</span>
                  <div className="flex items-center gap-1 text-[10px] text-brand-orange font-bold mt-1 bg-brand-orange/5 px-2 py-0.5 rounded-md self-start">
                    <MapPin className="w-3 h-3" />
                    <span>{test.trip} ({test.date})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Rating Badge */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1.5">
            <span className="text-3xl font-black text-brand-blue">٤.٩</span>
            <div className="flex flex-col text-right">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[10px] text-brand-blue/50 font-bold">بناءً على تقييمات ٥,٠٠٠+ مسافر</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-brand-blue/10" />
          <p className="text-xs sm:text-sm font-bold text-brand-blue/70">
            نحن ملتزمون بتقديم أعلى مستويات الرضا والرحلات الأكثر موثوقية في السوق المصري.
          </p>
        </div>
      </div>
    </section>
  );
}
