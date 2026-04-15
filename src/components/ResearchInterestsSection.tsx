import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Eye, HeartPulse, Globe } from "lucide-react";

const interests = [
  { icon: Brain, title: "Biomedical AI & Diagnostics", desc: "Developing AI systems for early disease detection using clinical data like blood parameters and biomarkers." },
  { icon: Eye, title: "Multimodal Learning Systems", desc: "Combining voice, facial, and motor data to build robust non-invasive diagnostic systems." },
  { icon: HeartPulse, title: "Explainable AI in Healthcare", desc: "Making ML model decisions interpretable for clinicians through XAI techniques." },
  { icon: Globe, title: "Smart Systems Optimization", desc: "Applying ML to real-world challenges like traffic simulation and carbon emission control." },
];

const ResearchInterestsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="research-interests" className="py-12 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">What's Next</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8 tracking-tight">
            Research Interests
          </h2>

          <div className={`grid md:grid-cols-2 gap-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
            {interests.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-green-50/50 border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer card-hover"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                    <item.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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
