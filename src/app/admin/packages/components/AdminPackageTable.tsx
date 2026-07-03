"use client";

import { TravelPackage } from "@/types/package";
import AdminPackageTableRow from "./AdminPackageTableRow";

interface AdminPackageTableProps {
  packages: TravelPackage[];
  confirmDelete: string | null;
  deletingId: string | null;
  onDeleteClick: (id: string) => void;
}

export default function AdminPackageTable({
  packages,
  confirmDelete,
  deletingId,
  onDeleteClick,
}: AdminPackageTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-right">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wide">الباقة</th>
            <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wide hidden md:table-cell">الوجهة</th>
            <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wide hidden lg:table-cell">السعر</th>
            <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wide hidden lg:table-cell">الحالة</th>
            <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wide">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {packages.map((pkg) => (
            <AdminPackageTableRow
              key={pkg.id}
              pkg={pkg}
              confirmDelete={confirmDelete}
              deletingId={deletingId}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
