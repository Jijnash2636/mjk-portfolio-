import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchInterestsSection from "@/components/ResearchInterestsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsSection from "@/components/ProjectsSection";
import PipelineSection from "@/components/PipelineSection";
import ResearchSection from "@/components/ResearchSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <>
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ResearchInterestsSection />
    <SkillsSection />
    <ExperienceSection />
    <FeaturedProject />
    <ProjectsSection />
    <PipelineSection />
    <ResearchSection />
    <AchievementsSection />
    <ContactSection />

    <footer className="px-4 pb-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 border border-gray-100 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Jijnash Kumar Mukka</p>
            <p className="text-sm text-gray-500 mono">AI/ML Engineer &amp; Researcher</p>
          </div>
          <p className="text-xs text-gray-400 mono text-left sm:text-right">
            © 2026 Jijnash Kumar Mukka · Open to research collaborations, internships &amp; graduate opportunities
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default Index;
