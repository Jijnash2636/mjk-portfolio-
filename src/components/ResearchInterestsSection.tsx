import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, HeartPulse, Sparkles, Network, Server } from "lucide-react";

const areas = [
  { icon: Brain, num: "01", title: "Multimodal AI", desc: "Combining voice, facial, and motor signals to develop robust intelligent systems.", tags: ["Voice Biomarkers", "Computer Vision", "Feature Fusion", "Multimodal Learning"] },
  { icon: HeartPulse, num: "02", title: "Healthcare AI & Clinical NLP", desc: "Developing AI systems for biomedical diagnostics, clinical documentation, medical information extraction, and decision-support workflows.", tags: ["Biomedical AI", "Clinical NLP", "Medical Data", "Diagnostic Systems"] },
  { icon: Sparkles, num: "03", title: "Generative AI & AI Agents", desc: "Building LLM-powered applications and agentic workflows for reasoning, automation, structured analysis, and intelligent assistance.", tags: ["LLMs", "Generative AI", "AI Agents", "Prompt Engineering"] },
  { icon: Network, num: "04", title: "Intelligent Systems & Reinforcement Learning", desc: "Exploring adaptive decision-making and optimization for real-world systems such as urban traffic management.", tags: ["Reinforcement Learning", "Multi-Agent Systems", "Traffic Simulation", "Optimization"] },
  { icon: Server, num: "05", title: "ML Systems & Deployment", desc: "Turning machine learning models into usable services through validation, APIs, model serving, and cloud infrastructure.", tags: ["FastAPI", "REST APIs", "Model Deployment", "Google Cloud", "Vertex AI"] },
];

const ResearchInterestsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="research-areas" className="py-12 px-4 scroll-mt-16 md:scroll-mt-14">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">What I Work On</span>
          <div className="flex items-end justify-between gap-4 mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Research Areas
            </h2>
            <a href="#research-publications" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap">
              View publications →
            </a>
          </div>

          <div className={`grid md:grid-cols-2 gap-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
            {areas.map((item, i) => (
              <div
                key={item.num}
                className={`flex gap-5 p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-green-50/50 border border-gray-100 hover:shadow-lg transition-all duration-300 group card-hover ${i === areas.length - 1 ? "md:col-span-2" : ""}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                    <item.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="mono text-xs text-gray-400 font-medium">{item.num}</span>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-white border border-gray-100 text-xs font-medium text-gray-600 mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestsSection;
