import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Medal, Award, BookOpen, Users } from "lucide-react";

const milestones = [
  { icon: Trophy, title: "SMARTATHON 2025", result: "Top 6 National Rank", context: "among 10,000+ participants", desc: "Emergency Brain 360 — AI Clinical Triage System", gradient: "from-amber-50 to-yellow-50" },
  { icon: Medal, title: "MedAIthon 2025", result: "5th Place + Special Prize", context: "SRM Medical College Hackathon", desc: "Hospital Analytics Platform — 54 operational modules", gradient: "from-blue-50 to-indigo-50" },
  { icon: Award, title: "Academic Excellence", result: "9.48 / 10 CGPA", context: "B.Tech AI & Machine Learning", desc: "SRMIST Tiruchirappalli — Consistently high academic performance", gradient: "from-green-50 to-emerald-50" },
  { icon: BookOpen, title: "Book Chapter Publication", result: "Published", context: "The Dawn Publishers, 2024", desc: "AI applications in healthcare diagnostics and clinical decision systems", gradient: "from-purple-50 to-pink-50" },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-8">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Recognition</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 tracking-tight">Achievements</h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-4 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
          {milestones.map((m) => (
            <div key={m.title} className={`bg-gradient-to-br ${m.gradient} p-6 rounded-2xl border border-gray-100 card-hover`}>
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <m.icon className="w-7 h-7 text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-2xl font-bold text-gray-900 mb-0.5 mono">{m.result}</div>
                  <div className="font-semibold text-gray-900 mb-2">{m.title}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Users className="w-3 h-3" />
                    <span>{m.context}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
