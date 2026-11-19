"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Compass, Check, Users, Music, Mic2, Sparkles, Award } from "lucide-react";

const timeline = [
  {
    period: "ACTIVE PRACTICE",
    badge: "PRODUCTION",
    title: "FREELANCE SOFTWARE DEVELOPER",
    org: "INDEPENDENT CLIENT PRACTICE &bull; BENGALURU",
    description:
      "Working directly with business clients to gather requirements, design responsive interfaces, and deliver production-ready web solutions tailored to client needs.",
    highlights: [
      "Designed and developed responsive business websites tailored to client requirements",
      "Built modern user interfaces using React.js and Tailwind CSS",
      "Integrated WhatsApp appointment booking and Google Maps navigation",
      "Improved website responsiveness and performance across multiple devices",
      "Deployed and maintained production-ready web applications using Vercel",
    ],
  },
  {
    period: "2023 — 2027 (EXPECTED)",
    badge: "B.E. CSE",
    title: "COMPUTER SCIENCE & ENGINEERING",
    org: "AMC ENGINEERING COLLEGE &bull; VISVESVARAYA TECHNOLOGICAL UNIVERSITY (VTU)",
    description:
      "Pursuing Bachelor of Engineering in Computer Science & Engineering. Rigorous foundation across algorithms, system design, databases, networks, and compilers.",
    highlights: [
      "Developed backend APIs with authentication & server-side validation for faculty management",
      "Core Coursework: DSA, Design & Analysis of Algorithms, DBMS, Operating Systems, Computer Networks",
      "Specialized Coursework: Artificial Intelligence, Cloud Computing, Compiler Design (BCS613C)",
      "Tested microservices and endpoints systematically with Postman & MongoDB Atlas",
    ],
  },
  {
    period: "ENGINEERING INNOVATION",
    badge: "IDEATHON",
    title: "STRYDE &bull; SMART MOVEMENT ASSISTANCE DEVICE",
    org: "MULTIDISCIPLINARY ENGINEERING TEAMS",
    description:
      "Cross-functional collaborative engineering ideathon addressing real-world mobility challenges through rapid prototyping and sensor integration.",
    highlights: [
      "Conceptualized an intelligent wearable and sensor-based movement assistance device for mobility-impaired individuals",
      "Contributed to product ideation, assistive feature planning, sensor telemetry design, and hardware-software testing",
      "Delivered live technical presentation and defended architectural choices before ideathon evaluators",
      "Strengthened teamwork, high-velocity prototyping, and user-centric accessibility engineering",
    ],
  },
  {
    period: "COMMUNITY & LEADERSHIP",
    badge: "VOLUNTEERING",
    title: "EVENT MANAGEMENT & PRODUCTION VOLUNTEER",
    org: "HIGH-TEMPO CULTURAL PRODUCTIONS &bull; SWIGGY FESTIVALS &bull; LIVE CONCERTS",
    description:
      "Direct hands-on experience orchestrating large-scale crowd logistics, live operations, artist coordination, and stage management under demanding high-tempo constraints.",
    highlights: [
      "Contributed to the successful execution of Swiggy Music Festival, prominent stand-up comedy shows, and major live concerts",
      "Assisted in high-density event logistics, perimeter crowd management, and VIP stage operations",
      "Collaborated with cross-functional event crews to guarantee flawless, incident-free operations under strict schedules",
      "Demonstrated calm operational leadership, high stress tolerance, and crisis communication in live public environments",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden grain"
      style={{ backgroundColor: "#4A1025" }}
    >
      {/* Section label */}
      <div className="flex items-center justify-between mb-10">
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-[#EAE3D9]/60 font-bold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          — SECTION 05 / EXPERIENCE &bull; LEADERSHIP &bull; COMMUNITY
        </motion.p>
        <p className="font-mono text-[10px] tracking-widest text-[#EAE3D9]/40 uppercase hidden sm:block">
          CHRONOLOGY &bull; PROFESSIONAL, IDEATHON &amp; EVENT RECORD
        </p>
      </div>

      {/* Heading */}
      <div className="overflow-hidden mb-20">
        <motion.h2
          className="section-heading text-[#EAE3D9]"
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          WHAT I&apos;VE BEEN WORKING ON.
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line on desktop */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
          style={{ backgroundColor: "rgba(234,227,217,0.2)" }}
        />

        <div className="flex flex-col gap-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className="grid md:grid-cols-12 gap-8 py-12 md:py-16 md:pl-12"
              style={{ borderBottom: "1px solid rgba(234,227,217,0.15)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.12 * i + 0.15, duration: 0.6 }}
            >
              {/* Left Column: Period & Badge */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  {/* Timeline dot */}
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 md:-ml-[calc(3rem+1.5px)] border-2 border-[#4A1025] bg-[#EAE3D9]"
                  />
                  <span className="font-mono text-sm tracking-wider font-bold text-[#EAE3D9]">
                    {item.period}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest px-2 py-0.5 border border-[#EAE3D9]/40 text-[#EAE3D9]/80 uppercase font-bold">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Middle Column: Title & Narrative */}
              <div className="md:col-span-4">
                <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-[#EAE3D9] mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-xs tracking-wider text-[#EAE3D9]/60 uppercase mb-4">
                  {item.org}
                </p>
                <p className="font-inter text-sm leading-relaxed text-[#EAE3D9]/80">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Key Highlights */}
              <div className="md:col-span-5 p-5 border border-[#EAE3D9]/15 bg-black/20">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#EAE3D9]/60 font-bold mb-3">
                  {"// DEMONSTRATED PRACTICES & IMPACT"}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 font-inter text-xs text-[#EAE3D9]/85">
                      <Check size={14} className="mt-0.5 text-emerald-300 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background ghost */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden lg:block"
        aria-hidden
      >
        <span
          className="text-[22vw] font-anton leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(234,227,217,0.04)" }}
        >
          WORK
        </span>
      </div>
    </section>
  );
}
