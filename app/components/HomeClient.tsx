"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroAnimation from "./IntroAnimation";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function HomeClient() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <IntroAnimation onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>
      <Navbar />
      <main>
        <HeroSection started={introComplete} />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
