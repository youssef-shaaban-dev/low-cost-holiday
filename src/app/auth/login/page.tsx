"use client";

import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, Plane } from "lucide-react";
import { createClient } from "@/lib/supabase";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setError(error.message === "Invalid login credentials" ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : error.message);
    } else {
      window.location.href = "/admin";
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative w-full max-w-md">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-[#1C325B] rounded-2xl flex items-center justify-center mb-4">
            <Image src="/logo.webp" width={200} height={200} alt="Low Cost Holidays" />
            </div>
            <h1 className="text-2xl font-black text-white text-center">لوحة التحكم</h1>
            <p className="text-white/50 text-sm font-bold mt-1 text-center">Low Cost Holidays — Admin</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5" dir="rtl">
            <div>
              <label className="block text-white/70 text-sm font-bold mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 pr-10 pl-4 focus:outline-none focus:border-[#5A9BD5] transition-colors font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-sm font-bold mb-2">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 pr-10 pl-10 focus:outline-none focus:border-[#5A9BD5] transition-colors font-bold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/40 text-red-300 rounded-xl px-4 py-3 text-sm font-bold text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1C325B] hover:bg-[#1C325B]/80 text-white font-black py-3.5 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? "جاري التحقق..." : "دخول"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
