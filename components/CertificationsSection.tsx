"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certs = [
  
  { title: "DEEP LEARNING FUNDAMENTALS", issuer: "NVIDIA", dark: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="pl-16 pr-8 md:pl-20 md:pr-16 py-16"
      style={{ borderTop: "1px solid var(--border)" }}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.h2 variants={fadeUp} className="display-heading mb-12"
          style={{ fontSize: "clamp(40px, 8vw, 110px)" }}>
          CERTIFICATIONS
        </motion.h2>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {certs.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className={`p-8 ${c.dark ? "card-dark" : ""}`}
              style={{ border: "1px solid var(--border)", marginTop: "-1px", marginLeft: "-1px" }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p
                className="p-8 group transition-colors duration-200 hover:bg-black hover:text-white"
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.88rem",
                  letterSpacing: "0.05em",
                  // color: c.dark ? "var(--dark-text)" : "var(--fg)",
                }}
              >
                {c.title}
              </p>
              <p
                className="mono-label"
                style={{ color: c.dark ? "rgba(240,240,240,0.45)" : undefined }}
              >
                {c.issuer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
