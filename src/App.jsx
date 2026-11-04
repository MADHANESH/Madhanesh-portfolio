import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import EducationSection from './components/EducationSection.jsx'
import EngineeringSection from './components/EngineeringSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import WorkSection from './components/WorkSection.jsx'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkSection />
        <EngineeringSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
