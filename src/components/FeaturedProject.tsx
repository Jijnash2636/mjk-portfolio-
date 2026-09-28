import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileInput, ShieldCheck, Cpu, Brain, Server, Cloud, CheckCircle2, Code2 } from "lucide-react";

const components = [
  { icon: Brain, title: "Machine Learning", desc: "A machine-learning prediction pipeline for structured clinical data" },
  { icon: ShieldCheck, title: "Data Validation", desc: "Structured validation so API inputs conform to the expected schema" },
  { icon: Server, title: "FastAPI", desc: "Model inference exposed through REST endpoints" },
  { icon: Cloud, title: "Cloud Deployment", desc: "Google Cloud and Vertex AI for model deployment and inference" },
];

const chain = [
  { icon: FileInput, label: "Clinical Data" },
  { icon: ShieldCheck, label: "Data Validation" },
  { icon: Cpu, label: "Feature Processing" },
  { icon: Brain, label: "ML Inference" },
  { icon: Server, label: "FastAPI" },
  { icon: Cloud, label: "Google Cloud / Vertex AI" },
];

const tech = ["Python", "FastAPI", "scikit-learn", "Google Cloud", "Vertex AI"];

const FeaturedProject = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="featured-work" className="py-12 px-4 relative overflow-hidden scroll-mt-16 md:scroll-mt-14">
      <div className="orb-blue bottom-0 right-0" />

      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-6">
          <span className="mono text-xs text-blue-500 uppercase tracking-widest font-medium">Featured Work</span>
          <div className="flex items-end justify-between gap-4 mt-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              AI-Powered Medical Diagnosis API
            </h2>
            <span className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-600 mono">
              <CheckCircle2 className="w-3 h-3" />
              System Design Focus
            </span>
          </div>
          <p className="text-gray-600 mt-3 text-sm max-w-2xl">
            ML-based clinical data analysis with FastAPI and cloud deployment
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                From clinical data to a served prediction
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                An AI-powered medical diagnosis system that processes structured clinical numerical data for disease prediction. The focus is turning machine learning inference into a usable API through data validation, model serving, and cloud-based deployment.
              </p>

              <div className="space-y-3 mb-6">
                {components.map((item) => (
                  <div key={item.title} className="flex items-center gap-3 text-sm group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium">{item.title}</span>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-gray-100 text-xs font-medium text-gray-600 mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-green-50/50 p-8 md:p-10 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600 text-sm font-medium mono">Example Request Contract</span>
              </div>

              <p className="text-xs text-gray-500 mb-3">
                Structure only — values are placeholders, not measured results.
              </p>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                  <span className="ml-3 text-xs text-gray-500 mono">POST /api/v1/predict</span>
                </div>
                <pre className="text-xs text-gray-600 overflow-x-auto mono">
<code>{`{
  "input": {
    "hemoglobin": "<value>",
    "rbc": "<value>",
    "wbc": "<value>",
    "platelets": "<value>"
  },
  "output": {
    "prediction": "<predicted condition>"
  }
}`}</code>
                </pre>
              </div>

              <div className="mt-6">
                <div className="text-xs text-gray-400 mono mb-3">Data to deployed intelligence</div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                  {chain.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-gray-100 text-xs font-medium text-gray-600 mono">
                        <step.icon className="w-3 h-3 text-blue-500" />
                        {step.label}
                      </span>
                      {i < chain.length - 1 && <span className="text-gray-300 text-xs">&rarr;</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
