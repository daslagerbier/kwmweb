"use client";

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
import React from "react";
import { useSessionStorageState } from "ahooks";
/* export const metadata: Metadata = {
  title: "Innovation meets Sustainability for a better Garment",
  description: "KWM",
  // other metadata
}; */

export default function Home() {
  const langs = ["FR","EN","ES"]
  const [lang, setLang] =  useSessionStorageState("lang",{
    defaultValue: 'FR',
  });

  return (
    <>
      <ScrollUp />
      <Hero />
      <VisionSection setLang={setLang} lang={lang}  langs={langs} />
      <App />
      <Sustainability />
      <Features />
      <Team />
      <Brands />
      <Contact />
    </>
  );
}
