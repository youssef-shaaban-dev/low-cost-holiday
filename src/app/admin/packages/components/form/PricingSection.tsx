"use client";

import { InputField, inputCls } from "./InputField";
import { PackageFormData } from "../../PackageForm";

interface Props {
  form: PackageFormData;
  set: <K extends keyof PackageFormData>(key: K, value: PackageFormData[K]) => void;
}

export default function PricingSection({ form, set }: Props) {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h2 className="text-base font-black text-gray-800 mb-5 pb-3 border-b border-gray-100">💰 الأسعار</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField label="السعر للفرد في غرفة مزدوجة (ج.م)" id="price">
          <input id="price" type="number" required min={0} value={form.price} onChange={(e) => set("price", Number(e.target.value))} placeholder="مثال: 24500" className={inputCls} />
        </InputField>
        <InputField label="سعر الطفل (ج.م)" id="child_price">
          <input id="child_price" type="number" required min={0} value={form.child_price} onChange={(e) => set("child_price", Number(e.target.value))} placeholder="مثال: 15500" className={inputCls} />
        </InputField>
      </div>
    </section>
  );
}
