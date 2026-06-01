import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-brand-offwhite text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full" />
        <Compass className="w-32 h-32 text-brand-orange relative z-10 animate-[spin_10s_linear_infinite]" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black text-brand-blue mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-6">
        عذراً، لم نتمكن من العثور على وجهتك!
      </h2>
      <p className="text-brand-blue/70 text-lg mb-10 max-w-md mx-auto font-medium">
        يبدو أنك ضللت الطريق أو أن هذه الرحلة لم تعد متوفرة. لا تقلق، لدينا الكثير من العروض الرائعة بانتظارك.
      </p>
      
      <Link 
        href="/#packages" 
        className="bg-brand-blue hover:bg-brand-orange text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        اكتشف عروضنا الحالية
      </Link>
    </div>
  );
}
