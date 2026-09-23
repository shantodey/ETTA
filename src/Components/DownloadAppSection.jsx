import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import phoneHandImg from '../assets/phone_hand.png'

gsap.registerPlugin(ScrollTrigger)

export default function DownloadAppSection() {
  const containerRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(phoneRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 120,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      })

      gsap.from('.download-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0052fe] rounded-3xl min-h-[340px] sm:min-h-[380px] flex items-center overflow-visible shadow-xl">
          {/* Left Content */}
          <div className="download-content relative z-10 px-8 sm:px-12 lg:px-16 py-12 max-w-md lg:max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Download<br />Garibook Mobile App
            </h2>
            <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
              Download our Customer, Smart Driver and Enterprise App
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-3 bg-[#efc30c] hover:bg-[#d9ae0b] text-neutral-900 font-bold px-8 py-4 rounded-2xl shadow-lg transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base"
            >
              <span>Download App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Phone Hand Image */}
          <div ref={phoneRef} className="absolute right-4 sm:right-8 lg:right-16 bottom-0 pointer-events-none z-20">
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
