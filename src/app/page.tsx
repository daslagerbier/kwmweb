"use client";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import App from "@/components/Gallery";
import Hero from "@/components/Hero";
import Sustainability from "@/components/Sustainability";
import VisionSection from "@/components/Vision";
import Team from "@/components/Team";
import React from "react";


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
      <Brands />
      <Contact />
    </>
  );
}
