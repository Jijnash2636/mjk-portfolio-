import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Eye, Sparkles, Target } from "lucide-react";

const focusAreas = [
  { icon: Brain, title: "Biomedical AI for Early Disease Detection", desc: "Building ML models that analyze clinical data like blood parameters for non-invasive diagnostics" },
  { icon: Eye, title: "Multimodal Learning Systems", desc: "Combining voice, facial, and motor data to build robust non-invasive diagnostic systems" },
  { icon: Sparkles, title: "Explainable AI for Clinical Decision-Making", desc: "Making ML predictions interpretable so clinicians can trust and verify AI recommendations" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-8 px-4 relative overflow-hidden">
      <div className="orb-green top-0 left-1/4" />
      
      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-gradient-to-br from-blue-50/50 via-white to-green-50/50 rounded-3xl p-10 md:p-16 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">About Me</span>

          <div className="mt-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              I am an undergraduate researcher working at the intersection of AI and real-world systems.
            </h2>
          </div>

          <div className={`mt-10 grid md:grid-cols-3 gap-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
            {focusAreas.map((area, i) => (
              <div key={area.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft card-hover">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-soft card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">My Differentiator</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike traditional ML projects, my work focuses on <span className="text-gray-900 font-medium">real-world deployable systems</span> combining data, models, and APIs. I build systems that don't just demonstrate technical capability — they solve actual problems in healthcare and smart systems.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="px-4 py-2 rounded-lg bg-gray-100 mono font-medium">B.Tech AI & ML</span>
            <span className="text-gray-300">→</span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 mono font-medium">SRMIST Tiruchirappalli</span>
            <span className="text-gray-300">→</span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 mono font-medium">CGPA: 9.48</span>
            <span className="text-gray-300">→</span>
            <span className="px-4 py-2 rounded-lg bg-green-50 border border-green-100 mono font-medium text-green-600">RHCSA Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
