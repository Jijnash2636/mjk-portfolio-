import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, FileInput, Cpu, Brain, FileOutput, Check } from "lucide-react";

const pipeline = [
  { icon: FileInput, label: "INPUT", title: "Patient Data", desc: "CBC reports, vitals, symptoms", details: ["Blood panel", "Vital signs", "History"] },
  { icon: Cpu, label: "PROCESS", title: "Feature Engineering", desc: "Normalization & preprocessing", details: ["Data cleaning", "Selection", "Normalization"] },
  { icon: Brain, label: "INFERENCE", title: "Model Inference", desc: "XAI-powered prediction", details: ["RF Classifier", "SHAP/LIME", "Confidence"] },
  { icon: FileOutput, label: "OUTPUT", title: "Diagnostic Output", desc: "Risk scores & recommendations", details: ["Prediction", "Urgency", "Drugs"] },
];

const PipelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-12 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">System Design</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2 tracking-tight">
            AI Pipeline Architecture
          </h2>
          <p className="text-gray-600 mt-3 text-sm max-w-2xl mb-10">
            End-to-end clinical decision support system — from raw data to actionable diagnostic insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {pipeline.map((step, i) => (
              <div key={step.label} className="relative" onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
                {i < pipeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${hoveredIdx === i ? 'translate-x-1 text-blue-500' : 'text-gray-300'}`} />
                  </div>
                )}
                <div className={`h-full p-5 rounded-2xl border transition-all duration-300 ${hoveredIdx === i ? 'bg-blue-50 border-blue-200 shadow-lg -translate-y-1' : 'bg-gray-50 border-gray-100 hover:border-gray-200 hover:shadow-md'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredIdx === i ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mono">{step.label}</span>
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

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[{ t: "Explainable AI", d: "SHAP/LIME for clinical trust and model interpretability" }, { t: "Real-Time Processing", d: "Low-latency inference for emergency triage scenarios" }, { t: "Production Ready", d: "FastAPI deployment with comprehensive API documentation" }].map((f) => (
              <div key={f.t} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
                <h4 className="font-semibold text-sm text-gray-900 mb-1">{f.t}</h4>
                <p className="text-xs text-gray-600">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
