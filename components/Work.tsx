"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, CheckCircle2, MessageSquare, Terminal, Eye, Sparkles, Activity, Cpu, ShieldCheck } from "lucide-react";

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  // Interactive state for Project 01 (CSE Faculty Feedback)
  const [activeTab01, setActiveTab01] = useState<"api" | "dashboard">("api");

  // Interactive state for Project 02 (Business / Salon WhatsApp Simulator)
  const [selectedBranch, setSelectedBranch] = useState("Indiranagar Studio");
  const [selectedService, setSelectedService] = useState("Signature Styling");
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Interactive state for Project 03 (Stryde)
  const [activeSensor, setActiveSensor] = useState<"ultrasonic" | "imu" | "haptic">("ultrasonic");

  const getWhatsAppMsg = () => {
    return `Hello, I would like to book an appointment for ${selectedService} at your ${selectedBranch}.`;
  };

  const handleSimulateWhatsApp = () => {
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2500);
  };

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden grain"
      style={{ backgroundColor: "#EAE3D9", borderTop: "1px solid rgba(33,28,30,0.12)" }}
    >
      {/* Section label */}
      <div className="flex items-center justify-between mb-10">
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-[#4A1025] font-bold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          — SECTION 04 / SELECTED WORK &amp; ENGINEERING ARTIFACTS
        </motion.p>
        <p className="font-mono text-[10px] tracking-widest text-[#211C1E]/40 uppercase hidden sm:block">
          FEATURED PRODUCTIONS &bull; HARDWARE &amp; SOFTWARE SYSTEMS
        </p>
      </div>

      {/* Heading */}
      <div className="overflow-hidden mb-16">
        <motion.h2
          className="section-heading text-[#211C1E]"
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          THINGS I&apos;VE BUILT.
        </motion.h2>
      </div>

      {/* Project 01: CSE Faculty Feedback & Information Management System */}
      <motion.div
        className="project-card border-t-2 border-[#211C1E] py-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Title & Status */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm tracking-widest text-[#4A1025] font-bold">01</span>
              <span className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 bg-[#4A1025] text-[#EAE3D9] uppercase font-bold">
                INSTITUTIONAL SYSTEM
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#211C1E]/50">FULL STACK &bull; BACKEND ARCHITECTURE</span>
            </div>
            <h3 className="font-bebas text-3xl md:text-5xl leading-none text-[#211C1E] tracking-tight mb-4">
              CSE FACULTY FEEDBACK &amp; INFORMATION MANAGEMENT SYSTEM
            </h3>
            {/* Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/faizyyy07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#211C1E] hover:text-[#4A1025] transition-colors underline-anim pb-0.5 font-bold"
              >
                <Github size={14} />
                <span>GITHUB REPOSITORY</span>
              </a>
            </div>
          </div>

          {/* Right Description & Contribution */}
          <div className="md:col-span-7 space-y-4">
            <p className="font-inter text-base leading-relaxed text-[#211C1E]/85">
              Developed backend APIs for faculty management and student feedback collection. Built an institutional
              evaluation portal utilizing Node.js, Express, React Native, and MongoDB Atlas.
            </p>
            <div className="p-4 border-l-2 border-[#4A1025] bg-white/40">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A1025] font-bold mb-1">
                MY CONTRIBUTION &bull; BACKEND APIS &amp; SERVER-SIDE VALIDATION
              </p>
              <p className="font-inter text-sm leading-relaxed text-[#211C1E]">
                Implemented JWT authentication, role verification, and robust server-side input validation.
                Tested and verified all API endpoints thoroughly in Postman before frontend integration; collaborated
                closely with teammates using Git and GitHub.
              </p>
            </div>
            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React Native", "Node.js", "Express.js", "MongoDB Atlas", "Postman", "JWT Authentication", "Server-Side Validation", "REST APIs"].map((t) => (
                <span key={t} className="skill-tag text-[#4A1025] border-[#4A1025]/30 bg-white/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Architectural Mockup Viewport */}
        <div className="border border-[#211C1E] bg-[#211C1E] text-[#EAE3D9] p-4 md:p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE3D9]/15 gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#EAE3D9]/70">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A1025]" />
              <span className="font-bold">API CONTROLLER &bull; LIVE VALIDATION SIMULATOR</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveTab01("api")}
                className={`px-3 py-1 text-[11px] transition-colors ${
                  activeTab01 === "api" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                }`}
              >
                API &amp; VALIDATION ENGINE
              </button>
              <button
                onClick={() => setActiveTab01("dashboard")}
                className={`px-3 py-1 text-[11px] transition-colors ${
                  activeTab01 === "dashboard" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                }`}
              >
                MONGODB ATLAS DATA PREVIEW
              </button>
            </div>
          </div>

          {/* Tab 1: API & Validation */}
          {activeTab01 === "api" && (
            <div className="py-4 space-y-4">
              <div className="font-mono text-xs text-[#EAE3D9]/80 space-y-2">
                <div className="flex items-center justify-between bg-black/40 p-2.5 border border-[#EAE3D9]/10">
                  <span className="text-[#4A1025] bg-[#EAE3D9] px-2 py-0.5 font-bold">POST</span>
                  <span className="text-emerald-400">/api/v1/feedback/submit</span>
                  <span className="text-xs text-emerald-400">201 CREATED (24ms)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-black/30 border border-[#EAE3D9]/10 font-mono text-[11px] space-y-1">
                    <p className="text-[#4A1025] font-bold uppercase mb-2">{"// SERVER-SIDE VALIDATED SCHEMA"}</p>
                    <p className="text-gray-400">&#123;</p>
                    <p className="pl-4"><span className="text-amber-200">&quot;facultyId&quot;</span>: <span className="text-emerald-300">&quot;FAC_CSE_104&quot;</span>,</p>
                    <p className="pl-4"><span className="text-amber-200">&quot;courseCode&quot;</span>: <span className="text-emerald-300">&quot;BCS613C_COMPILER&quot;</span>,</p>
                    <p className="pl-4"><span className="text-amber-200">&quot;clarityRating&quot;</span>: <span className="text-purple-300">5</span>,</p>
                    <p className="pl-4"><span className="text-amber-200">&quot;comments&quot;</span>: <span className="text-emerald-300">&quot;Clear syntax tree walkthroughs&quot;</span>,</p>
                    <p className="pl-4"><span className="text-amber-200">&quot;authStatus&quot;</span>: <span className="text-emerald-300">&quot;JWT_VERIFIED&quot;</span></p>
                    <p className="text-gray-400">&#125;</p>
                  </div>
                  <div className="p-3 bg-black/30 border border-[#EAE3D9]/10 font-mono text-[11px] space-y-2">
                    <p className="text-[#4A1025] font-bold uppercase mb-2">{"// POSTMAN TEST SUITE & INTEGRITY GATES"}</p>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 size={13} />
                      <span>JWT Bearer Token signature verified</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 size={13} />
                      <span>Body payload sanitized &amp; regex type-checked</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 size={13} />
                      <span>Postman automated test scripts: 100% Passed</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 size={13} />
                      <span>MongoDB Atlas Document committed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Dashboard Table */}
          {activeTab01 === "dashboard" && (
            <div className="py-4 overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#EAE3D9]/20 text-[#EAE3D9]/60 text-[10px]">
                    <th className="py-2">FACULTY ID</th>
                    <th className="py-2">DEPARTMENT</th>
                    <th className="py-2">SUBJECT</th>
                    <th className="py-2">RATING (1-5)</th>
                    <th className="py-2">COLLECTION</th>
                    <th className="py-2">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE3D9]/10 text-[11px]">
                  <tr>
                    <td className="py-3 font-bold text-amber-200">FAC_CSE_104</td>
                    <td className="py-3">Computer Science</td>
                    <td className="py-3">Data Structures &amp; Algorithms</td>
                    <td className="py-3 text-emerald-400 font-bold">4.92 / 5.0</td>
                    <td className="py-3">128 Documents</td>
                    <td className="py-3"><span className="px-1.5 py-0.5 bg-emerald-900/60 text-emerald-300 text-[10px]">ATLAS SYNCED</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-amber-200">FAC_CSE_208</td>
                    <td className="py-3">Computer Science</td>
                    <td className="py-3">Operating Systems</td>
                    <td className="py-3 text-emerald-400 font-bold">4.85 / 5.0</td>
                    <td className="py-3">114 Documents</td>
                    <td className="py-3"><span className="px-1.5 py-0.5 bg-emerald-900/60 text-emerald-300 text-[10px]">ATLAS SYNCED</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-amber-200">FAC_CSE_312</td>
                    <td className="py-3">Computer Science</td>
                    <td className="py-3">Database Management Systems</td>
                    <td className="py-3 text-emerald-400 font-bold">4.78 / 5.0</td>
                    <td className="py-3">139 Documents</td>
                    <td className="py-3"><span className="px-1.5 py-0.5 bg-emerald-900/60 text-emerald-300 text-[10px]">ATLAS SYNCED</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </motion.div>

      {/* Project 02: Commercial Business Website Development (Vizilti & Freelance Clients) */}
      <motion.div
        className="project-card border-t-2 border-[#211C1E] py-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Title & Status */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm tracking-widest text-[#4A1025] font-bold">02</span>
              <span className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 bg-[#4A1025] text-[#EAE3D9] uppercase font-bold">
                COMMERCIAL PRODUCTION
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#211C1E]/50">CLIENT ENGAGEMENT</span>
            </div>
            <h3 className="font-bebas text-3xl md:text-5xl leading-none text-[#211C1E] tracking-tight mb-4">
              COMMERCIAL BUSINESS WEBSITE &amp; BOOKING ENGINE
            </h3>
            {/* Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/faizyyy07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#211C1E] hover:text-[#4A1025] transition-colors underline-anim pb-0.5 font-bold"
              >
                <Github size={14} />
                <span>GITHUB REPOSITORY</span>
              </a>
            </div>
          </div>

          {/* Right Description & Contribution */}
          <div className="md:col-span-7 space-y-4">
            <p className="font-inter text-base leading-relaxed text-[#211C1E]/85">
              Designed and developed responsive business websites with modern UI for businesses (including the Vizilti salon brand).
              Integrated branch-specific WhatsApp appointment booking, Google Maps navigation, performance tuning, and Vercel cloud deployment.
            </p>
            <div className="p-4 border-l-2 border-[#4A1025] bg-white/40">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A1025] font-bold mb-1">
                MY CONTRIBUTION &bull; CLIENT COLLABORATION &amp; DEPLOYMENT
              </p>
              <p className="font-inter text-sm leading-relaxed text-[#211C1E]">
                Worked directly with clients to gather requirements, crafted high-performance frontend interfaces using React.js and Tailwind CSS,
                connected instant WhatsApp booking funnels, and optimized cross-device mobile responsiveness.
              </p>
            </div>
            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "Tailwind CSS", "JavaScript", "Vercel", "WhatsApp API", "Google Maps Integration", "Responsive Web Design"].map((t) => (
                <span key={t} className="skill-tag text-[#4A1025] border-[#4A1025]/30 bg-white/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Vizilti WhatsApp Booking Simulator */}
        <div className="border border-[#211C1E] bg-[#211C1E] text-[#EAE3D9] p-4 md:p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE3D9]/15 gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#EAE3D9]/70">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A1025]" />
              <span className="font-bold">BRANCH BOOKING &amp; MAPS INTEGRATION ENGINE</span>
            </div>
            <span className="font-mono text-[10px] text-[#EAE3D9]/50 tracking-wider">
              LIVE WORKFLOW SIMULATOR
            </span>
          </div>

          <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Options */}
            <div className="md:col-span-6 space-y-4 font-mono text-xs">
              <div>
                <p className="text-[#EAE3D9]/60 text-[10px] tracking-wider uppercase mb-2">SELECT BRANCH LOCATION:</p>
                <div className="flex flex-wrap gap-2">
                  {["Indiranagar Studio", "Koramangala Atelier"].map((branch) => (
                    <button
                      key={branch}
                      onClick={() => setSelectedBranch(branch)}
                      className={`px-3 py-1.5 border transition-all ${
                        selectedBranch === branch
                          ? "border-[#4A1025] bg-[#4A1025] text-[#EAE3D9] font-bold"
                          : "border-[#EAE3D9]/30 text-[#EAE3D9]/70 hover:border-[#EAE3D9]"
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[#EAE3D9]/60 text-[10px] tracking-wider uppercase mb-2">SELECT SERVICE TYPE:</p>
                <div className="flex flex-wrap gap-2">
                  {["Signature Styling", "Balayage & Tint", "Hair Spa Therapy"].map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`px-3 py-1.5 border transition-all ${
                        selectedService === service
                          ? "border-[#4A1025] bg-[#4A1025] text-[#EAE3D9] font-bold"
                          : "border-[#EAE3D9]/30 text-[#EAE3D9]/70 hover:border-[#EAE3D9]"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right WhatsApp Intent Preview */}
            <div className="md:col-span-6 p-4 bg-black/40 border border-[#EAE3D9]/15 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <MessageSquare size={14} />
                  WHATSAPP API INTENT PAYLOAD
                </span>
                <span className="text-[10px] text-gray-400">READY</span>
              </div>
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded text-emerald-200 font-mono text-xs leading-relaxed">
                &ldquo;{getWhatsAppMsg()}&rdquo;
              </div>
              <button
                onClick={handleSimulateWhatsApp}
                className="w-full py-2 bg-[#4A1025] hover:bg-[#6b1735] text-[#EAE3D9] font-mono text-xs tracking-wider uppercase transition-colors font-bold"
              >
                {copiedWhatsApp ? "✓ WHATSAPP INTENT DISPATCHED" : "TEST WHATSAPP APPOINTMENT DISPATCH"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project 03: STRYDE – Smart Movement Assistance Device | Engineering Ideathon */}
      <motion.div
        className="project-card border-t-2 border-[#211C1E] py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm tracking-widest text-[#4A1025] font-bold">03</span>
              <span className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 bg-[#4A1025] text-[#EAE3D9] uppercase font-bold">
                ENGINEERING IDEATHON
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#211C1E]/50">ASSISTIVE HARDWARE &amp; IOT</span>
            </div>
            <h3 className="font-bebas text-3xl md:text-5xl leading-none text-[#211C1E] tracking-tight mb-2">
              STRYDE — SMART MOVEMENT ASSISTANCE DEVICE
            </h3>
            <p className="font-mono text-xs tracking-wider text-[#4A1025] uppercase mt-2 font-bold">
              MULTIDISCIPLINARY INNOVATION &bull; RAPID PROTOTYPING
            </p>
          </div>

          <div className="md:col-span-7 space-y-4">
            <p className="font-inter text-base leading-relaxed text-[#211C1E]/85">
              Participated in a high-tempo engineering ideathon as part of a multidisciplinary team to design and pitch
              an intelligent assistive mobility system for individuals with motor challenges.
            </p>
            <div className="p-4 border-l-2 border-[#4A1025] bg-white/40">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A1025] font-bold mb-1">
                MY CONTRIBUTION &bull; PRODUCT IDEATION &amp; TECHNICAL ARCHITECTURE
              </p>
              <p className="font-inter text-sm leading-relaxed text-[#211C1E]">
                Contributed to end-to-end product conceptualization, feature planning, sensor telemetry logic,
                and technical pitch defense. Strengthened rapid prototyping, teamwork, and cross-functional problem-solving under tight ideathon constraints.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Product Ideation", "Rapid Prototyping", "Assistive Technology", "Sensor Telemetry", "Hardware-Software Testing", "Ideathon Defense"].map((t) => (
                <span key={t} className="skill-tag text-[#4A1025] border-[#4A1025]/30 bg-white/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Stryde Assistive Sensor Telemetry Mockup */}
        <div className="border border-[#211C1E] bg-[#211C1E] text-[#EAE3D9] p-4 md:p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE3D9]/15 gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#EAE3D9]/70">
              <Cpu size={14} className="text-[#4A1025]" />
              <span className="font-bold">STRYDE TELEMETRY LAB &bull; SENSOR ARCHITECTURE</span>
            </div>
            {/* Interactive Sensor Selector */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveSensor("ultrasonic")}
                className={`px-3 py-1 text-[11px] transition-colors ${
                  activeSensor === "ultrasonic" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                }`}
              >
                PROXIMITY RADAR
              </button>
              <button
                onClick={() => setActiveSensor("imu")}
                className={`px-3 py-1 text-[11px] transition-colors ${
                  activeSensor === "imu" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                }`}
              >
                IMU GAIT SENSOR
              </button>
              <button
                onClick={() => setActiveSensor("haptic")}
                className={`px-3 py-1 text-[11px] transition-colors ${
                  activeSensor === "haptic" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                }`}
              >
                HAPTIC FEEDBACK
              </button>
            </div>
          </div>

          {/* Sensor Telemetry Viewport */}
          <div className="py-4 font-mono text-xs">
            {activeSensor === "ultrasonic" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">TERRAIN SCANNER</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">120° CONE</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Active Obstacle Clearance: 1.8m</p>
                </div>
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">RESPONSE LATENCY</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">&lt; 15 MS</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Instant Threat Warning Loop</p>
                </div>
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">ASSISTIVE LOGIC</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">EDGE-BASED</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Zero Cloud Dependency for Safety</p>
                </div>
              </div>
            )}

            {activeSensor === "imu" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">6-AXIS GYROSCOPE</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">X:0.02 Y:0.01 Z:0.98</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Center of Gravity Monitored</p>
                </div>
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">FALL DETECTION ALGO</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">SUDDEN TILT TRIGGER</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Threshold: 42° Incline Angle</p>
                </div>
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">STRIDE CADENCE</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">54 STEPS / MIN</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Adaptive Pacing Guidance</p>
                </div>
              </div>
            )}

            {activeSensor === "haptic" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">MOTOR FEEDBACK</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">DUAL ERM MOTORS</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Directional Pulse (Left / Right)</p>
                </div>
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">USER NOTIFICATION</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">SILENT VIBRATION</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Discreet Navigation Cues</p>
                </div>
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[#EAE3D9]/50 text-[10px] uppercase">BATTERY PROFILE</p>
                  <p className="text-xl font-anton text-[#EAE3D9] mt-1">18+ HOURS</p>
                  <p className="text-[11px] text-emerald-400 mt-2">Optimized Low-Power State</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
