import { ArrowRight } from 'lucide-react'
import { Card } from './ui/card'
import exploreImg from '../assets/Explore.jpg'
import freedomImg from '../assets/Freedom.jpg'

export default function AppShowcaseSection() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-xl">
            From Booking to Arrival It’s All in Your Hands
          </h2>

          <div>
            <button
              type="button"
              className="inline-flex items-center gap-2.5 bg-[#0052fe] hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Download App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2 Grid Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <Card className="lg:col-span-7 bg-[#1c4fd8] border-0 rounded-3xl overflow-hidden p-0 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] shadow-xl">
            <img  src={exploreImg}  alt="Explore Various Ride Services"  className="w-full h-full object-cover object-center"/>
          </Card>

          {/* Right Card: Freedom (span 5 or 4) */}
          <Card className="lg:col-span-5 bg-white text-neutral-900 border-0 rounded-3xl overflow-hidden p-0 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] shadow-xl">
            <img
              src={freedomImg}
              alt="Freedom"
              className="w-full h-full object-cover object-center"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
