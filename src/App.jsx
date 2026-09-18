import { Navbar } from './component/NavBar'
import Footer from './component/Footer'
import './App.css'
import Hero from './component/Hero'
import UserHero from './layout/Me'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <UserHero />
      <Footer />
    </div>
  )
}

export default App
