import { Navbar } from './component/NavBar'
import Footer from './component/Footer'
import './App.css'
import Hero from './component/Hero'
import UserHero from './layout/Me'
import Skills from './component/Skills'
import Experiences from './component/Experiences'
import WhatsappButton from './component/ui/WhatsappButton'
function App() {
  return (
    <div className="container">
      <Navbar />
      <UserHero />
      <Hero />
      <Skills />
      <Experiences />
      <WhatsappButton />
      <Footer />
    </div>
  )
}

export default App
