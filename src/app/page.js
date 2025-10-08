"use client"

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  return (
   <>
   <div className="bg-gradient-to-b from-[#ffe7ea] to-white">
    <Navbar/>
    <Hero/>
   </div>
    
   </>
  );
}
