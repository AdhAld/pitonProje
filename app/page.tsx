import React from "react";
import HeroSection from "./components/heroSection";
import About from "./components/about";
import Team from "./components/team";
import Metrics from "./components/metrics";
import Contact from "./components/contact";

export default function Home() {
  return (
    
    <div>
      <HeroSection />
      <About />
      <Team />
      <Metrics />
      <Contact />
    </div>
  );
}
