import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import WorkSection from './components/WorkSection.jsx'
import './App.css'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
