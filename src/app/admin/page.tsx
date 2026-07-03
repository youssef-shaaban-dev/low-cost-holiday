"use client";

import Link from "next/link";
import { Package, Plus, TrendingUp, Settings } from "lucide-react";
import { usePackages } from "@/hooks/useSupabaseData";

export default function AdminDashboard() {
  const { data: packages = [], isLoading } = usePackages(true);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">لوحة التحكم</h1>
        <p className="text-gray-500 font-bold text-sm mt-1">مرحباً! إدارة رحلاتك وباقاتك من هنا.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-bold">إجمالي الباقات</p>
              <p className="text-4xl font-black text-[#1C325B] mt-1">
                {isLoading ? <span className="text-gray-300 animate-pulse">...</span> : packages.length}
              </p>
            </div>
            <div className="w-14 h-14 bg-[#1C325B]/10 rounded-2xl flex items-center justify-center">
              <Package className="w-7 h-7 text-[#1C325B]" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-bold">حالة الموقع</p>
              <p className="text-lg font-black text-emerald-600 mt-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse inline-block" /> نشط
              </p>
            </div>
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-black text-gray-700 mb-4">إجراءات سريعة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/admin/packages/new" className="flex items-center gap-4 bg-[#1C325B] hover:bg-[#1C325B]/90 text-white rounded-2xl p-5 shadow-lg shadow-[#1C325B]/20 group">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <Plus className="w-6 h-6" />
          </div>
          <div>
            <div className="font-black text-base">إضافة باقة جديدة</div>
            <div className="text-white/60 text-xs font-bold">أضف رحلة سفر جديدة</div>
          </div>
        </Link>
        <Link href="/admin/packages" className="flex items-center gap-4 bg-white hover:bg-gray-50 text-gray-800 rounded-2xl p-5 border border-gray-100 shadow-sm group">
          <div className="w-12 h-12 bg-[#1C325B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1C325B]/20 transition-colors">
            <Package className="w-6 h-6 text-[#1C325B]" />
          </div>
          <div>
            <div className="font-black text-base">إدارة الباقات</div>
            <div className="text-gray-500 text-xs font-bold">عرض وتعديل وحذف الرحلات</div>
          </div>
        </Link>
        <Link href="/admin/settings" className="flex items-center gap-4 bg-white hover:bg-gray-50 text-gray-800 rounded-2xl p-5 border border-gray-100 shadow-sm group sm:col-span-2">
          <div className="w-12 h-12 bg-[#5A9BD5]/10 rounded-xl flex items-center justify-center group-hover:bg-[#5A9BD5]/20 transition-colors">
            <Settings className="w-6 h-6 text-[#5A9BD5]" />
          </div>
          <div>
            <div className="font-black text-base">إعدادات الموقع</div>
            <div className="text-gray-500 text-xs font-bold">تغيير رقم الواتساب وإعدادات التواصل</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
