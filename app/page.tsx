"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";
import Industries from "@/components/Industries";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Calculator />
      <Industries />
      <Benefits />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
