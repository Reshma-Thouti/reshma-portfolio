"use client";
import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let lenis: any;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
    return () => { if (lenis) lenis.destroy(); };
  }, []);
}
