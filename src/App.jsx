

import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import BookingHeroSection from './Components/BookingHeroSection'
import ServicesSection from './Components/ServicesSection'
import FreedomSection from './Components/FreedomSection'
import MoreThanMilesSection from './Components/MoreThanMilesSection'
import AppShowcaseSection from './Components/AppShowcaseSection'
import SmartDriverSection from './Components/SmartDriverSection'
import FeaturedNewsSection from './Components/FeaturedNewsSection'
import PassengersSpeakSection from './Components/PassengersSpeakSection'
import BeyondDestinationsSection from './Components/BeyondDestinationsSection'
import DownloadAppSection from './Components/DownloadAppSection'
import Footer from './Components/Footer'

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

