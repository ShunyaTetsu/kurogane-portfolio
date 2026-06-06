"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === name ? "#111111" : "rgba(17,17,17,0.15)"}`,
    padding: "10px 0 12px",
    fontSize: "14px",
    fontWeight: 300,
    color: "#111111",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.3s",
    borderRadius: 0,
  });

  return (
    <section
      id="contact"
      className="px-8 md:px-12 py-32"
      style={{ backgroundColor: "#F8F8F6" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
          style={{ borderTop: "1px solid rgba(17,17,17,0.1)", paddingTop: "1.5rem" }}
        >
          <span style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#888888" }}>
            (03)
          </span>
          <span style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#111111" }}>
            CONTACT
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontWeight: 300,
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#111111",
                marginBottom: "2rem",
              }}
            >
              Let&apos;s work
              <br />
              together.
            </h2>
            <p
              style={{ fontSize: "13px", lineHeight: 2, color: "#888888", fontWeight: 300 }}
            >
              プロジェクトのご相談、受託制作のお見積もり、
              まずはお気軽にお声がけください。
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="py-16"
              >
                <p
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontWeight: 400,
                    fontSize: "1.8rem",
                    color: "#111111",
                    marginBottom: "0.75rem",
                  }}
                >
                  Thank you.
                </p>
                <p style={{ fontSize: "12px", color: "#888888", fontWeight: 300 }}>
                  内容を確認次第、ご連絡いたします。
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div>
                  <label
                    style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#888888", display: "block", marginBottom: "0.5rem" }}
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={fieldStyle("name")}
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label
                    style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#888888", display: "block", marginBottom: "0.5rem" }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={fieldStyle("email")}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#888888", display: "block", marginBottom: "0.5rem" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ ...fieldStyle("message"), resize: "none" }}
                    placeholder="お気軽にご相談ください..."
                  />
                </div>

                {status === "error" && (
                  <p style={{ fontSize: "11px", color: "#999999", letterSpacing: "0.1em" }}>
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="transition-opacity hover:opacity-50 disabled:opacity-30"
                    style={{
                      backgroundColor: "#111111",
                      color: "#F8F8F6",
                      padding: "14px 48px",
                      fontSize: "10px",
                      letterSpacing: "0.35em",
                      fontWeight: 400,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {status === "loading" ? "SENDING..." : "SEND"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
