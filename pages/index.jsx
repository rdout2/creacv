import React from "react";
// import Builder from "./builder";
import Hero from "../components/hero/Hero";
import Origin from "../components/hero/Origin";
import Features from "../components/hero/Features";
import Footer from "../components/hero/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Origin />
      <Features />
      <Footer />
    </main>
  );
}

