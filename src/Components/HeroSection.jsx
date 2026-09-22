import { useState, useEffect } from 'react'
import { HiArrowRight } from 'react-icons/hi'

const words = ['Assurance of Effortless Travel...', 'Your Journey Starts Here ...', 'Luxury Trips with Comfort...']

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            <span className="text-neutral-900">
              {words[index]}
              <span className="inline-block w-1.5 h-10 sm:h-12 bg-[#0d59fe] ml-1.5 align-middle animate-pulse" />
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-start gap-5 max-w-md">
          <p className="text-base sm:text-lg text-neutral-500 font-normal leading-relaxed"> Choose your city, pick your car and enjoy the journey with Garibook's best drivers.</p>

          <button type="button"
            className="inline-flex items-center gap-2 bg-[#ffcc00] hover:bg-[#e6b800] text-neutral-950 font-semibold px-6 py-3.5 rounded-xl shadow-xs transition-colors duration-150"
          >
            <span>Download App</span>
            <HiArrowRight className="w-5 h-5 text-neutral-900" />
          </button>
        </div>
      </div>
    </section>
  )
}
