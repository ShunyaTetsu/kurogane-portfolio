"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Works",   href: "#works"   },
  { label: "About",   href: "#about"   },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(248,248,246,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(17,17,17,0.08)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontWeight: 400,
            fontSize: "1.05rem",
            letterSpacing: "0.22em",
            color: "#111111",
          }}
          className="transition-opacity hover:opacity-50"
        >
          KUROGANE
        </a>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-40"
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                fontWeight: 400,
                color: "#111111",
              }}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
