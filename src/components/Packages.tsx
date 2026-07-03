"use client";

import { useState } from "react";
import { Globe, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePackages, useSiteSettings } from "@/hooks/useSupabaseData";
import PackageCard from "./packages/PackageCard";
import PackageFilters from "./packages/PackageFilters";

export default function Packages() {
  const [filter, setFilter] = useState<"all" | "turkey" | "tunisia" | "armenia">("all");
  const { data: packages = [] } = usePackages();
  const { data: settings = {} } = useSiteSettings();

  const filteredPackages = packages.filter(
    (pkg) => filter === "all" || pkg.destination === filter
  );

  return (
    <section id="packages" className="py-24 bg-brand-offwhite relative overflow-hidden">
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold mb-4">
            <Plane className="w-4 h-4" />
            <span>عروض السفر الحالية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight mb-4">
            باقات سفر متكاملة <span className="text-brand-orange">للأفراد والعائلات</span>
          </h2>
        </div>

        <PackageFilters filter={filter} setFilter={setFilter} count={packages.length} />
        {/* Emtpy state for no packages */}
        {filteredPackages.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 text-center py-12">
            <Globe className="w-24 h-24 mx-auto text-brand-blue" />
            <p className="text-brand-blue font-bold text-xl">لا توجد باقات متاحة حالياً</p>
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} phone={settings.whatsapp_phone} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
