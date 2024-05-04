import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import App from "@/components/Gallery";
import Hero from "@/components/Hero";

import Sustainability from "@/components/Sustainability";

import Video from "@/components/Video";
import VisionSection from "@/components/Vision";
import { Metadata } from "next";
import LogoScroll from "./references";
import Team from "@/components/Team";


export const metadata: Metadata = {
  title: "Innovation meets Sustainability for a better Garment",
  description: "KWM",
  // other metadata
};

export default function Home() {
  return (
      <>
        <ScrollUp />
        <Hero />
        <VisionSection />
        <App />
        <Sustainability />
        <Features />
        <Team />
        <LogoScroll />
        <Contact />
      </>
  );
}
