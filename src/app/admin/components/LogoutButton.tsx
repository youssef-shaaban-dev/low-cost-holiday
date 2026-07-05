"use client";

import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();
  const queryClient = useQueryClient();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
   try {
      setLoggingOut(true);
      
      await supabase.auth.signOut();
      
      queryClient.clear();
      
      router.refresh();
      
      router.replace("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoggingOut(false);
    }
  }
  

  return (
    <button
      onClick={handleLogout}
      disabled={loggingOut}
      className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-all w-full disabled:opacity-50"
    >
      <LogOut className="w-4.5 h-4.5" />
      {loggingOut ? "جاري الخروج..." : "تسجيل الخروج"}
    </button>
  );
}
