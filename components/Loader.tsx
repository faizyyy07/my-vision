"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    const handleKey = () => onComplete();
    window.addEventListener("keydown", handleKey);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKey);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9000] flex flex-col items-center justify-center grain select-none"
      style={{ backgroundColor: "#211C1E" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Issue label */}
      <p className="font-mono text-xs tracking-[0.3em] uppercase mb-6 text-[#EAE3D9]/60">
        FAIZ.PORTFOLIO // VOL. 01 — 2026 EDITION
      </p>

      {/* Big title */}
      <div className="overflow-hidden mb-6 text-center">
        <motion.h1
          className="font-anton text-[clamp(4.5rem,16vw,12rem)] leading-none tracking-tight text-[#EAE3D9]"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          LOADING
        </motion.h1>
      </div>

      {/* Progress track */}
      <div className="w-64 h-1.5 relative overflow-hidden bg-[#EAE3D9]/15 border border-[#EAE3D9]/20">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#4A1025]"
          style={{ width: `${percent}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Counter & status */}
      <div className="w-64 flex items-center justify-between font-mono text-[11px] mt-3 text-[#EAE3D9]/60 tracking-wider">
        <span>INITIALISING_RUNTIME</span>
        <span className="font-bold text-[#EAE3D9]">{percent}%</span>
      </div>

      {/* Skip button */}
      <button
        onClick={onComplete}
        className="mt-8 font-mono text-[10px] tracking-[0.2em] uppercase text-[#EAE3D9]/40 hover:text-[#EAE3D9] underline transition-colors"
      >
        [PRESS ANY KEY OR CLICK TO SKIP]
      </button>
    </motion.div>
  );
}
