"use client";
import { useEffect } from "react";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  useLenis();

  return (
    <main>
      <Cursor />
      <Navbar />
      <div className="ml-0" style={{ paddingLeft: "0" }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  );
}
