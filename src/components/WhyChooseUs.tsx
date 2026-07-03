"use client";

import React from "react";
import { Star, ShieldAlert, Award, Headphones, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const benefits: Benefit[] = [
    {
      title: "أفضل أسعار الرحلات فى مصر",
      description: "نضمن لك تكلفة اقتصادية لا تُقارن. نوفر أسعاراً مخفضة للرحلات الجوية المباشرة وحجوزات الفنادق التى لا تقارن.",
      icon: <Award className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "دعم فني متواصل 24 ساعة",
      description: "فريق خدمة العملاء متواجد لمساعدتك عبر الواتساب والاتصال الهاتفي طوال أيام الأسبوع. نرافقك خطوة بخطوة من التخطيط وحتى العودة لبلدك.",
      icon: <Headphones className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "فنادق مجربة ومختارة بعناية",
      description: "لا نختار الفنادق عشوائياً. جميع فنادقنا من فئة الـ 4* والـ 5* تم تقييمها وتجربتها شخصياً لضمان النظافة، جودة الطعام، والقرب من المعالم السياحية.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "تسهيل واستخراج التأشيرات سريعاً",
      description: "نساعدك في إعداد وتجهيز كافة المستندات المطلوبة لإستخراج تأشيرات الدول المختلفة، مع متابعة مستمرة لضمان صدورها في أسرع وقت وبنسبة قبول عالية.",
      icon: <CheckCircle2 className="w-8 h-8 text-brand-orange" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Decorative Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-brand-orange rounded-full text-sm font-bold mb-4">
            <Star className="w-4 h-4 fill-brand-orange" />
            <span>مميزات لو كوست هوليدايز</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            لماذا تختارنا لتنظيم <span className="text-brand-orange">رحلتك القادمة؟</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            نسعى جاهدين لتقديم أفضل توازن بين التكلفة والراحة لعملائنا في مصر. إليك ما يجعلنا الخيار الأول لآلاف المسافرين.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300 group flex items-start gap-5 text-right"
            >
              {/* Icon container */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-brand-orange/20 group-hover:border-brand-orange/40 text-brand-orange transition-all duration-300 shrink-0">
                {benefit.icon}
              </div>

              {/* Text content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-brand-sky to-[#3572A9] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-brand-sky/30 text-white"
        >
          <div className="text-center md:text-right max-w-xl">
            <h3 className="text-2xl font-black mb-2">جاهز لتخطيط رحلتك معنا؟</h3>
            <p className="text-sm font-semibold text-white/90 leading-relaxed">
              تواصل معنا الآن عبر الواتساب لتحصل على استشارة مجانية وعرض سعر مخصص بالكامل لاحتياجاتك وبميزانيتك المناسبة.
            </p>
          </div>
          <a
            href="https://wa.me/201000961382?text=مرحباً، أود الحصول على استشارة سفر مجانية لتركيا أو تونس."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 text-sm sm:text-base"
          >
            تحدث مع مستشار السفر بالواتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
}
