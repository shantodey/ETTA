

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BookingHeroSection from './components/BookingHeroSection'
import ServicesSection from './components/ServicesSection'
import FreedomSection from './components/FreedomSection'
import MoreThanMilesSection from './components/MoreThanMilesSection'
import AppShowcaseSection from './components/AppShowcaseSection'
import SmartDriverSection from './components/SmartDriverSection'
import FeaturedNewsSection from './components/FeaturedNewsSection'
import PassengersSpeakSection from './components/PassengersSpeakSection'
import BeyondDestinationsSection from './components/BeyondDestinationsSection'
import DownloadAppSection from './components/DownloadAppSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <HeroSection />
        <BookingHeroSection />
        <ServicesSection />
        <FreedomSection />
        <MoreThanMilesSection />
        <AppShowcaseSection />
        <SmartDriverSection />
        <FeaturedNewsSection />
        <PassengersSpeakSection />
        <BeyondDestinationsSection />
        <DownloadAppSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

