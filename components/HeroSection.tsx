"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-between pt-16 pb-12 pl-16 pr-8 md:pl-20 md:pr-16 relative">
      {/* Big name */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <h1 className="display-heading" style={{ fontSize: "clamp(72px, 14vw, 100px)", color: "var(--fg)" }}>
            RESHMA
          </h1>
          <h1 className="display-heading" style={{ fontSize: "clamp(72px, 14vw, 100px)", color: "var(--muted)" }}>
            THOUTI
          </h1>
        </motion.div>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-2 gap-y-4 md:grid-cols-4 md:gap-8"
        >
          {[
            { label: "ROLE", value: "Full-Stack Developer" },
            { label: "STATUS", value: "Open to Opportunities" },
            { label: "LOCATION", value: "Warangal, India" },
            { label: "UNIVERSITY", value: "SR University" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="mono-label mb-1">{label}</p>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.9rem" }}>{value}</p>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <button className="btn-outline" onClick={() => scrollTo("projects")}>VIEW WORK</button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>GET IN TOUCH</button>
          <a
            href="https://github.com/Reshma-Thouti"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GITHUB 
          </a>
          <a
            href="https://www.linkedin.com/in/reshma-thouti-913378321/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LINKEDIN 
          </a>
        </motion.div>
      </div>
    </section>
  );
}
