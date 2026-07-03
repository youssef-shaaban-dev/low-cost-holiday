"use client";

import React from "react";

type FilterType = "all" | "turkey" | "tunisia" | "armenia";

interface PackageFiltersProps {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
  count: number;
}

export default function PackageFilters({ filter, setFilter, count }: PackageFiltersProps) {
  const tabs: { key: FilterType; label: string }[] = [
    { key: "all", label: `كل عروض السفر (${count})` },
    { key: "turkey", label: "عروض تركيا 🇹🇷" },
    { key: "tunisia", label: "عروض تونس 🇹🇳" },
    { key: "armenia", label: "عروض أرمينيا 🇦🇲" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
            filter === key
              ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105"
              : "bg-white text-brand-blue hover:bg-brand-blue/5 border border-brand-blue/10"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
