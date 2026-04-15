import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  { role: "Research Intern", org: "IIIT Nagpur", location: "Nagpur, Maharashtra", period: "Dec 2025 – Feb 2026", highlights: ["Built multimodal ML pipeline for Parkinson's detection using voice, facial, and motor biomarkers", "Developed feature fusion strategy to handle data quality variance across three modalities"], impact: "Non-invasive pre-clinical detection system without reliance on imaging", tech: ["Python", "OpenCV", "Librosa", "Multimodal ML", "Feature Engineering"] },
  { role: "AI Agent Developer", org: "Infosys Springboard", location: "Remote", period: "2024", highlights: ["Developed an AI agent pipeline for healthcare diagnostic support", "Applied LLM-based reasoning for clinical decision assistance"], impact: "Built intelligent healthcare AI systems using agentic AI frameworks", tech: ["Python", "LLM", "Agentic AI", "Healthcare Analytics"] },
  { role: "AI Intern (GenAI & Agentic AI)", org: "IIT Jammu × Techible × I3C", location: "Remote", period: "Dec 2024 – Jan 2025", highlights: ["Built CareerSuite AI — multi-agent career guidance system using CrewAI", "Implemented resume analysis with structured output and skill gap identification"], impact: "Presented at Winter School 2025 AI Internship Program", tech: ["Python", "CrewAI", "OpenAI Agents SDK", "Gradio", "LLM"] },
  { role: "GenAI Intern", org: "Google Cloud", location: "Remote", period: "2024", highlights: ["Developed generative AI applications using Google Cloud infrastructure", "Built cloud-based ML pipeline for scalable model deployment"], impact: "Hands-on experience with Vertex AI and cloud ML deployment", tech: ["Python", "Google Cloud", "Vertex AI", "Gemini API"] },
  { role: "ML Intern", org: "AWS", location: "Remote", period: "2024", highlights: ["Developed and deployed ML models on AWS infrastructure", "Implemented scalable ML pipelines for real-world applications"], impact: "Production-ready ML systems on cloud infrastructure", tech: ["Python", "AWS Sagemaker", "ML Pipelines", "Boto3"] },
  { role: "AI Automation Intern", org: "ServiceNow", location: "Remote", period: "2023", highlights: ["Built AI-powered workflow automation for enterprise systems", "Integrated ML models with ServiceNow platform"], impact: "Streamlined enterprise operations with intelligent automation", tech: ["Python", "ServiceNow", "AI Automation", "REST APIs"] },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-12 px-4">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Background</span>
          <div className="flex items-end justify-between mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Work Experience</h2>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors">Get in touch →</a>
          </div>

          <div className="relative pl-7 md:pl-10">
            <div className="absolute left-0 md:left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-green-300 to-gray-200" />
            <div className={`space-y-5 stagger-children ${isVisible ? "scroll-visible" : ""}`}>
              {experiences.map((exp) => (
                <div key={exp.role + exp.org} className="relative group">
                  <div className="absolute -left-7 md:-left-3.5 top-5 w-4 h-4 rounded-full bg-white border-2 border-blue-400 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 z-10 shadow-sm" />
                  <div className="p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white group-hover:border-blue-100">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="mono text-xs text-blue-600 uppercase tracking-wider font-medium">{exp.org}</span>
                        <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-gray-500">
                          <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</div>
                          <span className="text-gray-300">·</span>
                          <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /><span className="mono">{exp.period}</span></div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-green-400 mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 mb-3">
                      <span className="text-xs text-blue-600 font-medium">Impact:</span>
                      <span className="text-sm text-gray-900">{exp.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mono">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
