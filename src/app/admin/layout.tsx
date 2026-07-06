"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Package, Settings, Plane, LayoutDashboard } from "lucide-react";
import LogoutButton from "./components/LogoutButton";
import Image from "next/image";

const navItems = [
  { href: "/admin", label: "الرئيسية", icon: LayoutDashboard, exact: true },
  { href: "/admin/packages", label: "الرحلات والباقات", icon: Package, exact: false },
  { href: "/admin/settings", label: "إعدادات الموقع", icon: Settings, exact: false },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1C325B] flex flex-col min-h-screen fixed right-0 top-0 bottom-0 z-40 shadow-2xl">
        {/* Brand */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-[#5A9BD5]/20 rounded-xl flex items-center justify-center">
              <Image src={"/logo.webp"} alt={"Low Cost Holidays Logo"} width={200} height={200} />
            </div>
            <div>
              <div className="text-white font-black text-sm leading-none">Low Cost</div>
              <div className="text-white/50 text-xs font-bold leading-none mt-0.5">Holidays Admin</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href) && item.href !== "/admin";
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${isActive
                    ? "bg-[#5A9BD5] text-white shadow-lg shadow-[#5A9BD5]/30"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
              >
                <Icon className="w-4.5 h-4.5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 mr-64 min-h-screen">
        {children}
      </div>
    </div>
  );
}
