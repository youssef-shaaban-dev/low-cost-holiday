"use client";

import { InputField, inputCls } from "./InputField";
import { PackageFormData } from "../../PackageForm";

interface Props {
  form: PackageFormData;
  set: <K extends keyof PackageFormData>(key: K, value: PackageFormData[K]) => void;
}

export default function WhatsappSection({ form, set }: Props) {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h2 className="text-base font-black text-gray-800 mb-5 pb-3 border-b border-gray-100">
        💬 رسالة الواتساب
      </h2>
      <InputField label="نص رسالة الواتساب — تُرسل تلقائياً عند الضغط على زر الحجز" id="wa_message">
        <textarea
          id="wa_message"
          rows={3}
          value={form.whatsapp_message}
          onChange={(e) => set("whatsapp_message", e.target.value)}
          placeholder="مثال: مرحباً لو كوست هوليدايز، أود الاستفسار وحجز رحلة إسطنبول الكلاسيكية (24,500 جنيه)"
          className={inputCls + " resize-none"}
        />
      </InputField>
    </section>
  );
}
