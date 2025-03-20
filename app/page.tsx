import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Timeline from './components/Timeline'
import ProjectSection from './components/ProjectSection'
import SkillSection from './components/SkillSection'
import { education, experiences, projects, skills } from '../data/dummyData'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      
      <section className="my-20">
        <h2 className="text-4xl font-bold text-[#2563eb] mb-12 text-center" id='education'>Education </h2>
        <Timeline items={[...education]} />
        <h2 className="text-4xl font-bold text-[#2563eb] mb-12 text-center pt-12 mt-12" id='experience'>Experience </h2>
        <Timeline items={[...experiences]} />
      </section>

      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />

      <Footer />
      
      {/* <AIChat /> */}
    </main>
  )
}