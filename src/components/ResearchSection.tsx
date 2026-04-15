import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, FlaskConical, Microscope, Building2, Calendar } from "lucide-react";

const items = [
  { icon: BookOpen, title: "Book Chapter Publication", institution: "The Dawn Publishers", year: "2024", status: "Published", statusBg: "bg-green-100", statusText: "text-green-700", desc: "Contributed a chapter on AI applications in healthcare diagnostics and clinical decision systems.", contribution: "Chapter on AI-driven diagnostic systems for resource-limited environments" },
  { icon: FlaskConical, title: "EcoSignal-CP Research Paper", institution: "Environmental AI Research", year: "2024 – 2025", status: "In Progress", statusBg: "bg-amber-100", statusText: "text-amber-700", desc: "Carbon Pressure Control for Urban CO₂ Emission Stabilization using SUMO simulation and ML.", contribution: "Novel approach combining traffic simulation with predictive ML for emission control" },
  { icon: Microscope, title: "Multimodal Parkinson's Detection", institution: "IIIT Nagpur", year: "2025 – 2026", status: "Research", statusBg: "bg-blue-100", statusText: "text-blue-700", desc: "Feature fusion research combining voice, facial, and motor biomarkers for non-invasive detection.", contribution: "Non-invasive early detection pipeline using three distinct data modalities" },
];

const ResearchSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="research" className="py-12 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Publications & Research</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8 tracking-tight">
            Academic Work
          </h2>

          <div className={`space-y-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
            {items.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all group card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5"><Building2 className="w-3 h-3" /><span>{item.institution}</span></div>
                        <span className="text-gray-300">·</span>
                        <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /><span className="mono">{item.year}</span></div>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-medium mono ${item.statusBg} ${item.statusText}`}>{item.status}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <div className="p-4 rounded-xl bg-white border border-gray-100">
                  <span className="mono text-xs font-semibold text-gray-500 uppercase tracking-wider">My Contribution</span>
                  <p className="text-sm text-gray-900 mt-1">{item.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
