"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, CheckCircle2, MessageSquare, Cpu, Camera, Video, Sparkles, Volume2, ArrowRight } from "lucide-react";

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  // Interactive state for Project 01 (SignBridge)
  const [signGesture, setSignGesture] = useState<"hello" | "thankyou" | "help" | "please">("hello");
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Interactive state for Project 02 (CSE Faculty Feedback)
  const [activeTab01, setActiveTab01] = useState<"api" | "dashboard">("api");

  // Interactive state for Project 03 (Business / Salon WhatsApp Simulator)
  const [selectedBranch, setSelectedBranch] = useState("Indiranagar Studio");
  const [selectedService, setSelectedService] = useState("Signature Styling");
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Interactive state for Project 04 (Stryde)
  const [activeSensor, setActiveSensor] = useState<"ultrasonic" | "imu" | "haptic">("ultrasonic");

  const gestureData = {
    hello: {
      name: "HELLO // GREETING",
      text: "Hello! Nice to meet you. How can I assist you today?",
      confidence: "99.4%",
      latency: "14.2 ms",
      landmarks: "21 3D Points Tracked • Open Palm Vector",
      dominantHand: "Right",
    },
    thankyou: {
      name: "THANK YOU // GRATITUDE",
      text: "Thank you very much for your time and guidance.",
      confidence: "98.9%",
      latency: "15.8 ms",
      landmarks: "21 3D Points Tracked • Chin-to-Outward Arc",
      dominantHand: "Right",
    },
    help: {
      name: "ASSISTANCE // HELP",
      text: "Excuse me, could you please provide assistance?",
      confidence: "97.8%",
      latency: "16.1 ms",
      landmarks: "21 3D Points Tracked • Stationary Open Base",
      dominantHand: "Dual",
    },
    please: {
      name: "PLEASE // COURTESY",
      text: "Please take your time, no rush at all.",
      confidence: "99.2%",
      latency: "13.9 ms",
      landmarks: "21 3D Points Tracked • Chest Circular Sweep",
      dominantHand: "Right",
    },
  };

  const handleSpeak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

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
          AI &bull; COMPUTER VISION &bull; HARDWARE &bull; FULL-STACK SYSTEMS
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

      {/* Project 01: SIGNBRIDGE — COMMUNICATION WITHOUT BARRIERS */}
      <motion.div
        className="project-card border-t-2 border-[#211C1E] py-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm tracking-widest text-[#4A1025] font-bold">01</span>
              <span className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 bg-[#4A1025] text-[#EAE3D9] uppercase font-bold">
                AI / COMPUTER VISION
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#211C1E]/50">
                ACCESSIBILITY TECH
              </span>
            </div>
            <h3 className="font-bebas text-3xl md:text-5xl leading-none text-[#211C1E] tracking-tight mb-4">
              SIGNBRIDGE — COMMUNICATION WITHOUT BARRIERS
            </h3>
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

          <div className="md:col-span-7 space-y-4">
            <p className="font-inter text-base leading-relaxed text-[#211C1E]/85">
              SignBridge is a real-time communication platform designed to bridge the communication gap for deaf and hard-of-hearing individuals.
              It uses a camera to recognise sign language gestures and translates recognised gestures into readable text, making communication more accessible.
            </p>
            <div className="p-4 border-l-2 border-[#4A1025] bg-white/40">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A1025] font-bold mb-1">
                ENGINEERING HIGHLIGHTS &bull; COMPUTER VISION PIPELINE &amp; TRANSLATION ENGINE
              </p>
              <p className="font-inter text-sm leading-relaxed text-[#211C1E]">
                Ingests live camera frames to track 21 continuous 3D hand landmarks via MediaPipe and OpenCV. Runs neural classification to decode sequential gestures into structured natural sentences with sub-20ms inference latency, paired with real-time text and speech synthesis feedback.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Computer Vision",
                "Python",
                "OpenCV",
                "MediaPipe",
                "TensorFlow",
                "Gesture Recognition",
                "Real-Time Inference",
                "Accessibility Tech",
                "Next.js UI",
              ].map((t) => (
                <span key={t} className="skill-tag text-[#4A1025] border-[#4A1025]/30 bg-white/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive SignBridge Live Vision Simulator Viewport */}
        <div className="border border-[#211C1E] bg-[#211C1E] text-[#EAE3D9] p-4 md:p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE3D9]/15 gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#EAE3D9]/70">
              <Camera size={14} className="text-[#4A1025]" />
              <span className="font-bold">SIGNBRIDGE TELEMETRY &bull; REAL-TIME GESTURE TRANSLATOR</span>
            </div>
            {/* Gesture selection buttons */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {(["hello", "thankyou", "help", "please"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setSignGesture(g)}
                  className={`px-3 py-1 text-[11px] uppercase transition-colors ${signGesture === g ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                    }`}
                >
                  {g === "hello" && "HELLO"}
                  {g === "thankyou" && "THANK YOU"}
                  {g === "help" && "HELP"}
                  {g === "please" && "PLEASE"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-4 items-center">
            {/* Simulated Camera & Hand Skeleton HUD */}
            <div className="md:col-span-5 bg-black/50 p-4 border border-[#EAE3D9]/15 relative overflow-hidden flex flex-col justify-between min-h-[200px]">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#EAE3D9]/50">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  OPTICAL STREAM // 60 FPS
                </span>
                <span>RES: 1920x1080</span>
              </div>

              {/* Graphical hand landmark wireframe visual */}
              <div className="my-3 flex items-center justify-center">
                <svg viewBox="0 0 160 120" className="w-36 h-28 text-emerald-400 stroke-current opacity-85">
                  {/* Palm & Wrist connection */}
                  <line x1="80" y1="110" x2="80" y2="75" strokeWidth="1.5" />
                  <line x1="80" y1="75" x2="50" y2="60" strokeWidth="1.5" />
                  <line x1="80" y1="75" x2="68" y2="40" strokeWidth="1.5" />
                  <line x1="80" y1="75" x2="88" y2="35" strokeWidth="1.5" />
                  <line x1="80" y1="75" x2="108" y2="45" strokeWidth="1.5" />
                  <line x1="80" y1="75" x2="118" y2="70" strokeWidth="1.5" />
                  {/* Fingers */}
                  <line x1="50" y1="60" x2="35" y2="45" strokeWidth="1.5" />
                  <line x1="68" y1="40" x2="65" y2="18" strokeWidth="1.5" />
                  <line x1="88" y1="35" x2="88" y2="12" strokeWidth="1.5" />
                  <line x1="108" y1="45" x2="110" y2="22" strokeWidth="1.5" />
                  <line x1="118" y1="70" x2="128" y2="55" strokeWidth="1.5" />
                  {/* Keypoints */}
                  {[
                    [80, 110], [80, 75], [50, 60], [35, 45],
                    [68, 40], [65, 18], [88, 35], [88, 12],
                    [108, 45], [110, 22], [118, 70], [128, 55],
                  ].map(([cx, cy], idx) => (
                    <circle key={idx} cx={cx} cy={cy} r="2.5" fill="#4A1025" stroke="#EAE3D9" strokeWidth="1" />
                  ))}
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#EAE3D9]/60 border-t border-[#EAE3D9]/10 pt-2">
                <span>{gestureData[signGesture].landmarks}</span>
                <span className="text-amber-300">HAND: {gestureData[signGesture].dominantHand}</span>
              </div>
            </div>

            {/* Live Translation Engine Output */}
            <div className="md:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[10px] text-[#EAE3D9]/50 uppercase">CLASSIFIED GESTURE</p>
                  <p className="text-base font-anton text-[#EAE3D9] tracking-wide mt-1">
                    {gestureData[signGesture].name}
                  </p>
                </div>
                <div className="p-3 bg-black/30 border border-[#EAE3D9]/10">
                  <p className="text-[10px] text-[#EAE3D9]/50 uppercase">MODEL CONFIDENCE</p>
                  <p className="text-base font-anton text-emerald-400 tracking-wide mt-1">
                    {gestureData[signGesture].confidence}
                  </p>
                </div>
              </div>

              {/* Natural Readable Output Text Box */}
              <div className="p-4 bg-emerald-950/30 border-2 border-emerald-500/40 rounded-none relative">
                <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1.5 font-bold">
                  <span>TRANSLATED HUMAN SPEECH / SUBTITLE</span>
                  <span>LATENCY: {gestureData[signGesture].latency}</span>
                </div>
                <p className="font-bebas text-2xl md:text-3xl text-emerald-200 tracking-wide leading-tight">
                  &ldquo;{gestureData[signGesture].text}&rdquo;
                </p>
              </div>

              {/* Audio Playback Button */}
              <button
                onClick={() => handleSpeak(gestureData[signGesture].text)}
                className="w-full py-2.5 bg-[#4A1025] hover:bg-[#6b1735] text-[#EAE3D9] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Volume2 size={14} className={isSpeaking ? "animate-bounce text-emerald-300" : ""} />
                <span>{isSpeaking ? "SYNTHESIZING AUDIO..." : "AUDIO SPEECH READOUT (TEXT-TO-SPEECH)"}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project 02: CSE Faculty Feedback & Information Management System */}
      <motion.div
        className="project-card border-t-2 border-[#211C1E] py-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm tracking-widest text-[#4A1025] font-bold">02</span>
              <span className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 bg-[#4A1025] text-[#EAE3D9] uppercase font-bold">
                INSTITUTIONAL SYSTEM
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#211C1E]/50">FULL STACK &bull; BACKEND ARCHITECTURE</span>
            </div>
            <h3 className="font-bebas text-3xl md:text-5xl leading-none text-[#211C1E] tracking-tight mb-4">
              CSE FACULTY FEEDBACK &amp; INFORMATION MANAGEMENT SYSTEM
            </h3>
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
                className={`px-3 py-1 text-[11px] transition-colors ${activeTab01 === "api" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                  }`}
              >
                API &amp; VALIDATION ENGINE
              </button>
              <button
                onClick={() => setActiveTab01("dashboard")}
                className={`px-3 py-1 text-[11px] transition-colors ${activeTab01 === "dashboard" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                  }`}
              >
                MONGODB ATLAS DATA PREVIEW
              </button>
            </div>
          </div>

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

      {/* Project 03: Commercial Business Website Development (Vizilti & Freelance Clients) */}
      <motion.div
        className="project-card border-t-2 border-[#211C1E] py-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm tracking-widest text-[#4A1025] font-bold">03</span>
              <span className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 bg-[#4A1025] text-[#EAE3D9] uppercase font-bold">
                COMMERCIAL FREELANCE
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#211C1E]/50">CLIENT PRODUCTION</span>
            </div>
            <h3 className="font-bebas text-3xl md:text-5xl leading-none text-[#211C1E] tracking-tight mb-4">
              COMMERCIAL BUSINESS &amp; SERVICE PLATFORMS
            </h3>
            <p className="font-mono text-xs tracking-wider text-[#4A1025] uppercase mb-4 font-bold">
              VIZILTI SALON &amp; FREELANCE ENTERPRISES
            </p>
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

          <div className="md:col-span-7 space-y-4">
            <p className="font-inter text-base leading-relaxed text-[#211C1E]/85">
              Developed production-ready, fully responsive business websites for freelance clients, including
              Vizilti Salon &amp; Spa. Built intuitive appointment-scheduling workflows with integrated direct WhatsApp booking.
            </p>
            <div className="p-4 border-l-2 border-[#4A1025] bg-white/40">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A1025] font-bold mb-1">
                MY CONTRIBUTION &bull; END-TO-END CLIENT DELIVERY &amp; BOOKING CHANNELS
              </p>
              <p className="font-inter text-sm leading-relaxed text-[#211C1E]">
                Led requirements gathering, brand design translation, fast load time optimization, cross-device QA,
                and direct WhatsApp booking integration to convert site visitors into booked clients.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Responsive Web Design", "HTML5", "CSS3 / Tailwind", "JavaScript", "WhatsApp API Integration", "UI/UX Prototyping", "Client Freelancing"].map((t) => (
                <span key={t} className="skill-tag text-[#4A1025] border-[#4A1025]/30 bg-white/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Booking Simulator */}
        <div className="border border-[#211C1E] bg-[#211C1E] text-[#EAE3D9] p-4 md:p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D9]/15">
            <div className="flex items-center gap-2 font-mono text-xs text-[#EAE3D9]/70">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-bold">VIZILTI SALON &bull; WHATSAPP BOOKING INTEGRATION SIMULATOR</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 uppercase hidden sm:block">
              LIVE CONVERSION CHANNEL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-4">
            <div className="md:col-span-6 space-y-3 font-mono text-xs">
              <div>
                <label className="text-[10px] text-[#EAE3D9]/60 uppercase tracking-widest block mb-1">
                  SELECT BRANCH:
                </label>
                <div className="flex gap-2">
                  {["Indiranagar Studio", "Koramangala Flagship"].map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBranch(b)}
                      className={`px-3 py-1.5 text-xs transition-colors border ${selectedBranch === b
                          ? "bg-[#4A1025] border-[#4A1025] text-[#EAE3D9] font-bold"
                          : "border-[#EAE3D9]/20 text-[#EAE3D9]/60 hover:border-[#EAE3D9]/40"
                        }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#EAE3D9]/60 uppercase tracking-widest block mb-1">
                  SELECT SERVICE:
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Signature Styling", "Therapeutic Facial", "Bridal Package"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedService(s)}
                      className={`px-3 py-1.5 text-xs transition-colors border ${selectedService === s
                          ? "bg-[#4A1025] border-[#4A1025] text-[#EAE3D9] font-bold"
                          : "border-[#EAE3D9]/20 text-[#EAE3D9]/60 hover:border-[#EAE3D9]/40"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

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

      {/* Project 04: STRYDE – Smart Movement Assistance Device | Engineering Ideathon */}
      <motion.div
        className="project-card border-t-2 border-[#211C1E] py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm tracking-widest text-[#4A1025] font-bold">04</span>
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
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveSensor("ultrasonic")}
                className={`px-3 py-1 text-[11px] transition-colors ${activeSensor === "ultrasonic" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                  }`}
              >
                PROXIMITY RADAR
              </button>
              <button
                onClick={() => setActiveSensor("imu")}
                className={`px-3 py-1 text-[11px] transition-colors ${activeSensor === "imu" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                  }`}
              >
                IMU GAIT SENSOR
              </button>
              <button
                onClick={() => setActiveSensor("haptic")}
                className={`px-3 py-1 text-[11px] transition-colors ${activeSensor === "haptic" ? "bg-[#4A1025] text-[#EAE3D9] font-bold" : "text-[#EAE3D9]/60 hover:text-[#EAE3D9]"
                  }`}
              >
                HAPTIC FEEDBACK
              </button>
            </div>
          </div>

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
