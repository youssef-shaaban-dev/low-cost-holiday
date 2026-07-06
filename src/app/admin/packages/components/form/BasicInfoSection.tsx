"use client";

import { Tag } from "lucide-react";
import { InputField, inputCls } from "./InputField";
import { PackageFormData } from "../../PackageForm";

interface Props {
  form: PackageFormData;
  set: <K extends keyof PackageFormData>(key: K, value: PackageFormData[K]) => void;
  mode: "new" | "edit";
}

export default function BasicInfoSection({ form, set, mode }: Props) {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h2 className="text-base font-black text-gray-800 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
        <Tag className="w-4 h-4 text-[#5A9BD5]" /> المعلومات الأساسية
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <InputField label="اسم الباقة / عنوان الرحلة" id="title">
            <input
              id="title"
              required
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="مثال: رحلة إسطنبول الكلاسيكية - قلب التاريخ التركي"
              className={inputCls}
            />
          </InputField>
        </div>
        
        {mode === "new" && (
          <InputField label="معرّف الرحلة (ID) — يُستخدم في رابط الصفحة" id="id">
            <input
              id="id"
              required
              value={form.id}
              onChange={(e) => set("id", e.target.value.toLowerCase().replace(/\s+/g, "-"))}
              placeholder="مثال: istanbul-classic"
              className={inputCls}
            />
          </InputField>
        )}

        {/* حقل الوجهة - تم تحويله لحقل نصي بسيط */}
        <InputField label="الوجهة" id="destination">
          <input
            id="destination"
            required
            value={form.destination}
            onChange={(e) => set("destination", e.target.value)}
            placeholder="مثال: تركيا"
            className={inputCls}
          />
        </InputField>

        <InputField label="المدينة" id="city">
          <input
            id="city"
            required
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            placeholder="مثال: إسطنبول"
            className={inputCls}
          />
        </InputField>

        <InputField label="مدة الرحلة" id="duration">
          <input
            id="duration"
            required
            value={form.duration}
            onChange={(e) => set("duration", e.target.value)}
            placeholder="مثال: ٥ ليالي / ٦ أيام"
            className={inputCls}
          />
        </InputField>

        <InputField label="البادج (الشارة)" id="badge">
          <select id="badge" value={form.badge} onChange={(e) => set("badge", e.target.value)} className={inputCls}>
            <option value="الأكثر مبيعاً">الأكثر مبيعاً</option>
            <option value="طيران مباشر">طيران مباشر</option>
            <option value="عرض لفترة محدودة">عرض لفترة محدودة</option>
            <option value="عائلي مميز">عائلي مميز</option>
          </select>
        </InputField>

        <InputField label="ترتيب العرض (الأرقام الصغيرة أولاً)" id="sort_order">
          <input
            id="sort_order"
            type="number"
            min={0}
            value={form.sort_order}
            onChange={(e) => set("sort_order", Number(e.target.value))}
            placeholder="مثال: 1"
            className={inputCls}
          />
        </InputField>

        <div className="flex items-center gap-3 md:col-span-2">
          <input
            type="checkbox"
            id="is_active"
            checked={form.is_active}
            onChange={(e) => set("is_active", e.target.checked)}
            className="w-4 h-4 accent-[#1C325B]"
          />
          <label htmlFor="is_active" className="text-sm font-black text-gray-700">الباقة نشطة (ستظهر على الموقع للزوار)</label>
        </div>
      </div>
    </section>
  );
}