import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart3, Microscope, Brain, Zap, Building2, ArrowUpRight, Github, ExternalLink, BookOpen, Wrench } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "MedDocAssist",
    subtitle: "Multimodal clinical NLP framework",
    year: "2026",
    tags: ["Clinical NLP", "Ongoing Research"],
    problem: "Clinical documentation is slow and error-prone, and free-text records are difficult to summarise, code, and act on.",
    solution: "A clinical decision support system that assists medical documentation from text, audio, and image inputs — BioBERT NER, Flan-T5 summarization, PubMedBERT ICD-10 coding, drug-drug interaction detection, Whisper transcription, and Tesseract OCR.",
    result: "Documented evaluation: BioBERT NER F1 0.87 (+15% over baseline), ICD-10 Precision@3 0.89 across 34 codes, 42% summarization compression. Includes PHI de-identification and confidence-gated human-in-the-loop review.",
    tech: ["Python", "BioBERT", "Flan-T5", "PubMedBERT", "Whisper", "Tesseract OCR"],
    links: [{ href: "https://github.com/Jijnash2636/MedDocAssist-Clinical-NLP", label: "View Code", icon: Github }],
    accent: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
  },
  {
    icon: BarChart3,
    title: "EcoSignal-CP",
    subtitle: "Carbon pressure control for urban CO₂ stabilization",
    year: "2026",
    tags: ["Sustainability", "Presented — ICRISET 2026"],
    problem: "Conventional signal control optimises queue length or vehicle count, which does not account for the emissions each strategy produces.",
    solution: "A Carbon Pressure metric, CP(t) = 0.35ρ + 0.30ρ′ + 0.20Sf + 0.15Ab, combining SUMO 1.20 simulation, TraCI, and per-vehicle ANPR profiling.",
    result: "4.7% lower CO₂ than fixed-time Webster control across 10 independent trials, with the lowest coefficient of variation (41.09%) among the configurations evaluated. Presented at ICRISET 2026, Chennai; submitted to IEEE ITSC 2026.",
    tech: ["SUMO 1.20", "TraCI", "TypeScript", "React", "ANPR Profiling"],
    links: [{ href: "https://github.com/Jijnash2636/ecosignal-cp", label: "View Code", icon: Github }],
    accent: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    icon: Zap,
    title: "Emergency Brain 360",
    subtitle: "AI-assisted clinical triage system",
    year: "2025",
    tags: ["Clinical Triage", "Top 6 National"],
    problem: "Emergency triage needs fast severity assessment across a busy department, where manual scoring is slow and inconsistent.",
    solution: "Gemini 2.5 Flash triage with voice-based symptom dictation at intake, a structured patient intake workflow, and heart-rate and SpO₂ visualisation with severity and symptom charts.",
    result: "Top 6 National Rank — SMARTATHON 2025. Rule-based triage scoring enhanced by AI, with Green/Yellow/Red urgency classification and AI-generated triage summaries.",
    tech: ["Gemini 2.5 Flash", "React", "TypeScript", "Web Speech API"],
    links: [{ href: "https://github.com/Jijnash2636/SmartaTon_top6_project_Dhanalaxmi-UNV", label: "View Code", icon: Github }],
    accent: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    icon: Microscope,
    title: "Parkinson's Disease Detection",
    subtitle: "Non-invasive multimodal biomarker analysis",
    year: "2026",
    tags: ["Biomedical AI", "Research — IIIT Nagpur"],
    problem: "Early Parkinson's diagnosis relies heavily on costly imaging and specialist access, which limits how early it can be detected.",
    solution: "Non-invasive detection combining voice, facial, and motor biomarkers — MFCC, pitch, jitter, shimmer and HNR from audio, facial landmarks via MediaPipe, and movement analysis with DeepLabCut.",
    result: "Confidence-weighted late fusion across the three modalities, with each modality evaluated against the combined system.",
    tech: ["Python", "librosa", "Parselmouth", "MediaPipe", "DeepLabCut", "Multimodal ML"],
    links: [],
    accent: "from-purple-50 to-pink-50",
    border: "border-purple-100",
  },
  {
    icon: Building2,
    title: "SRM Hospital Supporter System",
    subtitle: "AI-enabled hospital operations platform",
    year: "2025",
    tags: ["Healthcare Systems", "5th + Gold + Special Prize"],
    problem: "Hospital operations fragment patient information across departments, complicating bed management, prescriptions, and patient flow.",
    solution: "Separate doctor, nurse head, intern, patient, and receptionist workflows with an AI medical assistant, AI triage and risk-based queues, department recommendation, e-prescriptions, and ventilator monitoring.",
    result: "5th Place, Gold Medal, and Special Prize — MedAIthon 2025.",
    tech: ["Gemini API", "React", "TypeScript", "Vite", "Healthcare Analytics"],
    links: [{ href: "https://github.com/Jijnash2636/MedAIton_top5_project", label: "View Code", icon: Github }],
    accent: "from-rose-50 to-pink-50",
    border: "border-rose-100",
  },
];

const otherWork = [
  {
    icon: Wrench,
    title: "Chemical Equipment Parameter Visualizer",
    desc: "CSV analysis, anomaly detection, and AI-powered insights for chemical equipment data.",
    links: [
      { href: "https://jijnashfosseeproject.vercel.app", label: "Live Demo", icon: ExternalLink },
      { href: "https://github.com/Jijnash2636/IIT-Bombay-FOSSEE", label: "View Code", icon: Github },
    ],
  },
  {
    icon: Wrench,
    title: "Mini DSL Compiler",
    desc: "Compiler built with Flex and Bison — lexer, parser, AST, semantic analysis, and intermediate representation.",
    links: [{ href: "https://github.com/Jijnash2636/Compiler-Design-DSL_RA2311026050074", label: "View Code", icon: Github }],
  },
  {
    icon: BookOpen,
    title: "TrafficSENSE Research",
    desc: "Literature survey and research-gap analysis for risk-adaptive multi-agent traffic signal optimization. NIT Calicut, SIP 2026.",
    links: [{ href: "https://github.com/Jijnash2636/trafficsense-research", label: "Read Research Notes", icon: ExternalLink }],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-12 px-4 scroll-mt-16 md:scroll-mt-14">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-12">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mt-2">
            Selected Projects
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-5 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group cursor-pointer transition-all duration-500 ${expandedIdx === i ? 'md:col-span-2' : ''}`}
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
            >
              <div className={`bg-gradient-to-br ${p.accent} rounded-3xl p-6 md:p-8 h-full border ${p.border} hover:shadow-lg transition-all duration-300 card-hover`}>
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <p.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{p.title}</h3>
                      <p className="text-sm text-gray-600">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="mono text-sm text-gray-400">{p.year}</span>
                    <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className={`w-4 h-4 text-gray-500 transition-all duration-300 ${expandedIdx === i ? 'rotate-45' : 'group-hover:rotate-12'}`} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/80 text-xs font-medium text-gray-600 mono shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {expandedIdx === i && (
                  <div className="mt-6 pt-6 border-t border-gray-200/50 space-y-5 animate-fade-in-up">
                    <div className="grid md:grid-cols-3 gap-5">
                      <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm">
                        <h4 className="mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">Problem</h4>
                        <p className="text-sm text-gray-700">{p.problem}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm">
                        <h4 className="mono text-xs text-green-600 font-semibold uppercase tracking-wider mb-2">Solution</h4>
                        <p className="text-sm text-gray-700">{p.solution}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm">
                        <h4 className="mono text-xs text-purple-600 font-semibold uppercase tracking-wider mb-2">Result</h4>
                        <p className="text-sm text-gray-700">{p.result}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-lg bg-white/60 text-xs font-medium text-gray-600 mono shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {p.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm"
                          >
                            <l.icon className="w-3 h-3" />
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Other Work</h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className={`grid md:grid-cols-3 gap-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
            {otherWork.map((o) => (
              <div key={o.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft card-hover flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <o.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm leading-snug">{o.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{o.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {o.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <l.icon className="w-3 h-3" />
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;