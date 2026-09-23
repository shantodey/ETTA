import { ArrowRight } from 'lucide-react'
import phoneHandImg from '../assets/phone_hand.png'

export default function DownloadAppSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/*
          overflow-visible on the container so the phone image
          can stick out above the blue card boundary.
        */}
        <div className="relative bg-[#0052fe] rounded-3xl min-h-[340px] sm:min-h-[380px] flex items-center overflow-visible">

          {/* Left Content */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 max-w-md lg:max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Download<br />Garibook Mobile App
            </h2>
            <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
              Download our Customer, Smart Driver and Enterprise App
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-3 bg-[#efc30c] hover:bg-[#d9ae0b] text-neutral-900 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] cursor-pointer text-base"
            >
              <span>Download App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/*
            Phone hand image: positioned absolute to the right.
            bottom-0 anchors the hand at the bottom of the card.
            The image is taller than the card so it naturally overflows
            the top — we keep overflow-visible on the parent so it shows.
          */}
          <div className="absolute right-4 sm:right-8 lg:right-16 bottom-0 pointer-events-none z-20">
            <img
              src={phoneHandImg}
              alt="Garibook App on phone"
              className="h-[420px] sm:h-[500px] lg:h-[560px] w-auto object-contain object-bottom select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
