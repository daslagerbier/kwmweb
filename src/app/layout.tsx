import ScrollToTop from "@/components/ScrollToTop";
import { Kanit } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

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
  return (
    <html lang="EN">
      {}
      <head />

      <body className={`bg-[#EBEBEB] dark:bg-black ${kanit.className}`}>
        <Suspense fallback={<Loading />}>
          {children}
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
}
