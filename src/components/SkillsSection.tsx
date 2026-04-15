import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Database, Globe, BarChart3, CheckCircle2 } from "lucide-react";

const modules = [
  { icon: Brain, num: "01", title: "Biomedical AI Systems", desc: "End-to-end AI systems for clinical diagnostics, from data processing to actionable insights.", proof: "Built a CBC-based disease prediction system with LLM-generated explanations", skills: ["Machine Learning", "XAI", "Clinical Decision Systems"] },
  { icon: Database, num: "02", title: "ML Pipelines & APIs", desc: "Production-ready ML pipelines with FastAPI for scalable model deployment.", proof: "Deployed ML models via REST APIs with sub-50ms latency", skills: ["FastAPI", "Python", "REST APIs"] },
  { icon: Globe, num: "03", title: "Smart System Optimization", desc: "Applying ML to real-world challenges like traffic simulation and carbon emission control.", proof: "EcoSignal-CP: 11.8% CO₂ reduction using SUMO simulation", skills: ["SUMO", "Predictive Modeling", "Simulation"] },
  { icon: BarChart3, num: "04", title: "Data-driven Decision Systems", desc: "Turning complex data into clear, actionable recommendations for decision-makers.", proof: "Clinical triage system with Gemini AI reasoning", skills: ["Data Analysis", "LLM Integration", "Analytics"] },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-12 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-8">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mt-2">
            What I Build
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
          {modules.map((m) => (
            <div key={m.num} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft card-hover">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <m.icon className="w-5 h-5 text-blue-500" />
                </div>
                <span className="mono text-2xl font-bold text-gray-200">{m.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{m.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{m.desc}</p>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 mb-4">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{m.proof}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {m.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-600 mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
