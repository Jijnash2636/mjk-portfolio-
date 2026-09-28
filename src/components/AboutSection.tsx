import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-8 px-4 relative overflow-hidden scroll-mt-16 md:scroll-mt-14">
      <div className="orb-green top-0 left-1/4" />

      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-gradient-to-br from-blue-50/50 via-white to-green-50/50 rounded-3xl p-10 md:p-16 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">About Me</span>

          <div className="mt-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              I build AI systems — from ideas, data, and models to working applications.
            </h2>
          </div>

          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I am an undergraduate AI &amp; Machine Learning engineer focused on building practical intelligent systems across AI, healthcare, generative AI, and data-driven applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My experience spans machine learning, multimodal AI, clinical NLP, generative AI, AI agents, backend APIs, and cloud-based deployment. I enjoy turning ideas into working systems — from data processing and model development to API integration, deployment, and user-facing applications.
            </p>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-soft card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">B.Tech — Artificial Intelligence &amp; Machine Learning</h3>
                <p className="text-sm text-gray-600">
                  SRM Institute of Science and Technology, Tiruchirappalli · CGPA 9.52 / 10 · Expected 2027
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-soft card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What I Bring</h3>
                <p className="text-gray-600 leading-relaxed">
                  I combine machine learning knowledge with practical software development. I build systems that connect data, models, APIs, and applications — taking projects beyond experimentation toward usable solutions.
                </p>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[
                    { k: "Build", v: "ML models and intelligent applications" },
                    { k: "Integrate", v: "APIs, LLMs, databases, and cloud services" },
                    { k: "Deploy", v: "Turn models into usable systems" },
                  ].map((item) => (
                    <div key={item.k} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="mono text-xs font-semibold text-blue-600 uppercase tracking-wider">{item.k}</span>
                      <p className="text-sm text-gray-600 mt-1">{item.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="px-4 py-2 rounded-lg bg-gray-100 mono font-medium">B.Tech AI &amp; ML</span>
            <span className="text-gray-300">→</span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 mono font-medium">SRMIST Tiruchirappalli</span>
            <span className="text-gray-300">→</span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 mono font-medium">CGPA: 9.52 / 10</span>
            <span className="text-gray-300">→</span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 mono font-medium">Expected 2027</span>
            <span className="text-gray-300">→</span>
            <span className="px-4 py-2 rounded-lg bg-green-50 border border-green-100 mono font-medium text-green-600">RHCSA Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
