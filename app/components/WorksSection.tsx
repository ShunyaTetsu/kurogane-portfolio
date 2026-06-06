"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    index: "01",
    title: "Spopal",
    category: "App Design / Branding",
    year: "2026",
    description: "スポーツ好きのためのコミュニティアプリ。UI設計からビジュアルアイデンティティまで一貫してデザイン。",
  },
  {
    index: "02",
    title: "Project Title",
    category: "Web Design",
    year: "2026",
    description: "クライアントのブランドを体現するWebサイト。ユーザー体験を軸にした情報設計とビジュアルデザイン。",
  },
  {
    index: "03",
    title: "Project Title",
    category: "Brand Identity",
    year: "2026",
    description: "ゼロからブランドを構築するプロジェクト。ロゴ・カラー・タイポグラフィシステムの設計。",
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      {/* Thumbnail placeholder */}
      <div
        className="w-full mb-6 overflow-hidden"
        style={{ aspectRatio: "4/3", backgroundColor: "#EEEDE9" }}
      >
        <div
          className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ backgroundColor: "#E4E3DF" }}
        />
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "#888888",
              marginBottom: "0.4rem",
            }}
          >
            {project.category}
          </p>
          <h3
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontWeight: 400,
              fontSize: "1.5rem",
              letterSpacing: "0.04em",
              color: "#111111",
              marginBottom: "0.6rem",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.8,
              color: "#888888",
              fontWeight: 300,
              maxWidth: "28ch",
            }}
          >
            {project.description}
          </p>
        </div>
        <span
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontWeight: 300,
            fontSize: "1rem",
            color: "#CCCCCC",
            whiteSpace: "nowrap",
            marginTop: "2px",
          }}
        >
          {project.year}
        </span>
      </div>
    </motion.article>
  );
}

export default function WorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="works" className="px-8 md:px-12 py-32" style={{ backgroundColor: "#F8F8F6" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
          style={{ borderTop: "1px solid rgba(17,17,17,0.1)", paddingTop: "1.5rem" }}
        >
          <div className="flex items-baseline gap-4">
            <span style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#888888" }}>
              (0{projects.length})
            </span>
            <span style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#111111" }}>
              SELECTED WORKS
            </span>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.index} project={project} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
