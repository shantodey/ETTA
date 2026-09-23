import React, { useEffect, useRef, useState } from 'react'
import { Car, Disc, DollarSign } from 'lucide-react'
import freedomImg from '../assets/Garibook_freedom.webp'

const features = [
  {
    id: 1,
    title: 'Choose the Car',
    desc: 'Pick what suits your comfort.',
    icon: Car,
    bgColor: 'bg-[#0052fe]',
  },
  {
    id: 2,
    title: 'Choose the Driver',
    desc: 'Based on ratings and reviews.',
    icon: Disc,
    bgColor: 'bg-[#facc15]',
    iconColor: 'text-neutral-950',
  },
  {
    id: 3,
    title: 'Choose the Fare',
    desc: 'Select the bid that fits your budget.',
    icon: DollarSign,
    bgColor: 'bg-[#16a34a]',
  },
]

export default function FreedomSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-16 sm:py-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 sm:mb-12">Freedom in Every Journey</h2>

        {/* Hero Image Container */}
        <div className="w-full overflow-hidden rounded-3xl shadow-2xl mb-12 sm:mb-16">
          <img src={freedomImg} alt="Freedom in Every Journey" className="w-full h-auto max-h-[500px] object-cover object-center" />
        </div>

        {/* 3 Bottom Feature Highlights with gradual pop up and fade in */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            // Delay staggered by index
            const delayClasses = ['delay-150', 'delay-300', 'delay-500',][idx]

            return (
              <div key={feature.id} className={`flex flex-col items-start gap-4 transition-all duration-700 ease-out transform 
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'} ${delayClasses}`}>

                <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center shadow-lg`}>
                  <Icon className={`w-6 h-6 ${feature.iconColor || 'text-white'}`} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5"> {feature.title}</h3>
                  <p className="text-sm font-normal text-neutral-400 leading-relaxed max-w-xs"> {feature.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
