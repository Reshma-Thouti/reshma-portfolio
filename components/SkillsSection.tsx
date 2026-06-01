"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "LANGUAGES",
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
  },

  {
    label: "WEB DEVELOPMENT",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation"
    ],
  },

  {
    label: "BACKEND & FRAMEWORKS",
    skills: [
      "Servlets",
      "PHP",
      "MVC Architecture",
      "JDBC"
    ],
  },

  {
    label: "DATABASES & TOOLS",
    skills: [
      "MySQL",
      "Git",
      "GitHub",
      "VS Code",
      "Chrome Extensions API",
      "GitHub REST API"
    ],
  },

  {
    label: "BROWSER & API DEVELOPMENT",
    skills: [
      "Manifest V3",
      "Service Workers",
      "Browser Storage APIs",
      "MutationObserver",
      "Token-Based Authentication"
    ],
  },

  {
    label: "AREAS OF INTEREST",
    skills: [
      "Full Stack Development",
      "Machine Learning",
      "Browser Extension Development",
      "OOP",
      "File Handling"
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="pl-16 pr-8 md:pl-20 md:pr-16 py-16"
      style={{ borderTop: "1px solid var(--border)" }}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.h2 variants={fadeUp} className="display-heading mb-12"
          style={{ fontSize: "clamp(36px, 7vw, 100px)" }}>
          TECHNICAL ARSENAL
        </motion.h2>

        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map(({ label, skills }) => (
            <motion.div key={label} variants={fadeUp}>
              <p className="mono-label mb-4">{label}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
