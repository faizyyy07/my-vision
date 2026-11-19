"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="hero"
        ref={ref}
        className="relative min-h-screen flex flex-col justify-end pb-12 px-6 md:px-10 overflow-hidden grain pt-28"
        style={{ backgroundColor: "#EAE3D9" }}
      >
        {/* Registration Marks / Swiss Grid Accents */}
        <div className="absolute top-20 left-6 text-[#211C1E]/30 font-mono text-xs select-none pointer-events-none hidden md:block">
          + REG_MARK_01 [GRID_SYS: 12COL]
        </div>
        <div className="absolute top-20 right-6 text-[#211C1E]/30 font-mono text-xs select-none pointer-events-none hidden md:block">
          REF: 4A1025-SWISS +
        </div>

        {/* Top-right meta label */}
        <motion.div
          className="absolute top-28 right-6 md:right-10 text-right z-10"
          style={{ opacity }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="inline-block border border-[#4A1025] px-2 py-0.5 mb-1 bg-[#4A1025]/5">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold text-[#4A1025]">
              ISSUE 01 / 2026-2027
            </p>
          </div>
          <p className="font-mono text-xs tracking-[0.2em] text-[#211C1E]/60 uppercase">
            AMC ENGINEERING COLLEGE (VTU)
          </p>
        </motion.div>

        {/* Top-left coordinate */}
        <motion.div
          className="absolute top-28 left-6 md:left-10 z-10"
          style={{ opacity }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-[#211C1E]/60">
            12.9716° N, 77.5946° E
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] text-[#4A1025] uppercase mt-0.5 font-bold">
            LOC: BENGALURU, KARNATAKA, INDIA
          </p>
        </motion.div>

        {/* Main editorial hero block */}
        <motion.div style={{ y, opacity }}>
          {/* PORTFOLIO — giant display text with editorial overlapping */}
          <div className="relative select-none mb-3">
            {/* Background ghost outline text */}
            <span
              className="hero-title absolute inset-0 select-none pointer-events-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(74,16,37,0.18)",
                transform: "translateY(12px) translateX(8px)",
              }}
              aria-hidden
            >
              PORTFOLIO
            </span>
            <motion.h1
              className="hero-title relative text-[#4A1025]"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              PORTFOLIO
            </motion.h1>
          </div>

          {/* Name + roles */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-2 mb-8">
            <div>
              <motion.h2
                className="hero-sub text-[#211C1E]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
              >
                MOHAMMED FAIZ
              </motion.h2>
              <motion.p
                className="font-mono text-xs md:text-sm tracking-[0.2em] mt-2 uppercase text-[#4A1025] font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                Software Engineer &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; AI Engineer
              </motion.p>
            </div>

            {/* Tagline + CTA */}
            <motion.div
              className="flex flex-col gap-4 md:items-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p
                className="font-inter text-sm md:text-base italic max-w-sm md:text-right text-[#211C1E]/75"
              >
                &ldquo;Curious mind. Builder by nature. Engineer in progress.&rdquo;
              </p>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <button
                  onClick={scrollToWork}
                  data-cursor
                  className="border-2 border-[#4A1025] font-mono text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all hover:bg-[#4A1025] hover:text-[#EAE3D9] font-bold"
                  style={{ color: "#4A1025" }}
                >
                  EXPLORE MY WORK
                </button>
                <button
                  onClick={() => setResumeOpen(true)}
                  data-cursor
                  className="font-mono text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all hover:opacity-90 font-bold flex items-center gap-2 shadow-sm"
                  style={{ backgroundColor: "#4A1025", color: "#EAE3D9" }}
                >
                  <FileText size={14} />
                  <span>VIEW / DOWNLOAD RESUME</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom divider row with metadata & scroll indicator */}
          <div className="flex items-center justify-between pt-6 border-t border-[#211C1E]/15">
            <p className="font-mono text-xs tracking-widest uppercase text-[#211C1E]/50">
              FAIZLOTIYA.TECH
            </p>
            {/* Scroll indicator */}
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-1 group"
              style={{ color: "#211C1E" }}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                SCROLL
              </span>
              <div
                className="w-5 h-8 border flex justify-center pt-1.5"
                style={{ borderColor: "rgba(33,28,30,0.35)", borderRadius: 20 }}
              >
                <span className="scroll-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#4A1025" }} />
              </div>
            </button>
            <p className="font-mono text-xs tracking-widest uppercase text-[#211C1E]/50">
              GITHUB.COM/FAIZYYY07
            </p>
          </div>
        </motion.div>
      </section>

      {/* Brutalist Editorial Ticker Ribbon */}
      <div className="overflow-hidden py-3 border-y border-[#211C1E]/20 bg-[#211C1E] text-[#EAE3D9] select-none">
        <div className="flex whitespace-nowrap font-mono text-xs tracking-[0.25em] uppercase animate-[marquee_25s_linear_infinite]">
          <span className="mx-4">MOHAMMED FAIZ</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">SOFTWARE ENGINEER</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">FULL STACK DEVELOPER</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">AI ENGINEER</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">AMC ENGINEERING COLLEGE (VTU)</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">AGENTIC AI &bull; RAG &bull; MCP</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">BENGALURU, KARNATAKA, INDIA</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">MOHAMMED FAIZ</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">SOFTWARE ENGINEER</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">FULL STACK DEVELOPER</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">AI ENGINEER</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">AMC ENGINEERING COLLEGE (VTU)</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">AGENTIC AI &bull; RAG &bull; MCP</span>
          <span className="text-[#4A1025] mx-4">✦</span>
          <span className="mx-4">BENGALURU, KARNATAKA, INDIA</span>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
