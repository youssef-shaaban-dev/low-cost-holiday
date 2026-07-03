"use client";

import { useState } from "react";
import { Phone, Save, CheckCircle2 } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSupabaseData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

export default function AdminSettingsPage() {
  const { data: settings, isLoading } = useSiteSettings();

  return (
    <div className="p-8 max-w-xl" dir="rtl">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">إعدادات الموقع</h1>
        <p className="text-gray-500 font-bold text-sm mt-1">تحكم في إعدادات التواصل</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
            <Phone className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="font-black text-gray-800 text-sm">رقم الواتساب</h2>
          </div>
        </div>

        {isLoading ? (
          <div className="py-8 flex justify-center text-gray-400">جاري التحميل...</div>
        ) : (
          <SettingsForm initialPhone={settings?.whatsapp_phone || ""} />
        )}
      </div>
    </div>
  );
}

function SettingsForm({ initialPhone }: { initialPhone: string }) {
  const queryClient = useQueryClient();
  const [phone, setPhone] = useState(initialPhone);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const saveMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("site_settings")
        .upsert({ key: "whatsapp_phone", value: phone });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_settings"] });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    },
    onError: (err) => {
      setError(err.message || "حدث خطأ أثناء الحفظ");
    },
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaved(false);
    saveMutation.mutate();
  };

  return (
    <form onSubmit={handleSave} className="space-y-5">
      <div>
        <label className="block text-sm font-black text-gray-700 mb-1.5">رقم الهاتف</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10"
          dir="ltr"
        />
      </div>
      {phone && (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p className="text-xs font-black text-gray-500 mb-2">معاينة رابط الواتساب:</p>
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-600 hover:underline" dir="ltr">
            https://wa.me/{phone}
          </a>
        </div>
      )}
      {error && <div className="bg-red-50 text-red-700 rounded-xl px-4 py-3 text-sm font-bold">❌ {error}</div>}
      {saved && <div className="bg-emerald-50 text-emerald-700 rounded-xl px-4 py-3 text-sm font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> تم الحفظ بنجاح!</div>}
      <button type="submit" disabled={saveMutation.isPending || phone === initialPhone} className="flex items-center gap-2 bg-[#1C325B] hover:bg-[#1C325B]/90 text-white font-black px-6 py-2.5 rounded-xl disabled:opacity-50 text-sm">
        <Save className="w-4 h-4" /> {saveMutation.isPending ? "جاري الحفظ..." : "حفظ التغييرات"}
      </button>
    </form>
  );
}
