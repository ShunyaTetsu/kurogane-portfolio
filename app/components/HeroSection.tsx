"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between px-8 md:px-12 pt-32 pb-12"
      style={{ backgroundColor: "#F8F8F6" }}
    >
      {/* Top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-16 left-8 right-8 md:left-12 md:right-12 origin-left"
        style={{ height: "1px", backgroundColor: "rgba(17,17,17,0.12)" }}
      />

      {/* Main content — left aligned */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "#888888",
            fontWeight: 400,
            marginBottom: "2.5rem",
          }}
        >
          WEB DESIGNER — TOKYO
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontWeight: 300,
              fontSize: "clamp(5rem, 18vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#111111",
            }}
          >
            KURO
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontWeight: 300,
              fontSize: "clamp(5rem, 18vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#111111",
            }}
          >
            GANE
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-10 max-w-sm"
          style={{
            fontSize: "13px",
            lineHeight: 1.9,
            color: "#888888",
            fontWeight: 300,
          }}
        >
          UI/UXデザイン・Webサイト制作・ブランディングを手がける
          クリエイティブカンパニー。
        </motion.p>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="max-w-7xl mx-auto w-full flex items-end justify-between"
      >
        <a
          href="#works"
          className="transition-opacity hover:opacity-40"
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "#111111",
            fontWeight: 400,
          }}
        >
          ↓ SCROLL
        </a>

        <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#888888" }}>
          Est. 2026
        </p>
      </motion.div>
    </section>
  );
}
