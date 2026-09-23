

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BookingHeroSection from './components/BookingHeroSection'
import ServicesSection from './components/ServicesSection'
import FreedomSection from './components/FreedomSection'
import MoreThanMilesSection from './components/MoreThanMilesSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <BookingHeroSection />
        <ServicesSection />
        <FreedomSection />
        <MoreThanMilesSection />
      </main>
    </div>
  )
}

export default App

