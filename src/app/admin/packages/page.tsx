"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Package } from "lucide-react";
import { usePackages } from "@/hooks/useSupabaseData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase";
import AdminPackageTable from "./components/AdminPackageTable";

const supabase = createClient();

export default function AdminPackagesPage() {
  const { data: packages = [], isLoading } = usePackages(true);
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("packages").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
    },
  });

  const handleDelete = async (id: string) => {
    if (confirmDelete !== id) {
      setConfirmDelete(id);
      return;
    }
    setDeletingId(id);
    await deleteMutation.mutateAsync(id);
    setConfirmDelete(null);
    setDeletingId(null);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">الرحلات والباقات</h1>
          <p className="text-gray-500 font-bold text-sm mt-1">
            إدارة جميع باقات السفر المعروضة على الموقع
          </p>
        </div>
        <Link
          href="/admin/packages/new"
          className="flex items-center gap-2 bg-[#1C325B] hover:bg-[#1C325B]/90 text-white font-black px-5 py-2.5 rounded-xl transition-all shadow-lg text-sm"
        >
          <Plus className="w-4 h-4" /> إضافة باقة جديدة
        </Link>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20 text-gray-400 font-bold text-sm">جاري التحميل...</div>
      ) : packages.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-gray-400">
          <Package className="w-16 h-16 mb-4 opacity-30" />
          <p className="font-black text-lg text-gray-600">لا توجد باقات بعد</p>
        </div>
      ) : (
        <AdminPackageTable
          packages={packages}
          confirmDelete={confirmDelete}
          deletingId={deletingId}
          onDeleteClick={handleDelete}
        />
      )}
    </div>
  );
}
