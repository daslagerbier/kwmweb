import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import App from "@/components/Gallery";
import Hero from "@/components/Hero";

import Sustainability from "@/components/Sustainability";

import VisionSection from "@/components/Vision";
import { Metadata } from "next";
import Team from "@/components/Team";
// import useTranslation from "next-translate/useTranslation";

export const metadata: Metadata = {
  title: "Innovation meets Sustainability for a better Garment",
  description: "KWM",
  // other metadata
};

export default function Home() {
  // const { t, lang } = useTranslation("common");
  // const example = t("variable-example", { count: 42 });
  return (
    <>
      <ScrollUp />
      <Hero />
      <VisionSection />
      <App />
      <Sustainability />
      <Features />
      <Team />
      <Brands />
      <Contact />
    </>
  );
}
