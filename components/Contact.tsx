"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Check, Copy, Send, ExternalLink, Phone } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Quick inquiry state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [sentInquiry, setSentInquiry] = useState(false);

  const emailAddress = "lotiyafaiz@gmail.com";
  const phoneNumber = "+91 9663404058";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryMsg.trim()) return;
    const subject = encodeURIComponent(`Project Inquiry from ${inquiryName || "Portfolio Visitor"}`);
    const body = encodeURIComponent(inquiryMsg);
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, "_blank");
    setSentInquiry(true);
    setTimeout(() => {
      setSentInquiry(false);
      setInquiryName("");
      setInquiryMsg("");
    }, 3000);
  };

  const contacts = [
    {
      label: "PRIMARY EMAIL",
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: Mail,
      display: emailAddress,
      isCopyable: true,
      onCopy: handleCopyEmail,
      isCopied: copiedEmail,
    },
    {
      label: "TELEPHONE / WHATSAPP",
      value: phoneNumber,
      href: `tel:${phoneNumber.replace(/\s+/g, "")}`,
      icon: Phone,
      display: phoneNumber,
      isCopyable: true,
      onCopy: handleCopyPhone,
      isCopied: copiedPhone,
    },
    {
      label: "LINKEDIN NETWORK",
      value: "linkedin.com/in/mohammed-faiz",
      href: "https://www.linkedin.com/in/mohammed-faiz",
      icon: Linkedin,
      display: "LINKEDIN.COM/IN/MOHAMMED-FAIZ",
      isCopyable: false,
    },
    {
      label: "GITHUB REPOSITORY",
      value: "github.com/faizyyy07",
      href: "https://github.com/faizyyy07",
      icon: Github,
      display: "GITHUB.COM/FAIZYYY07",
      isCopyable: false,
    },
    {
      label: "CURRICULUM VITAE",
      value: "Download Verified Resume",
      href: "#",
      icon: FileText,
      display: "VIEW / DOWNLOAD RESUME (PDF)",
      isCopyable: false,
      isResume: true,
    },
  ];

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden grain"
        style={{ backgroundColor: "#4A1025" }}
      >
        {/* Section label */}
        <div className="flex items-center justify-between mb-8">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-[#EAE3D9]/60 font-bold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            — SECTION 07 / CONTACT
          </motion.p>
          <p className="font-mono text-[10px] tracking-widest text-[#EAE3D9]/40 uppercase hidden sm:block">
            INITIATE COLLABORATION &bull; BENGALURU &amp; REMOTE
          </p>
        </div>

        {/* Giant typography */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            className="font-anton leading-[0.82] tracking-tight text-[#EAE3D9]"
            style={{ fontSize: "clamp(4.5rem, 16vw, 17rem)" }}
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            LET&apos;S
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2
            className="font-anton leading-[0.82] tracking-tight"
            style={{
              color: "transparent",
              WebkitTextStroke: "2.5px rgba(234,227,217,0.6)",
              fontSize: "clamp(4.5rem, 16vw, 17rem)",
            }}
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
          >
            CONNECT.
          </motion.h2>
        </div>

        {/* Supporting text + interactive grid */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column: Statement & Quick Inquiry Form */}
          <motion.div
            className="md:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-1.5 bg-[#EAE3D9]" />
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-[#EAE3D9]/90 font-medium">
              &ldquo;Have an interesting idea, opportunity or problem to solve? Let&apos;s build something.&rdquo;
            </p>

            <p className="font-mono text-xs tracking-wider uppercase text-[#EAE3D9]/70">
              Open to Software Engineering Opportunities Worldwide &bull; Available for Bengaluru &amp; Remote Roles
            </p>

            {/* Quick Dispatch Form */}
            <form onSubmit={handleSendInquiry} className="p-6 border border-[#EAE3D9]/20 bg-black/25 space-y-4">
              <p className="font-mono text-xs tracking-wider uppercase text-[#EAE3D9]/70 font-bold flex items-center gap-2">
                <Send size={13} />
                <span>QUICK MESSAGE DISPATCH</span>
              </p>
              <input
                type="text"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                placeholder="YOUR NAME / ORGANIZATION"
                className="w-full px-3 py-2 bg-black/40 border border-[#EAE3D9]/20 font-mono text-xs text-[#EAE3D9] placeholder:text-[#EAE3D9]/30 focus:outline-none focus:border-[#EAE3D9]"
              />
              <textarea
                value={inquiryMsg}
                onChange={(e) => setInquiryMsg(e.target.value)}
                required
                rows={3}
                placeholder="BRIEF MESSAGE OR PROJECT SCOPE..."
                className="w-full px-3 py-2 bg-black/40 border border-[#EAE3D9]/20 font-mono text-xs text-[#EAE3D9] placeholder:text-[#EAE3D9]/30 focus:outline-none focus:border-[#EAE3D9] resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#EAE3D9] hover:bg-white text-[#4A1025] font-mono text-xs tracking-wider uppercase font-bold transition-colors"
              >
                {sentInquiry ? "✓ DISPATCHING VIA EMAIL..." : "SEND DIRECT MESSAGE"}
              </button>
            </form>

            <div className="font-mono text-xs text-[#EAE3D9]/40 space-y-1">
              <p>PRIMARY DOMAIN: FAIZLOTIYA.TECH</p>
              <p>DIRECT PHONE: +91 9663404058</p>
            </div>
          </motion.div>

          {/* Right Column: Contact Channels */}
          <motion.div
            className="md:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="border-t border-[#EAE3D9]/20">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[#EAE3D9]/20 gap-4 group hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#EAE3D9]/40 font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon size={16} className="text-[#EAE3D9]/70 group-hover:text-[#EAE3D9]" />
                      <span className="font-mono text-xs tracking-widest uppercase text-[#EAE3D9]/70 font-semibold">
                        {c.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {c.isResume ? (
                        <button
                          onClick={() => setResumeOpen(true)}
                          className="font-inter text-sm md:text-base font-semibold text-[#EAE3D9] hover:underline flex items-center gap-1.5"
                        >
                          <span>{c.display}</span>
                          <ExternalLink size={14} className="opacity-70" />
                        </button>
                      ) : (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-inter text-sm md:text-base font-semibold text-[#EAE3D9] hover:underline flex items-center gap-1.5"
                        >
                          <span>{c.display}</span>
                          <ExternalLink size={14} className="opacity-70" />
                        </a>
                      )}

                      {c.isCopyable && (
                        <button
                          onClick={c.onCopy}
                          className="px-2 py-1 border border-[#EAE3D9]/30 hover:border-[#EAE3D9] text-[#EAE3D9] font-mono text-[10px] tracking-wider uppercase transition-colors"
                          title={`Copy ${c.label}`}
                        >
                          {c.isCopied ? <Check size={12} className="text-emerald-300" /> : <Copy size={12} />}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Background ghost */}
        <div
          className="absolute left-0 bottom-0 select-none pointer-events-none hidden lg:block"
          aria-hidden
        >
          <span
            className="text-[22vw] font-anton leading-none"
            style={{ color: "transparent", WebkitTextStroke: "1px rgba(234,227,217,0.04)" }}
          >
            HELLO
          </span>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
