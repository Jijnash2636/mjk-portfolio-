import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, FileInput, ShieldCheck, Cpu, Brain, Server, Cloud, Check } from "lucide-react";

const pipeline = [
  { icon: FileInput, num: "01", label: "INPUT", title: "Clinical / Structured Data", desc: "Patient measurements, clinical parameters, symptoms, or other structured inputs.", details: ["Patient measurements", "Clinical parameters", "Symptoms"] },
  { icon: ShieldCheck, num: "02", label: "VALIDATION", title: "Schema & Data Checks", desc: "Validate incoming data before processing and inference.", details: ["Schema checks", "Type checks", "Range checks"] },
  { icon: Cpu, num: "03", label: "PROCESSING", title: "Feature Preparation", desc: "Normalize, transform, and prepare data for model inference.", details: ["Normalization", "Transformation", "Feature preparation"] },
  { icon: Brain, num: "04", label: "INFERENCE", title: "Machine Learning Model", desc: "Generate predictions from the processed input.", details: ["ML model", "Prediction", "Model serving"] },
  { icon: Server, num: "05", label: "API", title: "FastAPI REST Service", desc: "Expose model functionality through structured API endpoints.", details: ["REST endpoints", "Request validation", "JSON responses"] },
  { icon: Cloud, num: "06", label: "DEPLOYMENT", title: "Google Cloud / Vertex AI", desc: "Deploy and serve machine-learning workloads through cloud infrastructure.", details: ["Google Cloud", "Vertex AI", "Model hosting"] },
];

const PipelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="system-design" className="py-12 px-4 scroll-mt-16 md:scroll-mt-14">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">System Design</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2 tracking-tight">
            From Data to Deployed Intelligence
          </h2>
          <p className="text-gray-600 mt-3 text-sm max-w-2xl mb-10">
            The engineering path a machine learning workload follows — from raw input to a served, validated API.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pipeline.map((step, i) => (
              <div key={step.num} className="relative" onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
                {i < pipeline.length - 1 && (i + 1) % 3 !== 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${hoveredIdx === i ? 'translate-x-1 text-blue-500' : 'text-gray-300'}`} />
                  </div>
                )}
                <div className={`h-full p-5 rounded-2xl border transition-all duration-300 ${hoveredIdx === i ? 'bg-blue-50 border-blue-200 shadow-lg -translate-y-1' : 'bg-gray-50 border-gray-100 hover:border-gray-200 hover:shadow-md'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredIdx === i ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mono">{step.label}</span>
                      <span className="text-xs text-gray-300 mono">{step.num}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h4>
                  <p className="text-xs text-gray-600">{step.desc}</p>
                  <div className={`space-y-1 overflow-hidden transition-all duration-300 ${hoveredIdx === i ? 'max-h-20 opacity-100 mt-3 pt-3 border-t border-blue-200' : 'max-h-0 opacity-0'}`}>
                    {step.details.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-blue-700">
                        <Check className="w-3 h-3" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="text-xs text-gray-400 mono mb-3">Engineering focus</div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {pipeline.map((step, i) => (
                <div key={step.num} className="flex items-center gap-2">
                  <span className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-100 text-xs font-medium text-gray-600 mono">
                    {step.label}
                  </span>
                  {i < pipeline.length - 1 && <span className="text-gray-300 text-xs">&rarr;</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
