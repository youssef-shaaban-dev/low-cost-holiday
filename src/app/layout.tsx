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
  title: "لو كوست هوليدايز | أرخص عروض السفر لتركيا وتونس من مصر",
  description: "سافر إلى إسطنبول، أنطاليا، وتونس بأرخص الأسعار في مصر. رحلات طيران مباشر، فنادق مختارة بعناية 4 نجوم و 5 نجوم، وانتقالات كاملة. احجز رحلتك الآن وسافر بأمان.",
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
    title: "لو كوست هوليدايز | أرخص عروض السفر لتركيا وتونس من مصر",
    description: "سافر إلى إسطنبول، أنطاليا، وتونس بأرخص الأسعار في مصر. رحلات طيران مباشر، فنادق مختارة بعناية 4 نجوم و 5 نجوم، وانتقالات كاملة. احجز رحلتك الآن وسافر بأمان.",
    siteName: "لو كوست هوليدايز",
    images: [
      {
        url: "/LCH.png",
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
    title: "لو كوست هوليدايز | أرخص عروض السفر لتركيا وتونس من مصر",
    description: "سافر إلى إسطنبول، أنطاليا، وتونس بأرخص الأسعار في مصر. رحلات طيران مباشر، فنادق مختارة بعناية 4 نجوم و 5 نجوم، وانتقالات كاملة. احجز رحلتك الآن وسافر بأمان.",
    images: ["/LCH.png"],
  },
};

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
    >
      <body className="min-h-full flex flex-col bg-brand-offwhite text-brand-blue font-cairo overflow-x-hidden selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
