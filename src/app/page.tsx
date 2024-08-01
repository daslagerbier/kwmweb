"use client";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";;
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Sustainability from "@/components/Sustainability";
import VisionSection from "@/components/Vision";
import Team from "@/components/Team";
import React from "react";
import Gallery from "@/components/Gallery";
import { LangProvider } from "@/context/languageContext";
import { useSessionStorage } from "usehooks-ts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  const [lang, setLang] = useSessionStorage("lang", "EN");
  
  const langContextValue = {
    langs: ["FR", "EN"],
    lang,
    setLang,
  };
  return (
    <>
    <LangProvider value={langContextValue}>
    <Header />
      <ScrollUp />
      <Hero />
      <VisionSection />
      <Gallery />
      <Sustainability />
      <Features />
      <Team />
      <Brands />
      <Footer />
      </LangProvider>
    </>
  );
}
