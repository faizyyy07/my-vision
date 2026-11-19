"use client";
import { Github, Linkedin, Mail, ArrowUp, Phone } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative px-6 md:px-10 py-12 grain"
      style={{
        backgroundColor: "#211C1E",
        borderTop: "1px solid rgba(234,227,217,0.12)",
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: wordmark + tagline */}
        <div>
          <span className="font-anton text-3xl tracking-tight text-[#EAE3D9]">
            FAIZ.
          </span>
          <p className="font-mono text-xs tracking-[0.3em] mt-1 uppercase text-[#EAE3D9]/60 font-semibold">
            DREAM / BUILD / INNOVATE
          </p>
        </div>

        {/* Center: copyright & core identity */}
        <div className="text-left md:text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-[#EAE3D9]/60 font-medium">
            MOHAMMED FAIZ © 2026-2027
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] mt-1 text-[#EAE3D9]/40 uppercase">
            FAIZLOTIYA.TECH &bull; BENGALURU, KARNATAKA, INDIA
          </p>
        </div>

        {/* Right: social links + back to top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/faizyyy07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EAE3D9]/60 hover:text-[#EAE3D9] transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-faiz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EAE3D9]/60 hover:text-[#EAE3D9] transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:lotiyafaiz@gmail.com"
            className="text-[#EAE3D9]/60 hover:text-[#EAE3D9] transition-colors p-1"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:+919663404058"
            className="text-[#EAE3D9]/60 hover:text-[#EAE3D9] transition-colors p-1"
            aria-label="Direct Phone"
          >
            <Phone size={18} />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollTop}
            data-cursor
            className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-[#EAE3D9]/60 hover:text-[#EAE3D9] transition-colors border border-[#EAE3D9]/20 px-3 py-1.5 ml-2 hover:border-[#EAE3D9]"
          >
            <ArrowUp size={13} />
            <span>TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
