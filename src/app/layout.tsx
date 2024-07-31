"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Kanit, Podkova } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import useSessionStorageState from "use-session-storage-state";
const inter = Kanit({
  subsets: ["latin"],
  weight: "400",
});
import { LangProvider } from "@/context/languageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useSessionStorageState("lang", {
    defaultValue: 'FR',
  });
  const langContextValue = {
    langs: ["FR", "EN"],
    lang,
    setLang
  };
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#EBEBEB] dark:bg-black ${inter.className}`}>
        <LangProvider value={langContextValue}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </LangProvider>
      </body>
    </html>
  );
}
