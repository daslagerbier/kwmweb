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


export default function Home() {
  
  return (
    <>
      <ScrollUp />
      <Hero />
      <VisionSection />
      <Gallery />
      <Sustainability />
      <Features />
      <Team />
      <Brands />
    </>
  );
}
