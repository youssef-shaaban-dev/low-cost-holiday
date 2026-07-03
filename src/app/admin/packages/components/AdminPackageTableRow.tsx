"use client";

import Link from "next/link";
import { Pencil, Trash2, AlertCircle } from "lucide-react";
import { TravelPackage } from "@/types/package";

interface AdminPackageTableRowProps {
  pkg: TravelPackage;
  confirmDelete: string | null;
  deletingId: string | null;
  onDeleteClick: (id: string) => void;
}

export default function AdminPackageTableRow({
  pkg,
  confirmDelete,
  deletingId,
  onDeleteClick,
}: AdminPackageTableRowProps) {
  const destLabel = (d: string) =>
    d === "turkey" ? "تركيا 🇹🇷" : d === "tunisia" ? "تونس 🇹🇳" : d === "armenia" ? "أرمينيا 🇦🇲" : d;
  
  // Package form uses active field which may be added dynamically
  const isActive = pkg.is_active;

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl bg-gray-100 bg-cover bg-center shrink-0 border border-gray-200"
            style={{ backgroundImage: `url(${pkg.image})` }}
          />
          <div>
            <div className="font-black text-gray-900 text-sm leading-snug max-w-[200px] truncate">
              {pkg.title}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 hidden md:table-cell">
        <div className="text-sm font-bold text-gray-600">{destLabel(pkg.destination)}</div>
        <div className="text-xs text-gray-400 font-bold">{pkg.city}</div>
      </td>

      <td className="px-6 py-4 hidden lg:table-cell">
        <span className="font-black text-[#1C325B] text-sm">
          {pkg.price.toLocaleString("ar-EG")} ج.م
        </span>
      </td>

      <td className="px-6 py-4 hidden lg:table-cell">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black ${
            isActive ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-500" : "bg-gray-400"}`}
          />
          {isActive ? "نشط" : "مخفي"}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2 justify-end">
          <Link
            href={`/admin/packages/${pkg.id}`}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1C325B]/10 hover:bg-[#1C325B] text-[#1C325B] hover:text-white rounded-lg text-xs font-black transition-all"
          >
            <Pencil className="w-3.5 h-3.5" />
            تعديل
          </Link>
          <button
            onClick={() => onDeleteClick(pkg.id)}
            disabled={deletingId === pkg.id}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all disabled:opacity-50 ${
              confirmDelete === pkg.id
                ? "bg-red-500 text-white animate-pulse"
                : "bg-red-50 hover:bg-red-500 text-red-500 hover:text-white"
            }`}
          >
            {confirmDelete === pkg.id ? (
              <><AlertCircle className="w-3.5 h-3.5" />تأكيد الحذف</>
            ) : (
              <><Trash2 className="w-3.5 h-3.5" />حذف</>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
}
