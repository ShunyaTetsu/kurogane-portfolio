export default function Footer() {
  return (
    <footer
      className="px-8 md:px-12 py-8"
      style={{
        backgroundColor: "#F8F8F6",
        borderTop: "1px solid rgba(17,17,17,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontWeight: 400,
            fontSize: "0.95rem",
            letterSpacing: "0.2em",
            color: "#111111",
          }}
        >
          KUROGANE
        </span>
        <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#BBBBBB" }}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
