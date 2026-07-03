"use client";

import { Plane, Hotel, Bus, Compass } from "lucide-react";
import { PackageFormData } from "../../PackageForm";

interface Props {
  form: PackageFormData;
  set: <K extends keyof PackageFormData>(key: K, value: PackageFormData[K]) => void;
}

export default function InclusionsSection({ form, set }: Props) {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-8">
      <div>
        <h2 className="text-base font-black text-gray-800 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
          <Plane className="w-4 h-4 text-[#5A9BD5]" /> محتويات الباقة (تفعيل / تعطيل)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { key: "flight" as const, label: "طيران", icon: <Plane className="w-4 h-4" /> },
            { key: "hotel_inclusion" as const, label: "فندق", icon: <Hotel className="w-4 h-4" /> },
            { key: "transfers" as const, label: "انتقالات", icon: <Bus className="w-4 h-4" /> },
            { key: "guide" as const, label: "جولات سياحية", icon: <Compass className="w-4 h-4" /> },
          ].map(({ key, label, icon }) => (
            <label
              key={key}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                form[key] ? "border-[#1C325B] bg-[#1C325B]/5" : "border-gray-200 bg-gray-50 opacity-60"
              }`}
            >
              <input type="checkbox" checked={form[key] as boolean} onChange={(e) => set(key, e.target.checked)} className="sr-only" />
              <span className={form[key] ? "text-[#1C325B]" : "text-gray-400"}>{icon}</span>
              <span className="text-xs font-black text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-base font-black text-gray-800 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
          📝 تفاصيل محتويات الباقة المكتوبة
        </h2>
        <div className="space-y-4">
          {form.flight && (
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1.5">تفاصيل الطيران</label>
              <textarea
                value={form.flight_details || ""}
                onChange={(e) => set("flight_details", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10 min-h-[80px]"
              />
            </div>
          )}
          {form.transfers && (
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1.5">تفاصيل الانتقالات الداخلية</label>
              <textarea
                value={form.transfers_details || ""}
                onChange={(e) => set("transfers_details", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10 min-h-[80px]"
              />
            </div>
          )}
          {form.guide && (
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1.5">تفاصيل الجولات السياحية</label>
              <textarea
                value={form.guide_details || ""}
                onChange={(e) => set("guide_details", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10 min-h-[80px]"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-black text-gray-700 mb-1.5">إرشادات هامة قبل السفر</label>
            <textarea
              value={form.guidelines || ""}
              onChange={(e) => set("guidelines", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10 min-h-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
