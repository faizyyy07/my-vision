"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Compass, Languages, Music, Flame, MapPin, Target, Sparkles, ArrowUpRight } from "lucide-react";
import { soundFX } from "@/lib/soundFX";

interface OffDutyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const sports = [
  {
    name: "CRICKET",
    role: "Top-Order Batsman",
    stat: "MATCH TEMPO",
    desc: "Shot timing, reading bowler variations, and maintaining composure in chase scenarios.",
    tag: "ATHLETIC",
  },
  {
    name: "SNOOKER & CUE SPORTS",
    role: "Geometry & Positional Play",
    stat: "PRECISION",
    desc: "Meticulous angle calculation, spin control, and calculating two-shot safety positions.",
    tag: "TACTICAL",
  },
  {
    name: "BADMINTON",
    role: "Court Agility & Fast Rallies",
    stat: "REFLEX",
    desc: "Explosive lateral movement, wrist deception, and high-intensity stamina conditioning.",
    tag: "INTENSITY",
  },
  {
    name: "RUNNING & CONDITIONING",
    role: "Endurance & Mental Focus",
    stat: "CADENCE",
    desc: "Morning Bangalore circuits for cognitive clarity, breath discipline, and physical grit.",
    tag: "STAMINA",
  },
];

const fieldOps = [
  {
    title: "SWIGGY FOOD & MUSIC FESTIVAL",
    location: "Bangalore",
    role: "Ground Operations & Crowd Logistics Volunteer",
    period: "2024",
    highlights: [
      "Orchestrated backstage movement and access credentials under high footfall",
      "Handled rapid emergency resolution and crowd safety routing across festival zones",
      "Stress-tested real-time communication protocols across multi-tier volunteer teams",
    ],
  },
  {
    title: "CAMPUS HACKATHON & TECH FESTS",
    location: "AMC / VTU Bangalore",
    role: "Event Organizing & Hospitality Liaison",
    period: "2023 - 2024",
    highlights: [
      "Welcomed and coordinated visiting faculty, guest evaluators, and keynote mentors",
      "Managed track schedule integrity, AV equipment checks, and round progression",
    ],
  },
];

const languages = [
  { lang: "ENGLISH", level: "Professional & Technical", pct: "100%", badge: "FLUENT" },
  { lang: "HINDI", level: "Conversational & Articulation", pct: "100%", badge: "FLUENT" },
  { lang: "GUJARATI", level: "Heritage & Business Dialect", pct: "95%", badge: "NATIVE" },
  { lang: "KANNADA", level: "Bangalore Regional & Everyday", pct: "75%", badge: "CONVERSATIONAL" },
];

export default function OffDutyDrawer({ isOpen, onClose }: OffDutyDrawerProps) {
  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        soundFX.playSnap();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleContactJump = () => {
    soundFX.playClick();
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9990] bg-[#211C1E]/80 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              soundFX.playSnap();
              onClose();
            }}
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[9995] w-full max-w-[620px] bg-[#EAE3D9] border-l-2 border-[#4A1025] flex flex-col shadow-2xl overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header Ribbon */}
            <div className="bg-[#4A1025] text-[#EAE3D9] px-6 py-4 flex items-center justify-between border-b border-[#211C1E]/20 select-none">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#EAE3D9] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold">
                  {"DOSSIER // OFF-DUTY ARCHIVE [05]"}
                </span>
              </div>
              <button
                onClick={() => {
                  soundFX.playSnap();
                  onClose();
                }}
                className="p-1 hover:bg-[#EAE3D9] hover:text-[#4A1025] border border-transparent hover:border-[#EAE3D9] transition-all rounded-none"
                aria-label="Close Off-Duty Drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Sub-header Title */}
            <div className="px-6 py-5 border-b border-[#211C1E]/15 bg-[#EAE3D9]">
              <div className="flex items-baseline justify-between">
                <h2 className="font-anton text-3xl md:text-4xl text-[#4A1025] tracking-tight">
                  MOHAMMED FAIZ
                </h2>
                <span className="font-mono text-[10px] tracking-widest text-[#211C1E]/60 uppercase border border-[#211C1E]/20 px-2 py-0.5">
                  EXTRA-CURRICULAR
                </span>
              </div>
              <p className="font-mono text-xs text-[#211C1E]/75 mt-1 tracking-wide">
                Sports instincts, ground operations, multilingual fluency & offline interests.
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 select-text">
              {/* SECTION 1: SPORTS & ATHLETICS */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-[#4A1025]/30">
                  <Trophy size={16} className="text-[#4A1025]" />
                  <h3 className="font-anton text-lg tracking-wide text-[#4A1025] uppercase">
                    {"01 // ATHLETICS & CUE SPORTS"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sports.map((s) => (
                    <div
                      key={s.name}
                      className="border border-[#211C1E]/20 bg-white/60 p-3.5 hover:border-[#4A1025] transition-colors relative group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#4A1025] font-bold bg-[#4A1025]/10 px-1.5 py-0.5">
                          {s.tag}
                        </span>
                        <span className="font-mono text-[9px] text-[#211C1E]/50 tracking-widest">
                          {s.stat}
                        </span>
                      </div>
                      <h4 className="font-anton text-base text-[#211C1E] tracking-tight group-hover:text-[#4A1025] transition-colors">
                        {s.name}
                      </h4>
                      <p className="font-mono text-[11px] text-[#4A1025] font-semibold mb-1">
                        {s.role}
                      </p>
                      <p className="font-inter text-xs text-[#211C1E]/80 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 2: FIELD MISSIONS & LIVE EXPERIENCES */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-[#4A1025]/30">
                  <Flame size={16} className="text-[#4A1025]" />
                  <h3 className="font-anton text-lg tracking-wide text-[#4A1025] uppercase">
                    {"02 // FIELD OPERATIONS & VOLUNTEERING"}
                  </h3>
                </div>

                <div className="space-y-4">
                  {fieldOps.map((op) => (
                    <div
                      key={op.title}
                      className="border border-[#211C1E]/25 bg-white/70 p-4 relative"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                        <h4 className="font-anton text-base md:text-lg text-[#4A1025] tracking-tight">
                          {op.title}
                        </h4>
                        <span className="font-mono text-[10px] text-[#211C1E]/60 uppercase">
                          {op.period} &bull; {op.location}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-[#211C1E] font-bold mb-2">
                        {op.role}
                      </p>
                      <ul className="space-y-1.5 font-inter text-xs text-[#211C1E]/85">
                        {op.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#4A1025] font-mono font-bold mt-0.5">&rsaquo;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 3: LINGUISTIC REPERTOIRE */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-[#4A1025]/30">
                  <Languages size={16} className="text-[#4A1025]" />
                  <h3 className="font-anton text-lg tracking-wide text-[#4A1025] uppercase">
                    {"03 // LINGUISTIC REPERTOIRE"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {languages.map((l) => (
                    <div
                      key={l.lang}
                      className="border border-[#211C1E]/20 bg-white/60 p-3 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-anton text-base text-[#211C1E] tracking-tight">
                          {l.lang}
                        </span>
                        <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#4A1025] text-[#EAE3D9]">
                          {l.badge}
                        </span>
                      </div>
                      <p className="font-inter text-xs text-[#211C1E]/75 mb-2">
                        {l.level}
                      </p>
                      <div className="w-full bg-[#211C1E]/10 h-1.5 overflow-hidden">
                        <div
                          className="bg-[#4A1025] h-full transition-all duration-500"
                          style={{ width: l.pct }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: OFFLINE RIG & RHYTHMS */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-1 border-b border-[#4A1025]/30">
                  <Compass size={16} className="text-[#4A1025]" />
                  <h3 className="font-anton text-lg tracking-wide text-[#4A1025] uppercase">
                    {"04 // OFFLINE PHILOSOPHY & GEAR"}
                  </h3>
                </div>

                <div className="border border-[#211C1E]/25 bg-[#211C1E] text-[#EAE3D9] p-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D9]/20">
                    <span className="text-[#EAE3D9]/60">NOCTURNAL PEAK:</span>
                    <span className="text-[#EAE3D9] font-bold">22:00 &mdash; 03:00 IST</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D9]/20">
                    <span className="text-[#EAE3D9]/60">SOUNDTRACK ARCHIVE:</span>
                    <span className="text-[#EAE3D9] font-bold">Cinematic OSTs &bull; Synthwave</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D9]/20">
                    <span className="text-[#EAE3D9]/60">READING OBSESSION:</span>
                    <span className="text-[#EAE3D9] font-bold">Swiss Grid Systems &bull; System Design</span>
                  </div>
                  <p className="font-inter text-xs text-[#EAE3D9]/80 italic pt-1">
                    &ldquo;Code is structured logic. Sports and live festivals are unstructured human chaos. Mastery lies in balancing both.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Dispatch Action */}
            <div className="p-4 bg-white/80 border-t border-[#211C1E]/20 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] text-[#211C1E]/60 uppercase">
                FAIZ &bull; BANGALORE, IN
              </span>
              <button
                onClick={handleContactJump}
                className="px-4 py-2.5 bg-[#4A1025] text-[#EAE3D9] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#211C1E] transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>OPEN DISPATCH / CONTACT</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
