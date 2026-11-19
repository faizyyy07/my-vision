"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Shield, Cpu, Code2, GraduationCap, MapPin } from "lucide-react";

export default function WhoAmI() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden grain"
      style={{ backgroundColor: "#EAE3D9", borderTop: "1px solid rgba(33,28,30,0.12)" }}
    >
      {/* Section label */}
      <div className="flex items-center justify-between mb-10">
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase"
          style={{ color: "#4A1025" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          — SECTION 02 / WHO AM I
        </motion.p>
        <p className="font-mono text-[10px] tracking-widest text-[#211C1E]/40 uppercase hidden sm:block">
          ARCHIVE REF: FA-2027-BIO &bull; AMC/VTU
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Left: big heading + editorial portrait composition */}
        <div className="md:col-span-5">
          <div className="overflow-hidden">
            <motion.h2
              className="section-heading text-[#4A1025]"
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              WHO AM I?
            </motion.h2>
          </div>

          {/* Editorial Portrait Composition */}
          <motion.div
            className="mt-8 relative overflow-hidden border-2 border-[#211C1E] bg-[#211C1E] text-[#EAE3D9] p-6 shadow-xl"
            style={{
              aspectRatio: "3/4",
              maxWidth: 360,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {/* Top Magazine Label in Card */}
            <div className="flex items-center justify-between border-b border-[#EAE3D9]/20 pb-3 mb-6 font-mono text-[10px] tracking-widest text-[#EAE3D9]/60">
              <span>PLATE 01.A</span>
              <span className="text-[#4A1025] bg-[#EAE3D9] px-1.5 py-0.5 font-bold">PROFILE</span>
              <span>12.97° N, 77.59° E</span>
            </div>

            {/* Stylized Monochrome Silhouette / Editorial Graphic */}
            <div className="relative h-48 flex items-center justify-center my-4 overflow-hidden border border-[#EAE3D9]/15 bg-gradient-to-b from-[#211C1E] to-[#4A1025]/30">
              {/* Graphic crosshair & grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#EAE3D9_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              
              <div className="relative z-10 flex flex-col items-center text-center p-4">
                <div className="w-20 h-20 border-2 border-[#4A1025] bg-[#EAE3D9] text-[#4A1025] flex items-center justify-center font-anton text-4xl shadow-md mb-3">
                  MF
                </div>
                <p className="font-anton text-xl tracking-wider text-[#EAE3D9]">
                  MOHAMMED FAIZ
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#EAE3D9]/60 uppercase mt-0.5">
                  B.E. COMPUTER SCIENCE &amp; ENGINEERING
                </p>
                <p className="font-mono text-[9px] tracking-wider text-[#EAE3D9]/40 uppercase mt-0.5">
                  AMC ENGINEERING COLLEGE (VTU)
                </p>
              </div>

              {/* Crop marks */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-[#EAE3D9]/40">+ CROP</div>
              <div className="absolute top-2 right-2 font-mono text-[9px] text-[#EAE3D9]/40">CROP +</div>
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-[#EAE3D9]/40">+ CROP</div>
              <div className="absolute bottom-2 right-2 font-mono text-[9px] text-[#EAE3D9]/40">CROP +</div>
            </div>

            {/* Bottom Barcode & Metadata Strip */}
            <div className="mt-6 pt-4 border-t border-[#EAE3D9]/20 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-[#EAE3D9]/40 uppercase">STATUS</p>
                <p className="font-mono text-xs font-bold text-[#EAE3D9] uppercase tracking-wider">ENGINEER IN PROGRESS (2027)</p>
              </div>
              {/* Barcode representation */}
              <div className="flex gap-[2px] items-end h-7 opacity-75">
                {[4,8,2,6,12,3,9,5,11,4,7,2,8,12,4,6,3,10,5].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2px] bg-[#EAE3D9]"
                    style={{ height: `${h * 2}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: editorial content */}
        <div className="md:col-span-7 flex flex-col justify-start pt-2 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Pull quote accent bar */}
            <div className="w-16 h-1.5 mb-8 bg-[#4A1025]" />

            <p className="font-inter text-xl md:text-2xl leading-relaxed mb-6 text-[#211C1E] font-medium">
              I&apos;m <strong>Mohammed Faiz</strong>, a Computer Science Engineering student passionate about
              building software, exploring emerging technologies and turning ideas into practical solutions.
            </p>

            <p className="font-inter text-base md:text-lg leading-relaxed mb-8 text-[#211C1E]/80">
              I enjoy working across full-stack development, backend engineering, and AI-powered applications.
              Beyond academics at AMC Engineering College, I build production websites and digital experiences
              for businesses — pairing engineering rigor with clean, purposeful design.
            </p>

            {/* Editorial Focus Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="p-4 border border-[#211C1E]/15 bg-white/30">
                <div className="flex items-center gap-2 mb-2 text-[#4A1025]">
                  <Code2 size={16} />
                  <span className="font-mono text-xs tracking-wider uppercase font-bold">FULL-STACK &amp; APIS</span>
                </div>
                <p className="font-inter text-xs leading-relaxed text-[#211C1E]/75">
                  Developing scalable web applications, RESTful APIs, authentication layers, and data validation.
                </p>
              </div>
              <div className="p-4 border border-[#211C1E]/15 bg-white/30">
                <div className="flex items-center gap-2 mb-2 text-[#4A1025]">
                  <Cpu size={16} />
                  <span className="font-mono text-xs tracking-wider uppercase font-bold">AI &amp; CLOUD SYSTEMS</span>
                </div>
                <p className="font-inter text-xs leading-relaxed text-[#211C1E]/75">
                  Hands-on with Agentic AI, RAG pipelines, LangChain, Model Context Protocol (MCP), and AWS/Docker.
                </p>
              </div>
            </div>

            {/* Stat strip */}
            <div
              className="grid grid-cols-3 gap-0 mt-8 border-y border-[#211C1E]/15"
            >
              {[
                { label: "INSTITUTION", value: "AMC ENGG COLLEGE (VTU)" },
                { label: "DEGREE & BATCH", value: "B.E. CSE • CLASS OF 2027" },
                { label: "LOCATION", value: "BENGALURU, KA, INDIA" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="py-5 px-4"
                  style={{ borderLeft: i > 0 ? "1px solid rgba(33,28,30,0.15)" : "none" }}
                >
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-1 text-[#4A1025] font-bold">
                    {s.label}
                  </p>
                  <p className="font-mono text-xs text-[#211C1E] font-semibold">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background large ghost text */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden lg:block"
        aria-hidden
      >
        <span
          className="text-[22vw] font-anton leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(74,16,37,0.06)" }}
        >
          ME
        </span>
      </div>
    </section>
  );
}
