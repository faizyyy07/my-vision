"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Volume2, VolumeX, Compass } from "lucide-react";
import { soundFX } from "@/lib/soundFX";

const links = [
  { name: "ABOUT", id: "about" },
  { name: "WORK", id: "work" },
  { name: "SKILLS", id: "skills" },
  { name: "CONTACT", id: "contact" },
];

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenOffDuty: () => void;
}

export default function Navbar({ isMuted, onToggleSound, onOpenOffDuty }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    soundFX.playClick();
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300"
        style={{
          borderBottom: scrolled ? "1px solid rgba(33,28,30,0.15)" : "none",
          backgroundColor: scrolled ? "rgba(234,227,217,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          onClick={scrollToTop}
          className="font-anton text-2xl md:text-3xl tracking-tight text-[#4A1025] hover:opacity-80 transition-opacity"
        >
          FAIZ.
        </a>

        {/* Desktop links + Toggles */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, idx) => (
            <div key={link.id} className="flex items-center gap-8">
              <button
                onClick={() => handleNav(link.id)}
                className="font-mono text-xs tracking-[0.2em] underline-anim pb-0.5 text-[#211C1E] hover:text-[#4A1025] transition-colors font-semibold"
              >
                {link.name}
              </button>
              {idx < links.length - 1 && (
                <span className="text-[#211C1E]/30 font-mono text-xs select-none">/</span>
              )}
            </div>
          ))}

          {/* Divider */}
          <div className="h-4 w-px bg-[#211C1E]/20" />

          {/* Feature 5: Off-Duty Interests & Dossier Trigger */}
          <button
            onClick={() => {
              soundFX.playSnap();
              onOpenOffDuty();
            }}
            className="flex items-center gap-1.5 px-3 py-1 font-mono text-[10px] tracking-wider uppercase border border-[#4A1025] bg-[#4A1025] text-[#EAE3D9] hover:bg-[#211C1E] hover:border-[#211C1E] transition-all font-bold shadow-sm"
            title="Open Mohammed Faiz's Off-Duty Dossier & Interests"
          >
            <Compass size={12} />
            <span>{"DOSSIER // OFF-DUTY"}</span>
          </button>

          {/* Interactive Feature: Tactile Audio / Sound FX Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (isMuted) {
                setTimeout(() => soundFX.playClick(), 50);
              }
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase border transition-all ${
              !isMuted
                ? "border-[#4A1025] text-[#4A1025] bg-[#4A1025]/5 font-bold"
                : "border-[#211C1E]/25 text-[#211C1E]/50 hover:border-[#211C1E]"
            }`}
            title={isMuted ? "Unmute Tactile Sound FX" : "Mute Sound FX"}
          >
            {!isMuted ? <Volume2 size={12} className="text-[#4A1025]" /> : <VolumeX size={12} />}
            <span>{isMuted ? "MUTED" : "AUDIO"}</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Feature 5 on Mobile Header */}
          <button
            onClick={() => {
              soundFX.playSnap();
              onOpenOffDuty();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 border border-[#4A1025] bg-[#4A1025] text-[#EAE3D9] font-mono text-[10px] font-bold"
            title="Open Off-Duty Dossier"
          >
            <Compass size={13} />
            <span>DOSSIER</span>
          </button>

          {/* Sound Toggle on Mobile Header */}
          <button
            onClick={() => {
              onToggleSound();
              if (isMuted) {
                setTimeout(() => soundFX.playClick(), 50);
              }
            }}
            className="p-1.5 border border-[#211C1E]/20 text-[#211C1E]"
            title="Toggle Sound"
          >
            {!isMuted ? <Volume2 size={16} className="text-[#4A1025]" /> : <VolumeX size={16} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            className="p-2 text-[#211C1E] hover:text-[#4A1025] transition-colors z-50 ml-1"
            onClick={() => {
              soundFX.playClick();
              setOpen((o) => !o);
            }}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-6 bg-[#211C1E] px-6 select-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#EAE3D9]/40 mb-2">
              NAVIGATION // SELECT SECTION
            </p>

            {links.map((link, i) => (
              <motion.button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="font-anton text-5xl md:text-6xl text-[#EAE3D9] hover:text-[#4A1025] transition-colors tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.name}
              </motion.button>
            ))}

            {/* Mobile drawer Off-Duty Dossier Button */}
            <motion.button
              onClick={() => {
                soundFX.playSnap();
                setOpen(false);
                onOpenOffDuty();
              }}
              className="mt-4 flex items-center gap-2 px-5 py-3 border border-[#EAE3D9] text-[#EAE3D9] bg-transparent hover:bg-[#EAE3D9] hover:text-[#211C1E] font-mono text-xs font-bold tracking-widest uppercase transition-all"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Compass size={16} />
              <span>EXPLORE OFF-DUTY DOSSIER [05]</span>
            </motion.button>

            {/* Mobile Sound Control Row */}
            <motion.div
              className="flex items-center gap-3 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <span className="font-mono text-xs text-[#EAE3D9]/60 uppercase">SOUND:</span>
              <button
                onClick={() => {
                  onToggleSound();
                  if (isMuted) {
                    setTimeout(() => soundFX.playClick(), 50);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase border ${
                  !isMuted
                    ? "border-[#EAE3D9] text-[#EAE3D9] bg-[#EAE3D9]/10 font-bold"
                    : "border-[#EAE3D9]/30 text-[#EAE3D9]/40"
                }`}
              >
                {!isMuted ? <Volume2 size={14} /> : <VolumeX size={14} />}
                <span>{!isMuted ? "ON" : "MUTED"}</span>
              </button>
            </motion.div>

            <div className="mt-4 pt-6 border-t border-[#EAE3D9]/20 text-center font-mono text-xs text-[#EAE3D9]/50">
              <p>MOHAMMED FAIZ &bull; PORTFOLIO 2026-2027</p>
              <p className="text-[10px] text-[#EAE3D9]/30 mt-1">SWISS BRUTALIST ARCHITECTURE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
