"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import OffDutyDrawer from "@/components/OffDutyDrawer";
import { soundFX } from "@/lib/soundFX";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [isOffDutyOpen, setIsOffDutyOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  const openOffDuty = useCallback(() => {
    setIsOffDutyOpen(true);
  }, []);

  const closeOffDuty = useCallback(() => {
    setIsOffDutyOpen(false);
  }, []);

  const toggleSound = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      soundFX.setMuted(next);
      return next;
    });
  }, []);

  /* ── Custom Cursor, Global Scroll Audio & Interaction Hooks ── */
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let fx = -100, fy = -100;
    let lx = -100, ly = -100;

    const move = (e: MouseEvent) => {
      fx = e.clientX;
      fy = e.clientY;
      if (cursor) {
        cursor.style.left = `${fx}px`;
        cursor.style.top  = `${fy}px`;
      }
    };

    let animationFrameId: number;
    const animate = () => {
      if (follower) {
        lx += (fx - lx) * 0.15;
        ly += (fy - ly) * 0.15;
        follower.style.left = `${lx}px`;
        follower.style.top  = `${ly}px`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const hover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, input, textarea, [data-cursor], .project-card")) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }

      if (t.closest(".resume-modal-container")) {
        document.body.classList.add("cursor-modal");
      } else {
        document.body.classList.remove("cursor-modal");
      }
    };

    // Global tactile click sound listener for interactive items
    const handleClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("button, a, input, textarea, [data-cursor]")) {
        soundFX.playClick();
      }
    };

    // Global tactile subtle tick sound on entering links or buttons
    const handleMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("button, a, .project-card, [data-cursor]")) {
        soundFX.playTick();
      }
    };

    // Tactile scroll sound ratchet (Desktop & Mobile)
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const SCROLL_THRESHOLD = 65; // pixels delta to trigger subtle ratchet tick

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);

      if (delta >= SCROLL_THRESHOLD) {
        soundFX.playScrollTick();
        lastScrollY = currentScrollY;
      }
    };

    // Mobile touch events: unlock audio context on initial touch & trigger tap sound
    const handleTouchStart = (e: TouchEvent) => {
      soundFX.init();
      const t = e.target as HTMLElement;
      if (t.closest("button, a, [data-cursor]")) {
        soundFX.playClick();
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);
    window.addEventListener("click", handleClick);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Custom cursor elements */}
      <div ref={cursorRef}   className="custom-cursor"   aria-hidden />
      <div ref={followerRef} className="cursor-follower" aria-hidden />

      {/* Feature 5: Off-Duty Interests & Passions Drawer */}
      <OffDutyDrawer isOpen={isOffDutyOpen} onClose={closeOffDuty} />

      {/* Loading sequence */}
      <AnimatePresence mode="wait">
        {!loaded && <Loader onComplete={handleLoaded} />}
      </AnimatePresence>

      <main className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar
          isMuted={isMuted}
          onToggleSound={toggleSound}
          onOpenOffDuty={openOffDuty}
        />
        <Hero />
        <WhoAmI />
        <Skills />
        <Work />
        <Experience />
        <Experiments />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
