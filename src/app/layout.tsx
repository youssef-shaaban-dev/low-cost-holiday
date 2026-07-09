import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lowcostholidays.com.eg"),
  title: "سافر من القاهرة إلى تركيا، ألبانيا، أرمينيا وتونس الجميلة",
  description: "عروض رحلات من القاهرة إلى تركيا، ألبانيا، أرمينيا وتونس الجميلة طيران مباشر بأفضل الأسعار فى مصر، واستمتع بأقوى باقات السفر المتكاملة من طيران وانتقالات وجولات سياحية.",
  keywords: ["سياحة لتركيا", "عروض تونس", "رحلات إسطنبول", "أنطاليا طيران مباشر", "سفر تونس من مصر", "حجز رحلات تركيا", "لو كوست هوليدايز"],
  authors: [{ name: "Low Cost Holidays" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "سافر من القاهرة إلى تركيا، ألبانيا، أرمينيا وتونس الجميلة",
    description: "عروض رحلات من القاهرة إلى تركيا، ألبانيا، أرمينيا وتونس الجميلة طيران مباشر بأفضل الأسعار فى مصر، واستمتع بأقوى باقات السفر المتكاملة من طيران وانتقالات وجولات سياحية.",
    siteName: "لو كوست هوليدايز",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 800,
        alt: "لو كوست هوليدايز",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سافر من القاهرة إلى تركيا، ألبانيا، أرمينيا وتونس الجميلة",
    description: "عروض رحلات من القاهرة إلى تركيا، ألبانيا، أرمينيا وتونس الجميلة طيران مباشر بأفضل الأسعار فى مصر، واستمتع بأقوى باقات السفر المتكاملة من طيران وانتقالات وجولات سياحية.",
    images: ["/logo.webp"],
  },
};


import QueryProvider from "@/providers/QueryProvider";
import ConditionalShell from "@/components/ConditionalShell";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <GoogleTagManager gtmId="GTM-KD8TMC9R" />
      <body className="min-h-full flex flex-col bg-brand-offwhite text-brand-blue font-cairo overflow-x-hidden selection:bg-brand-orange selection:text-white">

        <QueryProvider>
          <ConditionalShell>{children}</ConditionalShell>
        </QueryProvider>
      </body>
    </html>
  );
}
