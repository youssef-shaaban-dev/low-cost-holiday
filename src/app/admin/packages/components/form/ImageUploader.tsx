"use client";

import { useCallback, useState } from "react";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase";
import Image from "next/image";

interface ImageUploaderProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  required?: boolean;
}

export default function ImageUploader({ label, value, onChange, required }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();

  const upload = useCallback(
    async (file: File) => {
      setUploading(true);
      setError("");

      const ext = file.name.split(".").pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error: upErr } = await supabase.storage
        .from("packages")
        .upload(path, file, { cacheControl: "3600", upsert: false });

      if (upErr) {
        setError(upErr.message);
        setUploading(false);
        return;
      }

      const { data } = supabase.storage.from("packages").getPublicUrl(path);
      onChange(data.publicUrl);
      setUploading(false);
    },
    [supabase, onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) upload(file);
    },
    [upload]
  );

  return (
    <div>
      <label className="block text-sm font-black text-gray-700 mb-2">{label}</label>

      {value ? (
        <div className="relative group rounded-xl overflow-hidden border-2 border-[#1C325B]/20 bg-gray-50">
          <div className="relative h-36 w-full">
            <Image src={value} alt="preview" fill className="object-cover" />
          </div>
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 left-2 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <label
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all ${
            uploading
              ? "border-[#1C325B]/40 bg-[#1C325B]/5"
              : "border-gray-300 hover:border-[#1C325B] hover:bg-[#1C325B]/5 bg-gray-50"
          }`}
        >
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            required={required && !value}
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) upload(file);
            }}
          />
          {uploading ? (
            <>
              <Loader2 className="w-8 h-8 text-[#1C325B] animate-spin" />
              <span className="text-xs font-bold text-[#1C325B]">جاري رفع الصورة...</span>
            </>
          ) : (
            <>
              <Upload className="w-8 h-8 text-gray-400" />
              <div className="text-center">
                <span className="text-sm font-black text-gray-600">اضغط لرفع صورة</span>
                <p className="text-xs text-gray-400 font-bold mt-0.5">أو اسحب الصورة هنا</p>
                <p className="text-xs text-gray-300 font-bold mt-1">JPG، PNG، WebP — حتى 5MB</p>
              </div>
            </>
          )}
        </label>
      )}

      {error && (
        <p className="mt-1.5 text-xs font-bold text-red-500">❌ {error}</p>
      )}
    </div>
  );
}
