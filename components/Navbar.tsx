"use client";
import { useClock } from "@/hooks/useClock";
import { motion } from "framer-motion";

const navItems = ["HOME","ABOUT","SKILLS","PROJECTS","CONTACT"];

export default function Navbar() {
  const { day, date } = useClock();

  const scrollTo = (id: string) => {
    if (id === "HOME") window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      const el = document.getElementById(id.toLowerCase());
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--bg)" }}
      >
        {/* Logo */}
        <div
          className="font-black text-sm tracking-widest cursor-pointer select-none"
          style={{ fontFamily: "'Arial Black', sans-serif", fontWeight: 900 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          RT
        </div>

        {/* Date display */}
        <div className="mono-label text-right" style={{ color: "var(--fg)", letterSpacing: "0.12em" }}>
          {day && `${day}, ${date}`}
        </div>

        {/* Right placeholder to balance flex */}
        
      </motion.header>

      {/* Left vertical nav */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed left-0 top-0 bottom-0 z-40 flex flex-col items-center justify-center gap-8"
        style={{ width: "44px", borderRight: "1px solid var(--border)" }}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="vertical-nav-text hover:opacity-100 transition-opacity"
            style={{ color: "var(--muted)", background: "none", border: "none", cursor: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            {item}
          </button>
        ))}
      </motion.nav>

      {/* Bottom left year */}
      <div
        className="fixed bottom-0 left-0 z-40 flex items-end justify-center pb-3"
        style={{ width: "44px" }}
      >
        <span className="vertical-nav-text" style={{ color: "var(--muted)", fontSize: "0.58rem" }}>
          Â© 2026
        </span>
      </div>
    </>
  );
}
