import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    org: "National Institute of Technology Calicut",
    role: "Research Intern",
    period: "May 2026 – July 2026",
    context: "Summer Internship Programme (SIP) 2026",
    highlights: [
      "Researched risk-adaptive multi-agent traffic signal optimization for urban accident blackspot prevention",
      "Surveyed accident-risk prediction, adaptive signal optimization, traffic conflict detection, and safety-aware intelligent transportation systems",
      "Conducted comparative analysis of existing methods and identified research gaps",
      "Supported technical direction, project review, and evaluation",
    ],
    tech: ["Reinforcement Learning", "Multi-Agent Systems", "Traffic Optimization", "Intelligent Systems"],
    link: { href: "https://github.com/Jijnash2636/trafficsense-research", label: "Read Research Notes" },
  },
  {
    org: "IIT Jammu",
    role: "Artificial Intelligence Intern",
    period: "Dec 2025 – Mar 2026",
    context: "Multi-agent AI systems with structured reasoning, tool integration, and memory",
    highlights: [
      "Developed CareerSuite AI, a multi-agent career guidance and resume analysis system",
      "Built a 4-agent career pipeline covering profile analysis, skill-gap analysis, course recommendation, and career advising",
      "Built a 2-agent resume reviewer with ATS compatibility scoring and professional summary rewriting",
      "Worked with CrewAI and the OpenAI Agents SDK for agentic AI workflows",
    ],
    tech: ["Python", "CrewAI", "OpenAI Agents SDK", "LLMs", "Gradio"],
    link: { href: "https://github.com/Jijnash2636/CareerSuite-AI", label: "View Code" },
  },
  {
    org: "IIIT Nagpur",
    role: "Research Intern",
    period: "Dec 2025 – Feb 2026",
    context: "Non-invasive pre-clinical detection without reliance on imaging",
    highlights: [
      "Developed a multimodal machine learning pipeline for Parkinson's disease detection using voice, facial, and motor biomarkers",
      "Extracted voice features including MFCC, pitch, jitter, shimmer, and HNR using librosa and Parselmouth",
      "Processed facial landmarks with MediaPipe and analyzed motor biomarkers with DeepLabCut",
      "Developed a confidence-weighted late-fusion strategy and evaluated each modality against the combined system",
    ],
    tech: ["Python", "librosa", "Parselmouth", "MediaPipe", "DeepLabCut", "Multimodal ML"],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-12 px-4 scroll-mt-16 md:scroll-mt-14">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Where I've Applied AI</span>
          <div className="flex items-end justify-between mt-2 mb-8 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Experience</h2>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap">Get in touch →</a>
          </div>

          <div className="relative pl-7 md:pl-10">
            <div className="absolute left-0 md:left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-green-300 to-gray-200" />
            <div className={`space-y-5 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
              {experiences.map((exp) => (
                <div key={exp.org} className="relative group">
                  <div className="absolute -left-7 md:-left-3.5 top-5 w-4 h-4 rounded-full bg-white border-2 border-blue-400 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 z-10 shadow-sm" />
                  <div className="p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white group-hover:border-blue-100">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="mono text-xs text-blue-600 uppercase tracking-wider font-medium">{exp.org}</span>
                        <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-gray-500">
                          {exp.location && (
                            <>
                              <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</div>
                              <span className="text-gray-300">·</span>
                            </>
                          )}
                          <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /><span className="mono">{exp.period}</span></div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-green-400 mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 mb-3">
                      <span className="text-xs text-blue-600 font-medium flex-shrink-0">Context:</span>
                      <span className="text-sm text-gray-900">{exp.context}</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mono">{t}</span>
                        ))}
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors flex-shrink-0"
                        >
                          {exp.link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
