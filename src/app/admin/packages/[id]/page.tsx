"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PackageForm, { PackageFormData } from "../PackageForm";
import { createClient } from "@/lib/supabase";

export default function EditPackagePage() {
  const params = useParams();
  const id = params.id as string;
  const [data, setData] = useState<Partial<PackageFormData> | null>(null);
  const [error, setError] = useState("");
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: pkg, error } = await supabase.from("packages").select("*").eq("id", id).single();
      if (error || !pkg) {
        setError("لم يتم العثور على الباقة");
        return;
      }
      setData({
        ...pkg,
        hotel_inclusion: pkg.hotel ?? true,
        child_price: pkg.child_price ?? 0,
      });
    }
    load();
  }, [id]);

  if (error) return <div className="p-8 text-red-600 font-bold">❌ {error}</div>;
  if (!data) return <div className="p-8 font-bold text-gray-400">جاري التحميل...</div>;

  return <PackageForm mode="edit" initialData={data} />;
}
