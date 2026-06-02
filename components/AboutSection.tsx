"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen pl-16 pr-8 md:pl-20 md:pr-16 py-16"
      style={{ borderTop: "1px solid var(--border)" }}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {/* Heading */}
        <motion.h2 variants={fadeUp} className="display-heading mb-12"
          style={{ fontSize: "clamp(52px, 10vw, 130px)" }}>
          ABOUT
        </motion.h2>

        {/* Stats row */}
        <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "CGPA", value: "9.52" },
            { label: "LeetCode Problems", value: "300+" },
            { label: "Projects Built", value: "6+" },
            { label: "Experience", value: "1" },
          ].map(({ label, value }) => (
            <motion.div key={label} variants={fadeUp}>
              <p className="mono-label mb-2">{label}</p>
              <p className="display-heading" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>{value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div variants={fadeUp}>
            <h3 className="display-heading mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>EDUCATION</h3>
            <div>
              <p className="font-bold text-base mb-1" style={{ fontFamily: "'Courier New', monospace" }}>
                SR University, Warangal
              </p>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.85rem" }}>
                B.Tech — Computer Science & Engineering
              </p>
              <p className="mono-label mt-1 mb-3">Aug 2023 — Present</p>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.82rem", lineHeight: 1.6, color: "var(--fg)" }}>
                CGPA: 9.52 | Courses: Data Structures, Operating Systems, Discrete Mathematics, Theory of Computation
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeUp}>
            <h3 className="display-heading mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>EXPERIENCE</h3>
            <div>
              <p className="font-bold text-base mb-1" style={{ fontFamily: "'Courier New', monospace" }}>
                Student Developer   SR University
              </p>
              <p className="mono-label mt-1 mb-3">Ongoing</p>
              <ul style={{ fontFamily: "'Courier New', monospace", fontSize: "0.82rem", lineHeight: 1.7 }}>
                <li> Developed a full-stack Online Saree Shopping Website under faculty mentorship.</li>
                <li> Backend integration & MySQL database connectivity.</li>
                <li> Translating real business requirements into functional applications.</li>
                <li> Ongoing enhancements to improve UX and functionality.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
