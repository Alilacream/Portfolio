import { Navbar } from './component/NavBar'
import Footer from './component/Footer'
import './App.css'
import Hero from './component/Hero'
import UserHero from './layout/Me'
import Skills from './component/Skills'
import Experiences from './component/Experiences'
import WhatsappButton from './component/ui/WhatsappButton'
import Projects from './component/Projects'
import { ME, TECH_SKILLS, PROJECTS, EXP } from './lib/profiledata'
function App() {
  return (
    <div className="container">
      <Navbar />
      <UserHero />
      <Hero />
      <Projects projects={PROJECTS} />
      <Experiences experiences={EXP} />
      <Skills skills={TECH_SKILLS} />
      <WhatsappButton />
      <Footer />
    </div>
  )
}

export default App
