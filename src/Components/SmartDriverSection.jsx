import { ArrowRight } from 'lucide-react'
import { Card } from './ui/card'
import driverImg from '../assets/No Commission_app.png'

export default function SmartDriverSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-sans">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-8">
        Be a Smart Driver
      </h2>

      {/* Main Banner Card */}
      <Card className="relative overflow-hidden rounded-3xl border-0 p-0 shadow-lg bg-[#efc30c] min-h-[360px] sm:min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center h-full">
          {/* Left Text & CTA */}
          <div className="md:col-span-7 p-8 sm:p-12 lg:p-16 z-10 flex flex-col items-start justify-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0052fe] tracking-tight leading-[1.1] mb-8">
              0% Commission<br />
              100% Freedom
            </h3>

            <button
              type="button"
              className="inline-flex items-center gap-3 bg-[#0052fe] hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Download Smart Driver App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image */}
          <div className="md:col-span-5 h-full flex items-end justify-center md:justify-end relative">
            <img
              src={driverImg}
              alt="Smart Driver"
              className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-none h-auto object-contain object-bottom -mb-1"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
