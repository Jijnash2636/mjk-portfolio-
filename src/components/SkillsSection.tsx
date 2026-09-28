import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, BarChart3, Sparkles, Eye, Server, Cloud, Layers, Award, Languages as LanguagesIcon } from "lucide-react";

const stack = [
  { icon: Code2, title: "Programming", items: ["Python", "C++", "C"] },
  { icon: BarChart3, title: "Machine Learning & Data", items: ["scikit-learn", "NumPy", "Pandas", "Feature Engineering", "Model Evaluation", "Statistical Analysis"] },
  { icon: Sparkles, title: "Generative AI", items: ["BioBERT", "Flan-T5", "PubMedBERT", "LLMs", "AI Agents", "Prompt Engineering"] },
  { icon: Eye, title: "Computer Vision & Multimodal AI", items: ["MediaPipe", "DeepLabCut", "Whisper", "Tesseract OCR", "Multimodal Feature Fusion"] },
  { icon: Server, title: "Backend & ML APIs", items: ["FastAPI", "REST APIs", "Data Validation", "Model Serving"] },
  { icon: Cloud, title: "Cloud & Development", items: ["Google Cloud", "Vertex AI", "SUMO", "TraCI", "Git", "GitHub"] },
  { icon: Layers, title: "Applications", items: ["Healthcare AI", "Clinical NLP", "Reinforcement Learning", "Traffic Simulation"] },
];

const certifications = [
  "RHCSA",
  "Google Cloud Generative AI",
  "AWS Academy Machine Learning",
  "ServiceNow AI",
  "IIT Jammu AI / LLMs / Generative AI / Agents",
];

const languages = ["English", "Telugu", "Japanese"];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-12 px-4 scroll-mt-16 md:scroll-mt-14">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-8">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Technologies I Work With</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mt-2">
            Technical Stack
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
          {stack.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <group.icon className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600 mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-900">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-700 mono">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <LanguagesIcon className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l} className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-700 mono">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
