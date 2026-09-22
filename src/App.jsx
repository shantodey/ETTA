

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BookingHeroSection from './components/BookingHeroSection'
import ServicesSection from './components/ServicesSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <BookingHeroSection />
        <ServicesSection />
      </main>
    </div>
  )
}

export default App

