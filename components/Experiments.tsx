"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp, Cpu, BookOpen, Layers, Terminal, Sparkles, Binary } from "lucide-react";

interface ExperimentItem {
  no: string;
  name: string;
  category: string;
  status: "ACTIVE EXPLORATION" | "BENCHMARKING" | "PROTOTYPING";
  summary: string;
  labNotes: string[];
  keyArtifact: string;
  codeSnippet?: string;
}

const experiments: ExperimentItem[] = [
  {
    no: "EXP-001",
    name: "AGENTIC AI & MULTI-AGENT SWARMS",
    category: "AUTONOMOUS SYSTEMS",
    status: "ACTIVE EXPLORATION",
    summary:
      "Investigating multi-step autonomous agent architectures where language models act as planners, decomposing complex goals into verifiable tool executions and cyclic feedback loops.",
    labNotes: [
      "Benchmarking deterministic ReAct execution loops vs hierarchical subagent swarms.",
      "Optimizing prompt compression to preserve context budget during deep iterations.",
      "Designing rollback and guardrail checkpoints for autonomous code editing.",
    ],
    keyArtifact: "Autonomous Plan-Execute-Verify State Machine",
    codeSnippet: "const plan = await agent.decompose(goal);\nfor (const step of plan.steps) {\n  const result = await toolRunner.execute(step);\n  if (!verifier.validate(result)) await replan(step);\n}",
  },
  {
    no: "EXP-002",
    name: "MODEL CONTEXT PROTOCOL (MCP)",
    category: "PROTOCOL STANDARDS",
    status: "ACTIVE EXPLORATION",
    summary:
      "Studying the open Model Context Protocol standard for decoupling model intelligence from bespoke tool integration layers and enterprise data servers.",
    labNotes: [
      "Constructed local MCP server for SQLite, MongoDB, and filesystem introspection.",
      "Evaluated standardized transport protocols (stdio vs SSE) for local agent execution.",
      "Exploring dynamic capability negotiation between agents and host tools.",
    ],
    keyArtifact: "Custom Stdio MCP Server Pipeline",
    codeSnippet: 'server.setRequestHandler(ListToolsRequestSchema, async () => ({\n  tools: [\n    { name: "query_database", description: "Safe read-only execution" }\n  ]\n}));',
  },
  {
    no: "EXP-003",
    name: "HYBRID RETRIEVAL-AUGMENTED GENERATION (RAG)",
    category: "KNOWLEDGE RETRIEVAL",
    status: "BENCHMARKING",
    summary:
      "Engineering hybrid retrieval pipelines that marry dense vector semantic embeddings with sparse keyword BM25 retrieval for high-accuracy document grounding.",
    labNotes: [
      "Analyzing chunk size strategies (256 vs 512 tokens with 10% semantic overlap).",
      "Implementing reciprocal rank fusion (RRF) to blend vector and keyword rank lists.",
      "Applying re-ranking models (Cross-Encoders) to prune hallucinated context.",
    ],
    keyArtifact: "Hybrid Dense/Sparse Vector Search Engine",
    codeSnippet: "const denseHits = await vectorIndex.search(query, 10);\nconst sparseHits = await bm25Index.search(query, 10);\nconst ranked = reciprocalRankFusion([denseHits, sparseHits]);",
  },
  {
    no: "EXP-004",
    name: "LANGGRAPH & STATEFUL AGENT RUNTIMES",
    category: "AGENT ORCHESTRATION",
    status: "PROTOTYPING",
    summary:
      "Evaluating LangGraph for cyclic graph-based agent orchestration, checkpointed memory management, and human-in-the-loop validation gates.",
    labNotes: [
      "Modeling cyclical deliberation loops with explicit branch termination criteria.",
      "Persisting intermediate conversation state into SQLite memory checkpoints.",
      "Handling graceful recovery when external tool invocations time out.",
    ],
    keyArtifact: "StateGraph Cyclic Deliberator",
    codeSnippet: "const workflow = new StateGraph({ channels: agentChannels })\n  .addNode('agent', callModel)\n  .addNode('tools', toolExecutor)\n  .addEdge('tools', 'agent');",
  },
  {
    no: "EXP-005",
    name: "APACHE KAFKA & DISTRIBUTED EVENT STREAMS",
    category: "DISTRIBUTED SYSTEMS",
    status: "BENCHMARKING",
    summary:
      "Studying high-throughput message broking with Apache Kafka, consumer group load-balancing, and at-least-once message delivery semantics.",
    labNotes: [
      "Benchmarking partitioned consumer throughput under bursty academic query loads.",
      "Handling out-of-order event streams with idempotent transaction IDs.",
      "Analyzing consumer lag metrics and dead-letter queue routing.",
    ],
    keyArtifact: "Kafka Event-Driven Stream Ingestor",
    codeSnippet: "await producer.send({\n  topic: 'feedback-events',\n  messages: [{ key: facultyId, value: JSON.stringify(feedbackPayload) }]\n});",
  },
  {
    no: "EXP-006",
    name: "CLOUD INFRASTRUCTURE & CONTAINER ORCHESTRATION",
    category: "DEVOPS & CLOUD",
    status: "PROTOTYPING",
    summary:
      "Building containerized deployment runtimes with Docker, microservice routing via Kubernetes, and automated CI/CD gating using Jenkins on AWS.",
    labNotes: [
      "Writing multi-stage Dockerfiles optimizing layer caches down to minimal Alpine base images.",
      "Configuring Kubernetes horizontal pod autoscaling based on memory metrics.",
      "Designing Jenkins declarative pipelines with automated linting and security scans.",
    ],
    keyArtifact: "Multi-Stage Dockerized CI/CD Pipeline",
    codeSnippet: "FROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci && npm run build\nFROM node:20-alpine AS runner\nCMD [\"node\", \"server.js\"]",
  },
  {
    no: "EXP-007",
    name: "COMPILER DESIGN & SYNTAX TREES (BCS613C)",
    category: "COMPUTER SCIENCE THEORY",
    status: "ACTIVE EXPLORATION",
    summary:
      "Deep theoretical and practical study of lexical analysis, LALR parsing, Abstract Syntax Trees (ASTs), intermediate code generation, and runtime optimization.",
    labNotes: [
      "Constructing deterministic finite automata (DFA) for custom token lexing.",
      "Generating recursive descent parsers with formal context-free grammar.",
      "Exploring intermediate representations (Three-Address Code) and register allocation.",
    ],
    keyArtifact: "Lexical Analyzer & AST Parser Engine",
    codeSnippet: "function parseExpression(tokens) {\n  let left = parseTerm(tokens);\n  while (match(tokens, ['+', '-'])) {\n    left = new BinaryOpNode(tokens.prev(), left, parseTerm(tokens));\n  }\n  return left;\n}",
  },
];

export default function Experiments() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experiments"
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
          — SECTION 06 / CURRENT EXPERIMENTS &bull; RESEARCH DESK
        </motion.p>
        <p className="font-mono text-[10px] tracking-widest text-[#211C1E]/40 uppercase hidden sm:block">
          ENGINEERING LAB NOTEBOOK &bull; ACTIVE RESEARCH REPO
        </p>
      </div>

      {/* Heading + editorial brief */}
      <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
        <div className="md:col-span-7">
          <div className="overflow-hidden">
            <motion.h2
              className="section-heading text-[#211C1E]"
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              ALWAYS EXPLORING.
            </motion.h2>
          </div>
        </div>
        <motion.div
          className="md:col-span-5 flex flex-col justify-end pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="w-12 h-1 bg-[#4A1025] mb-4" />
          <p className="font-inter text-sm md:text-base leading-relaxed text-[#211C1E]/80">
            An engineering research notebook documenting emerging architectures, distributed systems, compiler design,
            and agentic protocols actively being investigated, coded, and benchmarked.
          </p>
        </motion.div>
      </div>

      {/* Engineering Notebook Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experiments.map((exp, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={exp.no}
              className={`border-2 border-[#211C1E] p-6 transition-all duration-300 relative ${isExpanded ? "bg-[#211C1E] text-[#EAE3D9] shadow-2xl" : "bg-white/40 text-[#211C1E] hover:border-[#4A1025]"
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-current/15 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 font-bold ${isExpanded ? "bg-[#4A1025] text-[#EAE3D9]" : "bg-[#211C1E] text-[#EAE3D9]"}`}>
                    {exp.no}
                  </span>
                  <span className="opacity-60 uppercase tracking-widest text-[10px] font-bold">{exp.category}</span>
                </div>
                <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 border ${isExpanded ? "border-[#4A1025] bg-[#4A1025]/40 text-emerald-300" : "border-[#4A1025]/30 text-[#4A1025]"
                  }`}>
                  {exp.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bebas text-2xl md:text-3xl tracking-wide mb-3">
                {exp.name}
              </h3>

              {/* Summary */}
              <p className="font-inter text-xs md:text-sm leading-relaxed opacity-85 mb-4">
                {exp.summary}
              </p>

              {/* Expandable Lab Notes */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pt-4 border-t border-current/15 space-y-3 font-mono text-xs"
                >
                  <p className="text-[#4A1025] font-bold tracking-wider uppercase text-[10px]">
                    {"// LAB OBSERVATIONS & BENCHMARKS"}
                  </p>
                  <ul className="space-y-2 opacity-80 text-[11px] list-disc list-inside">
                    {exp.labNotes.map((note, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {note}
                      </li>
                    ))}
                  </ul>

                  {/* Code snippet illustration */}
                  {exp.codeSnippet && (
                    <div className="p-3 bg-black/40 border border-current/20 text-[11px] font-mono rounded text-emerald-300 overflow-x-auto">
                      <p className="text-gray-400 text-[9px] mb-1 uppercase font-bold tracking-wider">{"// CODE / ARCHITECTURE SNIPPET"}</p>
                      <pre className="whitespace-pre-wrap">{exp.codeSnippet}</pre>
                    </div>
                  )}

                  <div className="pt-2 text-[10px] opacity-60 flex items-center justify-between">
                    <span>KEY ARTIFACT:</span>
                    <span className="font-bold underline">{exp.keyArtifact}</span>
                  </div>
                </motion.div>
              )}

              {/* Toggle Button */}
              <button
                onClick={() => toggleExpand(i)}
                className={`mt-4 pt-3 w-full flex items-center justify-between font-mono text-[11px] tracking-widest uppercase border-t border-current/10 font-bold transition-opacity hover:opacity-100 ${isExpanded ? "text-[#EAE3D9]/90" : "text-[#4A1025]"
                  }`}
              >
                <span>{isExpanded ? "COLLAPSE LAB LOGS" : "INSPECT LAB LOGS & CODE"}</span>
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
