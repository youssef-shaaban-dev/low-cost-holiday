import React from "react";

export function InputField({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-black text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

export const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-800 focus:outline-none focus:border-[#1C325B] focus:ring-2 focus:ring-[#1C325B]/10 transition-all bg-white placeholder-gray-400";
