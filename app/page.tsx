import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Timeline from "./components/Timeline";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import { education, experiences, projects, skills } from "../data/dummyData";
import Footer from "./components/Footer";

function SectionHeading({
  label,
  title,
  accent,
}: {
  label: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="text-center mb-16">
      <span className="section-label mb-3">{label}</span>
      <h2 className="text-4xl font-bold text-slate-100 mt-2">
        {title} <span className="gradient-text">{accent}</span>
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />

      {/* Experience */}
      <section id="experience" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Where I've worked"
            title="Work"
            accent="Experience"
          />
          <Timeline items={[...experiences]} />
        </div>
      </section>

      <SkillSection skills={skills} />

      {/* Education */}
      <section id="education" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Academic journey"
            title="My"
            accent="Education"
          />
          <Timeline items={[...education]} />
        </div>
      </section>

      <ProjectSection projects={projects} />
      <Footer />
    </main>
  );
}
