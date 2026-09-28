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
              Building AI systems that connect research with real-world applications.
            </h2>
          </div>

          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I am an undergraduate AI &amp; Machine Learning engineer and researcher at SRM Institute of Science and Technology, focused on building practical intelligent systems across multimodal AI, healthcare, generative AI, and intelligent optimization.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My work spans multimodal disease detection, clinical NLP, AI agents, reinforcement-learning-based optimization, and deployable machine learning systems. I enjoy taking an idea from data and experimentation through model development and system integration to a usable application.
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
                <h3 className="font-semibold text-gray-900 mb-2">My Differentiator</h3>
                <p className="text-gray-600 leading-relaxed">
                  I combine <span className="text-gray-900 font-medium">research-oriented machine learning with practical system development</span>. Rather than focusing only on model training, I work across the complete pipeline — data processing, feature engineering, model development, evaluation, APIs, cloud deployment, and application-level integration.
                </p>
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
