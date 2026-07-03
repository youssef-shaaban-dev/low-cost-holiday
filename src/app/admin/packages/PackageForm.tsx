"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ImagesSection from "./components/form/ImagesSection";
import BasicInfoSection from "./components/form/BasicInfoSection";
import PricingSection from "./components/form/PricingSection";
import InclusionsSection from "./components/form/InclusionsSection";
import WhatsappSection from "./components/form/WhatsappSection";

export interface PackageFormData {
  id: string;
  title: string;
  destination: string;
  city: string;
  duration: string;
  price: number;
  child_price: number;
  badge: string;
  image: string;
  images: string[];
  whatsapp_message: string;
  available_travel_date: string;
  description: string;
  flight: boolean;
  hotel_inclusion: boolean;
  transfers: boolean;
  guide: boolean;
  is_active: boolean;
  sort_order: number;
  airline?: string;
  accommodation_type?: string;
  flight_details?: string;
  transfers_details?: string;
  guide_details?: string;
  guidelines?: string;
}

const EMPTY_FORM: PackageFormData = {
  id: "",
  title: "",
  destination: "turkey",
  city: "",
  duration: "",
  price: 0,
  child_price: 0,
  badge: "الأكثر مبيعاً",
  image: "",
  images: ["", "", ""],
  whatsapp_message: "",
  available_travel_date: "",
  description: "استكشف سحر تركيا حيث يلتقي الشرق بالغرب في مزيج مذهل من التاريخ العريق والطبيعة الساحرة.\nنوفر لك في هذه الباقة تجربة سفر متكاملة ومثيرة تشمل تذاكر الطيران، والانتقالات المريحة، والزيارات السياحية الاستثنائية مع دعم متواصل طوال فترة إقامتك لضمان قضاء عطلة مميزة لا تُنسى مع عائلتك أو أصدقائك.",
  flight: true,
  hotel_inclusion: true,
  transfers: true,
  guide: true,
  is_active: true,
  sort_order: 0,
  airline: "مصر للطيران / النيل للطيران",
  accommodation_type: "إفطار فقط",
  flight_details: "تذاكر الطيران الدولي المباشر ذهاب وعودة من مصر، شاملة كافة الضرائب ورسوم المطارات مع الأوزان والحقائب المقررة.",
  transfers_details: "الاستقبال والترحيب في المطار عند الوصول والتوصيل للفندق، والنقل عند العودة بواسطة حافلات سياحية حديثة ومكيفة ومريحة.",
  guide_details: "برنامج جولات سياحية منظم وممتع لزيارة أشهر المعالم التاريخية والطبيعية والترفيهية المذكورة في خطة الرحلة بمرافقة مرشد سياحي مؤهل.",
  guidelines: "يرجى التأكد من أن جواز سفرك سارٍ لمدة لا تقل عن ٦ أشهر من تاريخ السفر المقرر.\nالحصول على التأشيرة والموافقات الأمنية يختلف حسب جنسية المسافر والوجهة.\nتخضع مواعيد رحلات الطيران للتأكيد النهائي والتغييرات الطفيفة من قبل شركات الطيران قبل المغادرة بـ ٤٨ ساعة.\nيتواجد مندوبونا في المطارات لتسهيل إجراءات استقبالكم وانتقالاتكم بسلاسة.",
};

interface PackageFormProps {
  initialData?: Partial<PackageFormData>;
  mode: "new" | "edit";
}

export default function PackageForm({ initialData, mode }: PackageFormProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const supabase = createClient();
  const [form, setForm] = useState<PackageFormData>({
    ...EMPTY_FORM,
    ...initialData,
    images: initialData?.images?.length
      ? [...initialData.images, "", ""].slice(0, 3)
      : ["", "", ""],
  });
  const [error, setError] = useState("");

  const set = <K extends keyof PackageFormData>(key: K, value: PackageFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        ...form,
        hotel: form.hotel_inclusion,
        images: form.images.filter(Boolean),
        image: form.image || form.images[0] || "",
      };
      const { hotel_inclusion: _, ...dbPayload } = payload;

      if (mode === "edit") {
        const { error } = await supabase.from("packages").update(dbPayload).eq("id", form.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("packages").insert([dbPayload]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      router.push("/admin/packages");
    },
    onError: (err) => {
      setError(err.message || "حدث خطأ أثناء الحفظ");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    saveMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} dir="rtl" className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <button
          type="button"
          onClick={() => router.push("/admin/packages")}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-bold text-sm"
        >
          <ArrowRight className="w-4 h-4" /> العودة
        </button>
        <div>
          <h1 className="text-2xl font-black text-gray-900">
            {mode === "new" ? "إضافة باقة جديدة" : "تعديل الباقة"}
          </h1>
        </div>
      </div>

      <div className="space-y-6">
        {/* 1. Images first */}
        <ImagesSection form={form} set={set} />

        {/* 2. Basic info */}
        <BasicInfoSection form={form} set={set} mode={mode} />

        {/* 3. Details & description */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-base font-black text-gray-800 mb-5 pb-3 border-b border-gray-100">📋 تفاصيل الرحلة</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-black text-gray-700 mb-1.5">تاريخ السفر المتاح</label>
                <input
                  value={form.available_travel_date}
                  onChange={(e) => set("available_travel_date", e.target.value)}
                  placeholder="مثال: كل يوم أحد وخميس"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-700 mb-1.5">اسم شركة الطيران</label>
                <input
                  value={form.airline || ""}
                  onChange={(e) => set("airline", e.target.value)}
                  placeholder="مثال: مصر للطيران / النيل للطيران"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-700 mb-1.5">نظام الإقامة</label>
                <input
                  value={form.accommodation_type || ""}
                  onChange={(e) => set("accommodation_type", e.target.value)}
                  placeholder="مثال: إفطار فقط"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1.5">نظرة عامة على الرحلة</label>
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="استكشف سحر تركيا..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10 min-h-[100px] resize-y"
              />
            </div>
          </div>
        </div>

        {/* 4. Pricing */}
        <PricingSection form={form} set={set} />

        {/* 5. Inclusions */}
        <InclusionsSection form={form} set={set} />

        {/* 6. WhatsApp */}
        <WhatsappSection form={form} set={set} />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-bold">
            ❌ {error}
          </div>
        )}

        <div className="flex gap-3 pb-8">
          <button
            type="submit"
            disabled={saveMutation.isPending}
            className="flex items-center gap-2 bg-[#1C325B] hover:bg-[#1C325B]/90 text-white font-black px-6 py-3 rounded-xl shadow-lg disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            {saveMutation.isPending ? "جاري الحفظ..." : mode === "new" ? "إضافة الباقة" : "حفظ التغييرات"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/packages")}
            className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-black text-sm"
          >
            إلغاء
          </button>
        </div>
      </div>
    </form>
  );
}
