import { useEffect, useState } from "react";
import { Github, Linkedin, ExternalLink, FileText, Mail } from "lucide-react";

const stats = [
  { value: "5+", label: "AI Projects" },
  { value: "9.48", label: "CGPA" },
  { value: "Top 6", label: "National Rank" },
  { value: "4", label: "Core Research Areas" },
];

const typingTexts = [
  "AI Research Engineer",
  "Biomedical AI Systems",
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="hero" className="pb-12 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="orb-blue top-0 right-0 animate-float" />
      <div className="orb-green bottom-20 left-0 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-soft border border-gray-100/50 transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 xl:col-span-3 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-glow" />
                  Available for Research
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 whitespace-nowrap overflow-hidden pb-2">
                  {displayText}
                  <span className="typing-cursor text-gray-400 ml-1">|</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-light whitespace-nowrap">
                  Mukka Jijnash Kumar
                </p>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
                Building AI systems at the intersection of healthcare diagnostics and intelligent systems, with a focus on multimodal AI for early disease detection.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-2xl p-4 text-center card-hover">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mono">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1 mono">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors card-hover">
                  View Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/F_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 hover:bg-blue-100 transition-colors">
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
                <a href="mailto:jijnashkumar@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-100 rounded-full text-sm font-medium text-green-600 hover:bg-green-100 transition-colors">
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            </div>

            <div className="lg:col-span-1 xl:col-span-2">
              <div className="relative max-w-xs lg:max-w-none ml-auto">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <img src="/hero.jpg" alt="Mukka Jijnash Kumar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-2.5 rounded-xl shadow-soft border border-gray-100 mono text-xs font-medium text-gray-600">
                  SRMIST '27
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 mono">Experience with</span>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600">IIIT Nagpur</span>
                  <span className="px-3 py-1 rounded-lg bg-green-50 text-green-600">IIT Jammu</span>
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600">Google Cloud</span>
                </div>
              </div>

              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/Jijnash2636", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/jijnash-kumar-mukka/", label: "LinkedIn" },
                  { icon: ExternalLink, href: "https://leetcode.com/u/Jijnash2636/", label: "LeetCode" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all card-hover"
                    title={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
