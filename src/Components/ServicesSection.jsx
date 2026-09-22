import React, { useState } from 'react'
import intercityImg from '../assets/Car rental.svg'
import rideshareImg from '../assets/Rideshare.svg'
import airportImg from '../assets/Airport rental.svg'
import hourlyImg from '../assets/Hourly rental.svg'

const services = [
  {
    id: 1,
    title: 'Intercity Car Rental',
    desc: 'Travel between cities with comfort and confidence.',
    image: intercityImg,
  },
  {
    id: 2,
    title: 'Ride share',
    desc: 'Go anywhere in the city, quickly and easily.',
    image: rideshareImg,
  },
  {
    id: 3,
    title: 'Airport Rental',
    desc: "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
    image: airportImg,
  },
  {
    id: 4,
    title: 'Hourly Rental',
    desc: 'Rent a car by the hour, tailored to your needs.',
    image: hourlyImg,
  },
]

const tabs = ['Rides', 'Garibook Business', 'Garibook Club', 'VMS']

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('Rides')
  const [activeCard, setActiveCard] = useState(1) // Default active is first card

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 font-sans">
      {/* Category Heading */}
      <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-6">
        Our Services
      </h3>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#0052fe] text-white shadow-md'
                  : 'bg-[#eceef2] text-neutral-800 hover:bg-[#e2e5eb]'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* Hero Title */}
      <div className="mb-10">
        <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.15]">
          Every Ride<br />One Platform
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const isActive = activeCard === service.id

          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveCard(service.id)}
              className="relative rounded-3xl min-h-[350px] p-7 flex flex-col justify-between overflow-hidden cursor-pointer bg-[#f8faff] select-none"
            >
              {/* Left-to-Right Animated Blue Fill Background */}
              <div
                className={`absolute inset-0 bg-[#0052fe] z-0 transition-transform duration-500 ease-out origin-left pointer-events-none ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`}
              />

              {/* Top / Badge Area */}
              <div className="relative z-10">
                {/* White Cutout Badge (Sliding in from left when active) */}
                <div
                  className={`-ml-7 -mt-3 inline-block transition-transform duration-500 ease-out origin-left ${
                    isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-r-3xl py-3 px-6 shadow-sm flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-20 h-14 object-contain"
                    />
                  </div>
                </div>

                {/* Default Neutral Car Image (when inactive) */}
                <div
                  className={`absolute top-2 left-0 transition-opacity duration-300 ${
                    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-14 object-contain"
                  />
                </div>
              </div>

              {/* Text Area */}
              <div className="relative z-10 mt-auto pt-8 flex flex-col gap-2.5">
                <h4
                  className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {service.title}
                </h4>
                <p
                  className={`text-xs sm:text-sm font-normal leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-white/90' : 'text-neutral-500'
                  }`}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
