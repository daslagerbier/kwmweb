"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Kanit } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { useSessionStorage } from 'usehooks-ts';

import { LangProvider } from "@/context/languageContext";
import { Suspense } from "react";
import Loading from "./loading";
const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useSessionStorage('lang', 
    'EN'
  );
  const langContextValue = {
    langs: ["FR", "EN"],
    lang,
    setLang
  };
  
  return (
    <html lang="EN">
      {}


      <head />

      <body className={`bg-[#EBEBEB] dark:bg-black ${kanit.className}`}>
      <Suspense fallback={<Loading />}>
        <LangProvider value={langContextValue}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </LangProvider>
        </Suspense>
      </body>
    </html>
  );
}
