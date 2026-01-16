import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import localFont from "next/font/local";
import { Cairo } from "next/font/google";
import { i18n, type Locale } from "@/i18n.config";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query-provider";
import { getDictionary } from "@/lib/dictionaries";

const rocg = localFont({
  src: [
    {
      path: "../fonts/Fontspring-DEMO-rocgroteskwide-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Fontspring-DEMO-rocgroteskwide-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Fontspring-DEMO-rocgroteskwide-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Fontspring-DEMO-rocgroteskwide-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-english",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "HUB71",
  description: "HUB71 Platform",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "ar");
  const isArabic = lang === "ar";

  return (
    <html lang={lang} dir={isArabic ? "rtl" : "ltr"}>
      <body
        className={`
          ${rocg.variable}       
          ${cairo.variable}
          
          ${isArabic ? "font-arabic" : "font-english"}
          antialiased
        `}
      >
        <Header lang={lang} />

        <ReactQueryProvider>
          <div className="container mx-auto px-4">{children}</div>
        </ReactQueryProvider>
        <Toaster />

        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
