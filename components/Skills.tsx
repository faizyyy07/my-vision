"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    id: "01",
    title: "PROGRAMMING LANGUAGES",
    note: "Practical",
    skills: ["Java", "Python", "C", "C++", "JavaScript (ES6+)", "SQL"],
  },
  {
    id: "02",
    title: "FRONTEND & MOBILE",
    note: "Practical",
    skills: ["React.js", "React Native", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    id: "03",
    title: "BACKEND & DATABASES",
    note: "Practical",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "MongoDB Atlas", "MySQL", "Authentication", "API Validation"],
  },
  {
    id: "04",
    title: "ARTIFICIAL INTELLIGENCE",
    note: "Specialized",
    skills: ["Agentic AI", "RAG", "LangChain", "Model Context Protocol (MCP)", "Prompt Engineering", "AI Workflow Automation"],
  },
  {
    id: "05",
    title: "CLOUD, DEVOPS & TOOLS",
    note: "Practical",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins (CI/CD)", "Apache Kafka", "Git / GitHub", "Postman", "Vercel"],
  },
];

const noteBadge: Record<string, { text: string; bg: string; border: string }> = {
  Practical: { text: "#EAE3D9", bg: "#4A1025", border: "#4A1025" },
  Specialized: { text: "#211C1E", bg: "#EAE3D9", border: "#EAE3D9" },
  Learning: { text: "#EAE3D9", bg: "transparent", border: "rgba(234,227,217,0.4)" },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden grain"
      style={{ backgroundColor: "#211C1E" }}
    >
      {/* Section label */}
      <div className="flex items-center justify-between mb-10">
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-[#EAE3D9]/60 font-bold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          — SECTION 03 / MY TOOLKIT
        </motion.p>
        <p className="font-mono text-[10px] tracking-widest text-[#EAE3D9]/30 uppercase hidden sm:block">
          VERIFIED CAPABILITIES &bull; ENGINEERING STACK
        </p>
      </div>

      {/* Heading */}
      <div className="overflow-hidden mb-12">
        <motion.h2
          className="section-heading text-[#EAE3D9]"
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          MY TOOLKIT.
        </motion.h2>
      </div>

      {/* Legend */}
      <motion.div
        className="flex flex-wrap gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25 }}
      >
        <div className="flex items-center gap-2 font-mono text-xs text-[#EAE3D9]">
          <span className="w-2.5 h-2.5 bg-[#4A1025] inline-block border border-[#EAE3D9]/30" />
          <span className="tracking-widest uppercase font-bold text-[11px]">CORE ENGINEERING EXPERIENCE</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#EAE3D9]">
          <span className="w-2.5 h-2.5 bg-[#EAE3D9] inline-block" />
          <span className="tracking-widest uppercase font-bold text-[11px] text-[#EAE3D9]">AI &amp; CLOUD SYSTEMS SPECIALIZATION</span>
        </div>
      </motion.div>

      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-[#EAE3D9]/15">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            className="py-8 md:py-10 border-b lg:border-b-0 border-[#EAE3D9]/15"
            style={{
              borderRight: i < categories.length - 1 ? "1px solid rgba(234,227,217,0.15)" : "none",
              paddingLeft: i === 0 ? 0 : "1.75rem",
              paddingRight: i === categories.length - 1 ? 0 : "1.75rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
          >
            {/* Category header */}
            <div className="flex items-start justify-between mb-6 gap-2">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] mb-1 font-bold text-[#EAE3D9]/40">
                  {cat.id}
                </p>
                <h3 className="font-bebas text-2xl tracking-wide text-[#EAE3D9]">
                  {cat.title}
                </h3>
              </div>
              <span
                className="font-mono text-[9px] tracking-widest px-2 py-0.5 border uppercase font-bold"
                style={{
                  color: noteBadge[cat.note].text,
                  backgroundColor: noteBadge[cat.note].bg,
                  borderColor: noteBadge[cat.note].border,
                }}
              >
                {cat.note}
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 group cursor-default"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                    style={{ backgroundColor: cat.note === "Specialized" ? "#EAE3D9" : "#4A1025" }}
                  />
                  <span className="font-inter text-sm text-[#EAE3D9]/80 group-hover:text-[#EAE3D9] transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Software Engineering Principles Footer Bar in Toolkit */}
      <div className="mt-12 pt-6 border-t border-[#EAE3D9]/15 flex flex-col md:flex-row md:items-center justify-between text-xs font-mono text-[#EAE3D9]/60 gap-4">
        <span className="text-[#EAE3D9] font-bold">SOFTWARE ENGINEERING FOUNDATIONS:</span>
        <span className="tracking-wider">
          DSA &bull; OOP &bull; DESIGN PATTERNS &bull; DBMS &bull; COMPUTER NETWORKS &bull; OPERATING SYSTEMS &bull; SYSTEM DESIGN (LLD &amp; HLD)
        </span>
      </div>

      {/* Background ghost */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        aria-hidden
      >
        <span
          className="text-[20vw] font-anton leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(234,227,217,0.03)" }}
        >
          CODE
        </span>
      </div>
    </section>
  );
}
