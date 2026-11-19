"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, ExternalLink, MapPin, Phone, Mail, Globe, Github, Linkedin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="resume-modal-container fixed inset-0 z-[99990] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-sm overflow-y-auto">
        <motion.div
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto grain p-6 md:p-12 border-2 border-[#4A1025] shadow-2xl"
          style={{ backgroundColor: "#EAE3D9", color: "#211C1E" }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 border-b border-[#211C1E]/20 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#4A1025] inline-block" />
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#4A1025] font-bold">
                MOHAMMED FAIZ &bull; OFFICIAL RESUME
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3 py-1.5 border border-[#4A1025] font-mono text-xs tracking-wider uppercase hover:bg-[#4A1025] hover:text-[#EAE3D9] transition-colors font-bold"
                title="Print or Save as PDF"
              >
                <Printer size={13} />
                <span className="hidden sm:inline">PRINT / SAVE PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 border border-[#211C1E]/30 hover:bg-[#4A1025] hover:text-[#EAE3D9] transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-10">
            {/* Top Identity */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#211C1E]/15">
              <div>
                <h1 className="font-anton text-5xl md:text-6xl text-[#4A1025] tracking-tight leading-none">
                  MOHAMMED FAIZ
                </h1>
                <p className="font-mono text-xs md:text-sm tracking-[0.2em] mt-2 text-[#211C1E] uppercase font-bold">
                  Software Engineer &bull; Full Stack Developer &bull; AI Engineer
                </p>
              </div>
              <div className="font-mono text-xs space-y-1 md:text-right text-[#211C1E]/80">
                <p>Bengaluru, Karnataka, India</p>
                <p className="font-bold text-[#4A1025]">+91 9663404058</p>
                <p>lotiyafaiz@gmail.com</p>
                <p>faizlotiya.tech</p>
                <p>github.com/faizyyy07</p>
                <p>linkedin.com/in/mohammed-faiz</p>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="font-bebas text-2xl text-[#4A1025] tracking-wide mb-2">
                01. PROFESSIONAL SUMMARY
              </h2>
              <p className="font-inter text-sm leading-relaxed text-[#211C1E]/85">
                Computer Science Engineering student with hands-on experience in full-stack development, backend engineering,
                and AI-powered applications. Skilled in developing scalable web applications, RESTful APIs, and cloud-native solutions
                using modern technologies. Experienced with Agentic AI, Retrieval-Augmented Generation (RAG), LangChain,
                Model Context Protocol (MCP), and software engineering best practices. Strong foundation in Data Structures &amp; Algorithms,
                Design Patterns, System Design, and cloud technologies. Passionate about solving real-world problems through technology
                and continuously learning emerging tools and frameworks.
              </p>
            </div>

            {/* Technical Skills Grid */}
            <div>
              <h2 className="font-bebas text-2xl text-[#4A1025] tracking-wide mb-4">
                02. TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 border border-[#211C1E]/15 bg-white/40">
                  <p className="font-bold text-[#4A1025] mb-1.5 uppercase">PROGRAMMING LANGUAGES</p>
                  <p className="text-[#211C1E]/80 leading-relaxed">Java, Python, C, C++, JavaScript, SQL</p>
                </div>
                <div className="p-3 border border-[#211C1E]/15 bg-white/40">
                  <p className="font-bold text-[#4A1025] mb-1.5 uppercase">FRONTEND</p>
                  <p className="text-[#211C1E]/80 leading-relaxed">React.js, React Native, HTML5, CSS3, Tailwind CSS, Responsive Web Design</p>
                </div>
                <div className="p-3 border border-[#211C1E]/15 bg-white/40">
                  <p className="font-bold text-[#4A1025] mb-1.5 uppercase">BACKEND &amp; APIS</p>
                  <p className="text-[#211C1E]/80 leading-relaxed">Node.js, Express.js, REST APIs, GraphQL, Authentication, API Validation</p>
                </div>
                <div className="p-3 border border-[#211C1E]/15 bg-white/40">
                  <p className="font-bold text-[#4A1025] mb-1.5 uppercase">ARTIFICIAL INTELLIGENCE</p>
                  <p className="text-[#211C1E]/80 leading-relaxed">Agentic AI, RAG, LangChain, Model Context Protocol (MCP), Prompt Engineering, AI Workflow Automation</p>
                </div>
                <div className="p-3 border border-[#211C1E]/15 bg-white/40">
                  <p className="font-bold text-[#4A1025] mb-1.5 uppercase">CLOUD, DEVOPS &amp; DATABASES</p>
                  <p className="text-[#211C1E]/80 leading-relaxed">AWS, Docker, Kubernetes, Jenkins, CI/CD, Apache Kafka, MySQL, MongoDB Atlas, NoSQL</p>
                </div>
                <div className="p-3 border border-[#211C1E]/15 bg-white/40">
                  <p className="font-bold text-[#4A1025] mb-1.5 uppercase">TOOLS &amp; FOUNDATIONS</p>
                  <p className="text-[#211C1E]/80 leading-relaxed">Git, GitHub, VS Code, Postman, Figma, Vercel &bull; DSA, OOP, DBMS, OS, Networks, HLD/LLD</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-bebas text-2xl text-[#4A1025] tracking-wide mb-4">
                03. WORK EXPERIENCE
              </h2>
              <div className="border-l-2 border-[#4A1025] pl-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-inter font-bold text-base text-[#211C1E]">
                    Freelance Software Developer
                  </h3>
                  <span className="font-mono text-xs text-[#4A1025] font-bold">CLIENT PRACTICE</span>
                </div>
                <ul className="font-inter text-xs text-[#211C1E]/80 space-y-1 list-disc list-inside leading-relaxed">
                  <li>Designed and developed responsive business websites tailored to client requirements.</li>
                  <li>Built modern user interfaces using React.js and Tailwind CSS.</li>
                  <li>Integrated WhatsApp appointment booking and Google Maps.</li>
                  <li>Improved website responsiveness and performance across multiple devices.</li>
                  <li>Deployed and maintained production-ready web applications using Vercel.</li>
                  <li>Worked directly with clients to gather requirements and deliver customized solutions.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="font-bebas text-2xl text-[#4A1025] tracking-wide mb-4">
                04. NOTABLE PROJECTS
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-[#4A1025] pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-inter font-bold text-sm text-[#211C1E]">
                      Business Website Development
                    </h3>
                    <span className="font-mono text-[11px] text-[#4A1025]">React.js &bull; Tailwind CSS &bull; JavaScript &bull; Vercel</span>
                  </div>
                  <p className="font-inter text-xs text-[#211C1E]/80 leading-relaxed">
                    Designed and developed responsive business websites with modern UI. Integrated WhatsApp appointment booking
                    and Google Maps navigation. Optimized performance and mobile responsiveness; deployed on Vercel.
                  </p>
                </div>

                <div className="border-l-2 border-[#4A1025] pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-inter font-bold text-sm text-[#211C1E]">
                      CSE Faculty Feedback &amp; Information Management System
                    </h3>
                    <span className="font-mono text-[11px] text-[#4A1025]">React Native &bull; Node.js &bull; Express.js &bull; MongoDB Atlas</span>
                  </div>
                  <p className="font-inter text-xs text-[#211C1E]/80 leading-relaxed">
                    Developed backend APIs for faculty management and student feedback. Implemented authentication and server-side validation.
                    Tested APIs using Postman before frontend integration. Collaborated using Git/GitHub for backend integration and documentation.
                  </p>
                </div>

                <div className="border-l-2 border-[#4A1025] pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-inter font-bold text-sm text-[#211C1E]">
                      Stryde – Smart Movement Assistance Device
                    </h3>
                    <span className="font-mono text-[11px] text-[#4A1025]">Engineering Ideathon</span>
                  </div>
                  <p className="font-inter text-xs text-[#211C1E]/80 leading-relaxed">
                    Participated in an engineering ideathon as part of a multidisciplinary team. Contributed to product ideation,
                    feature planning, testing, and technical presentation. Strengthened rapid prototyping and assistive design skills.
                  </p>
                </div>

                <div className="border-l-2 border-[#4A1025] pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-inter font-bold text-sm text-[#211C1E]">
                      Personal Portfolio Website
                    </h3>
                    <span className="font-mono text-[11px] text-[#4A1025]">Next.js &bull; Tailwind CSS &bull; Framer Motion &bull; TypeScript</span>
                  </div>
                  <p className="font-inter text-xs text-[#211C1E]/80 leading-relaxed">
                    Designed and developed modern Swiss Brutalist developer portfolio showcasing projects, skills, and achievements.
                    Built a responsive UI with smooth animations; deployed on a custom domain.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="pt-2 border-t border-[#211C1E]/15">
              <h2 className="font-bebas text-2xl text-[#4A1025] tracking-wide mb-3">
                05. EDUCATION &amp; ACADEMICS
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <p className="font-inter font-bold text-sm text-[#211C1E]">
                    Bachelor of Engineering (B.E.) – Computer Science &amp; Engineering
                  </p>
                  <p className="font-inter text-xs text-[#211C1E]/80">
                    AMC Engineering College, Bengaluru &bull; Visvesvaraya Technological University (VTU)
                  </p>
                  <p className="font-mono text-[11px] text-[#211C1E]/70 mt-1">
                    Relevant Coursework: DSA, Design &amp; Analysis of Algorithms, DBMS, Computer Networks, Operating Systems, Software Engineering, Cloud Computing, Artificial Intelligence, OOP, Compiler Design (BCS613C)
                  </p>
                </div>
                <p className="font-mono text-xs font-bold text-[#4A1025] whitespace-nowrap">
                  EXPECTED GRADUATION: 2027
                </p>
              </div>
            </div>

            {/* Extracurricular & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#211C1E]/15 text-xs font-inter">
              <div>
                <h3 className="font-bebas text-xl text-[#4A1025] tracking-wide mb-1">
                  LEADERSHIP &amp; EXTRACURRICULAR
                </h3>
                <p className="font-bold text-[#211C1E]">Event Management Volunteer</p>
                <p className="text-[#211C1E]/80 mt-1 leading-relaxed">
                  Contributed to the successful execution of Swiggy Music Festival, stand-up comedy shows, and live concerts. Assisted in event logistics, crowd management, and cross-team operations under tight schedules.
                </p>
              </div>
              <div>
                <h3 className="font-bebas text-xl text-[#4A1025] tracking-wide mb-1">
                  LANGUAGES &amp; SPORTS
                </h3>
                <p className="text-[#211C1E]/80"><strong className="text-[#211C1E]">Languages:</strong> English, Hindi, Gujarati, Kannada</p>
                <p className="text-[#211C1E]/80 mt-1"><strong className="text-[#211C1E]">Sports:</strong> Cricket, Badminton, Snooker, Running</p>
                <p className="font-mono text-[10px] text-[#4A1025] mt-2 font-bold uppercase">
                  Available for Bengaluru &amp; Remote Roles Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer Note */}
          <div className="mt-8 pt-4 border-t border-[#211C1E]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#211C1E]/50">
            <span>MOHAMMED FAIZ &bull; RESUME ARCHIVE 2026-2027</span>
            <span>PRESS PRINT / SAVE PDF TO EXPORT AS HARDCOPY</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
