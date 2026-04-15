import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart3, Microscope, Brain, Zap, Building2, ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  { icon: BarChart3, title: "EcoSignal-CP", subtitle: "Predictive Carbon Emission Control", year: "2026", tags: ["Sustainability", "Research"], problem: "Industrial carbon emissions lack real-time predictive monitoring and intervention systems.", solution: "Built CO₂ prediction model using SUMO traffic simulation with time-series ML for emission forecasting.", result: "~11.8% reduction in peak CO₂ emissions achieved in testing. Paper in progress.", tech: ["Python", "SUMO", "Scikit-learn", "Time-Series ML"], accent: "from-emerald-50 to-teal-50", border: "border-emerald-100" },
  { icon: Microscope, title: "AI Clinical Blood Analysis", subtitle: "CBC Interpretation System", year: "2025", tags: ["Healthcare AI", "Book Chapter • 2024"], problem: "Manual CBC interpretation is slow, error-prone, and requires expert knowledge.", solution: "ML model for CBC disease prediction with LLM layer providing readable diagnosis insights.", result: "Automated disease flagging with urgency levels and drug-class suggestions. Published in Dawn Publishers.", tech: ["Python", "Scikit-learn", "LLM Integration", "FastAPI"], accent: "from-blue-50 to-indigo-50", border: "border-blue-100" },
  { icon: Brain, title: "Parkinson's Detection", subtitle: "Multimodal Biomarker Analysis", year: "2026", tags: ["Biomedical AI", "Research"], problem: "Early Parkinson's detection requires expensive imaging equipment and specialist access.", solution: "Non-invasive detection using voice recordings, facial features, and hand motor patterns as biomarkers.", result: "Feature fusion system for pre-clinical detection without reliance on imaging. IIIT Nagpur research.", tech: ["Python", "OpenCV", "Librosa", "Multimodal ML"], accent: "from-purple-50 to-pink-50", border: "border-purple-100" },
  { icon: Zap, title: "Emergency Brain 360", subtitle: "AI Clinical Triage System", year: "2025", tags: ["AI Triage • Top 6 National"], problem: "Emergency triage for brain injuries lacks AI-assisted severity classification.", solution: "Clinical triage system with Gemini AI, voice-to-text intake, and live vitals dashboard.", result: "Top 6 National Rank — SMARTATHON 2025 among 10,000+ participants.", tech: ["React", "TypeScript", "Gemini API", "LLM"], accent: "from-amber-50 to-orange-50", border: "border-amber-100" },
  { icon: Building2, title: "Hospital Analytics Platform", subtitle: "Digital Hospital System", year: "2025", tags: ["Healthcare • Special Prize"], problem: "Hospital operations lack centralized digital management across 54 operational modules.", solution: "Centralized platform covering patient flow, doctor availability, records, and analytics.", result: "5th Place + Special Prize — MedAIthon 2025, SRM Medical College.", tech: ["Full-Stack", "Healthcare Analytics", "AI"], accent: "from-rose-50 to-pink-50", border: "border-rose-100" },
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
            Case Studies
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
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{p.title}</h3>
                      <p className="text-sm text-gray-600">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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

                    <div className="flex gap-3">
                      <a href="https://github.com/Jijnash2636" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm">
                        <Github className="w-3 h-3" />
                        View Code
                      </a>
                      <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        <ExternalLink className="w-3 h-3" />
                        Learn More
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
