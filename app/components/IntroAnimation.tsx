"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: Props) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1800);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center px-8 md:px-12"
      style={{ backgroundColor: "#111111" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
    >
      <div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontWeight: 300,
              fontSize: "clamp(5rem, 18vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#F8F8F6",
            }}
          >
            KURO
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontWeight: 300,
              fontSize: "clamp(5rem, 18vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#F8F8F6",
            }}
          >
            GANE
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "1px",
            backgroundColor: "rgba(248,248,246,0.25)",
            transformOrigin: "left",
            marginTop: "1.5rem",
          }}
        />
      </div>
    </motion.div>
  );
}
