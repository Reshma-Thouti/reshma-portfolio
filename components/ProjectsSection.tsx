"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    date: "2026",
    title: "JOB TRACKER PRO",
    desc: "Full-stack job tracking system with session-based authentication and role-based access (User/Admin). Secure CRUD operations with JDBC, PreparedStatements, MySQL. MVC architecture deployed on Apache Tomcat 11.",
    tech: ["Java", "Servlets", "JDBC", "MySQL", "HTML", "CSS"],
    href: "https://github.com/Reshma-Thouti",
    dark: false,
  },
   {
    num: "02",
    date: "2026",
    title: "LEETSYNC",
    desc: "Chrome/Edge extension automating LeetCode & GeeksforGeeks â†’ GitHub sync using MutationObserver DOM detection, GitHub REST API, and Background Service Workers. Implemented Accepted-Only uploads, Account-Locked Sync, analytics dashboard, streak tracking, and automated repository organization.",
    tech: ["JavaScript Â· Chrome Extensions API Â· GitHub REST API Â· MutationObserver Â· Service Workers"],
    href: "https://github.com/Reshma-Thouti/LeetSync-Extension",
    dark: false,

  },
  {
    num: "03",
    date: "2025",
    title: "ONLINE SAREE SHOPPING",
    desc: "Responsive e-commerce platform with product filters, shopping cart, wishlist, and checkout. Custom 'Saree Customization' feature for color, fabric, and design preferences.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    href: "https://github.com/Reshma-Thouti",
    dark: false,
  },
  {
    num: "04",
    date: "2026",
    title: "STUDY TASK MANAGER",
    desc: "Java desktop application with interactive GUI (Java Swing). Multi-threaded reminder system, file-based persistence, OOP principles, and modular architecture.",
    tech: ["Java", "Java Swing", "Multi-threading", "File I/O"],
    href: "https://github.com/Reshma-Thouti",
    dark: false,
  },
  {
    num: "05",
    date: "2024",
    title: "SMART DUSTBIN",
    desc: "IoT-based waste classification system to sort wet and dry waste efficiently. Focused on sustainability and logical automation using electronics.",
    tech: ["IoT", "Electronics", "Automation"],
    href: "https://github.com/Reshma-Thouti",
    dark: false,
  },
  {
    num: "06",
    date: "2024",
    title: "BILLING SYSTEM",
    desc: "C-based billing system to automate cosmetic store transactions. Uses structures and functions for product listing and bill generation.",
    tech: ["C", "Data Structures", "File Handling"],
    href: "https://github.com/Reshma-Thouti",
    dark: false,
  },
 
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="pl-16 pr-8 md:pl-20 md:pr-16 py-16"
      style={{ borderTop: "1px solid var(--border)" }}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.h2 variants={fadeUp} className="display-heading mb-12"
          style={{ fontSize: "clamp(36px, 8vw, 110px)" }}>
          SELECTED PROJECTS
        </motion.h2>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {projects.map((p) => (
            <motion.div
              key={p.num}
              variants={fadeUp}
              className="p-7 flex flex-col justify-between min-h-[280px] group transition-colors duration-200  hover:bg-white"
              style={{
                border: "1px solid var(--border)",
                marginTop: "-1px",
                marginLeft: "-1px",
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <p className="mono-label mb-3" style={{ color: p.dark ? "rgba(240,240,240,0.45)" : undefined }}>
                  {p.num} â€” {p.date}
                </p>
                <h3
                  className="display-heading mb-4 group-hover:text-white"
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 26px)",
                    color: "var(--fg)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                    color: p.dark ? "rgba(240,240,240,0.75)" : "var(--fg)",
                  }}
                >
                  {p.desc}
                </p>
              </div>
              <div className="mt-5">
                <p
                  className="mono-label mb-3"
                  style={{ color: p.dark ? "rgba(240,240,240,0.4)" : undefined }}
                >
                  {p.tech.join(" Â· ")}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label underline hover:no-underline"
                  style={{
                    color: p.dark ? "rgba(240,240,240,0.6)" : "var(--fg)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  VIEW SOURCE â†—
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
