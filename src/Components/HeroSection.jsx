import { useState, useEffect, useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import gsap from 'gsap'

const phrases = [
  'Assurance of Effortless Travel...',
  'Your Journey Starts Here...',
  'Luxury Trips with Comfort...',
]

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const fullText = phrases[phraseIndex]
    const typingSpeed = isDeleting ? 30 : 65

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, phraseIndex])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pb-24">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 min-h-[140px] sm:min-h-[160px]">
        <div className="max-w-xl hero-anim min-h-[100px] flex items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            <span className="text-neutral-900">
              {currentText}
              <span className="inline-block w-1.5 h-9 sm:h-12 bg-[#0d59fe] ml-1.5 align-middle animate-pulse" />
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-start gap-5 max-w-md hero-anim">
          <p className="text-base sm:text-lg text-neutral-500 font-normal leading-relaxed">
            Choose your city, pick your car and enjoy the journey with Garibook's best drivers.
          </p>

          <button
            type="button"
            className="inline-flex items-center gap-2 bg-[#ffcc00] hover:bg-[#e6b800] text-neutral-950 font-semibold px-6 py-3.5 rounded-xl shadow-xs transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Download App</span>
            <HiArrowRight className="w-5 h-5 text-neutral-900" />
          </button>
        </div>
      </div>
    </section>
  )
}