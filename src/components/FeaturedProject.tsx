import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GitBranch, Zap, BarChart3, ArrowRight, Code, Database, Cpu, CheckCircle2 } from "lucide-react";

const metrics = [
  { value: "92%", label: "Accuracy" },
  { value: "<200ms", label: "Latency" },
  { value: "24/7", label: "Uptime" },
];

const FeaturedProject = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="featured" className="py-12 px-4 relative overflow-hidden">
      <div className="orb-blue bottom-0 right-0" />
      
      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-6">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Featured Work</span>
          <div className="flex items-end justify-between mt-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              AI Medical Diagnosis API
            </h2>
            <span className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-600 mono">
              <CheckCircle2 className="w-3 h-3" />
              Production-ready
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-600 w-fit mb-6 mono">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
                Production-ready
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CBC-Based Disease Prediction API
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                An ML-powered API that analyzes Complete Blood Count (CBC) reports to provide instant disease insights, urgency flags, and drug-class recommendations, enhanced with LLM-generated explanations.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xl font-bold text-gray-900 mono">{m.value}</div>
                    <div className="text-xs text-gray-500 mt-1 mono">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { icon: GitBranch, title: "Random Forest + Feature Engineering", desc: "Engineered features from hematological parameters" },
                  { icon: Zap, title: "FastAPI for Low-Latency Inference", desc: "Production-ready REST endpoints" },
                  { icon: BarChart3, title: "LLM Layer for Human-Readable Insights", desc: "Clinical explanations for non-technical users" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 text-sm group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium">{item.title}</span>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "FastAPI", "Scikit-learn", "LLM Integration"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-gray-100 text-xs font-medium text-gray-600 mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/Jijnash2636" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors card-hover">
                  <Code className="w-4 h-4" />
                  View Code
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 hover:bg-blue-100 transition-colors">
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-green-50/50 p-8 md:p-10 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600 text-sm font-medium mono">API Endpoint</span>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                  <span className="ml-3 text-xs text-gray-500 mono">POST /api/v1/predict</span>
                </div>
                <pre className="text-xs text-gray-600 overflow-x-auto mono">
<code>{`{
  "hemoglobin": 13.5,
  "rbc": 4.8,
  "wbc": 7500,
  "platelets": 250000
}

// Response:
{
  "prediction": "Anemia",
  "urgency": "Medium",
  "confidence": 0.87,
  "insights": ["Low hemoglobin"],
  "drug_class": "Iron"
}`}</code>
                </pre>
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 mono">
                <span>&lt;200ms response</span>
                <span>·</span>
                <span>92% accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
