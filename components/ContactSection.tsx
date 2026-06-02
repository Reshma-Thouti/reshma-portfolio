"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "GITHUB", value: "github.com/Reshma-Thouti", href: "https://github.com/Reshma-Thouti" },
  { label: "LINKEDIN", value: "linkedin.com/in/Reshma-Thouti", href: "https://www.linkedin.com/in/reshma-thouti-913378321/" },
  { label: "EMAIL", value: "reshmathouti5@gmail.com", href: "mailto:reshmathouti5@gmail.com" },
  { label: "PHONE", value: "+91 6309556714", href: "tel:+916309556714" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="pl-16 pr-8 md:pl-20 md:pr-16 py-16 pb-24"
      style={{ borderTop: "1px solid var(--border)" }}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.h2 variants={fadeUp} className="display-heading"
          style={{ fontSize: "clamp(40px, 8vw, 110px)" }}>
          LET'S CONNECT
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div variants={fadeUp}>
            <h3 className="display-heading mb-6" style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>
              LET'S BUILD SOMETHING<br />TOGETHER.
            </h3>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--fg)", maxWidth: "420px" }}>
              I'm currently looking for full-stack developer roles and open-source collaborations.
              Whether you have a role in mind, a project idea, or just want to say hi  my inbox is always open.
            </p>
            <a href="/resume.pdf" download className="btn-outline mt-8 inline-block">
              DOWNLOAD RESUME 
            </a>
          </motion.div>

          {/* Right: links */}
          <motion.div variants={stagger} className="flex flex-col gap-0">
            {links.map(({ label, value, href }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex flex-col p-5 hover:bg-black hover:text-white transition-colors"
                style={{ border: "1px solid var(--border)", marginTop: "-1px" }}
              >
                <span className="mono-label mb-1" style={{ color: "inherit", opacity: 0.55 }}>{label}</span>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.85rem" }}>
                  {value} 
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
