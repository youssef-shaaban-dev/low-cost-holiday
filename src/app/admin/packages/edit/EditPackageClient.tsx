"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PackageForm, { PackageFormData } from "../PackageForm";
import { createClient } from "@/lib/supabase";

export default function EditPackageClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [data, setData] = useState<Partial<PackageFormData> | null>(null);
  const [error, setError] = useState("");

  const supabase = createClient();

  useEffect(() => {
    if (!id) return;

    async function load() {
      const { data: pkg, error } = await supabase
        .from("packages")
        .select("*")
        .eq("id", id)
        .single();

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
  }, [id, supabase]);

  if (!id) {
    return (
      <div className="p-8 text-red-600 font-bold">
        ❌ رقم الباقة غير موجود
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-600 font-bold">
        ❌ {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-gray-500 font-bold">
        جاري التحميل...
      </div>
    );
  }

  return <PackageForm mode="edit" initialData={data} />;
}