"use client";

import { ImageIcon } from "lucide-react";
import { PackageFormData } from "../../PackageForm";
import ImageUploader from "./ImageUploader";

interface Props {
  form: PackageFormData;
  set: <K extends keyof PackageFormData>(key: K, value: PackageFormData[K]) => void;
}

export default function ImagesSection({ form, set }: Props) {
  const setImage = (index: number, url: string) => {
    const imgs = [...form.images];
    imgs[index] = url;
    set("images", imgs);
  };

  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h2 className="text-base font-black text-gray-800 mb-2 flex items-center gap-2">
        <ImageIcon className="w-4 h-4 text-[#5A9BD5]" /> صور الباقة
      </h2>
      <p className="text-xs text-gray-400 font-bold mb-5">ارفع الصور من جهازك مباشرة. الصورة الرئيسية ستظهر على بطاقة الباقة في الموقع.</p>

      <div className="space-y-5">
        <ImageUploader
          label="الصورة الرئيسية ★ (ستظهر على بطاقة الباقة)"
          value={form.image}
          onChange={(url) => set("image", url)}
          required
        />

        <div className="border-t border-gray-100 pt-5">
          <p className="text-xs font-black text-gray-500 mb-4">📸 صور إضافية (تظهر في صفحة تفاصيل الباقة)</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <ImageUploader
                key={i}
                label={`صورة ${i + 1}`}
                value={form.images[i] ?? ""}
                onChange={(url) => setImage(i, url)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
