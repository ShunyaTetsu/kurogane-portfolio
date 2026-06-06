"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "UI / UX Design",
  "Web Design",
  "Brand Identity",
  "App Design",
  "SNS Strategy",
  "Prototyping",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="px-8 md:px-12 py-32"
      style={{ backgroundColor: "#F0EFEB" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
          style={{ borderTop: "1px solid rgba(17,17,17,0.1)", paddingTop: "1.5rem" }}
        >
          <span style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#888888" }}>
            (02)
          </span>
          <span style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#111111" }}>
            ABOUT
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — large statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontWeight: 300,
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                lineHeight: 1.08,
                letterSpacing: "0.01em",
                color: "#111111",
              }}
            >
              Design is
              <br />
              a craft,
              <br />
              not a style.
            </h2>
          </motion.div>

          {/* Right — bio + skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2"
          >
            <p
              className="mb-6"
              style={{ fontSize: "13px", lineHeight: 2, color: "#555555", fontWeight: 300 }}
            >
              TETSU が率いるクリエイティブカンパニー。飲食・フィットネス・スポーツ業界を中心に、
              Webサイト制作からアプリUI・ブランドアイデンティティまで、
              デザインの全工程を一貫して手がける。
            </p>
            <p
              className="mb-14"
              style={{ fontSize: "13px", lineHeight: 2, color: "#555555", fontWeight: 300 }}
            >
              「まず動く」を信条に、2026年創業。
              現在はスポーツコミュニティアプリ「Spopal」を自社開発中。
            </p>

            {/* Skills */}
            <div
              style={{ borderTop: "1px solid rgba(17,17,17,0.1)", paddingTop: "1.5rem" }}
            >
              <p
                className="mb-5"
                style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#888888" }}
              >
                EXPERTISE
              </p>
              <ul className="flex flex-col gap-3">
                {skills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                    className="flex items-center gap-4"
                    style={{ fontSize: "12px", color: "#333333", fontWeight: 300 }}
                  >
                    <span style={{ width: "16px", height: "1px", backgroundColor: "#CCCCCC", flexShrink: 0 }} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
