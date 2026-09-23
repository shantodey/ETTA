import { useState, useEffect, useRef } from 'react'
import { Car, MapPin, Calendar, ArrowRight, ChevronDown, Plane } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import movingCarGif from '../assets/Moving car.gif'
import buildingImg from '../assets/Building.png'

gsap.registerPlugin(ScrollTrigger)

export default function BookingHeroSection() {
  const [activeTab, setActiveTab] = useState('car') // 'car' | 'airport'
  const [tripType, setTripType] = useState('oneway') // 'oneway' | 'roundway' | 'hourly'
  const [airportTripType, setAirportTripType] = useState('from_airport') // 'from_airport' | 'from_home'
  
  const [carType, setCarType] = useState('')
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [dateTime, setDateTime] = useState('')

  const sectionRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.from('.stat-box', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="w-full relative overflow-visible bg-[#0052fe] text-white pt-24 sm:pt-32 pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Overlapping Card Container: Attached 50% on white section / 50% on blue section using transform */}
        <div ref={cardRef} className="relative -translate-y-1/2 z-20 mb-[-6rem] sm:mb-[-7rem]">
          {/* Top Tabs */}
          <div className="inline-flex rounded-t-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveTab('car')}
              className={`px-6 sm:px-8 py-3 text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 'car'
                  ? 'bg-[#12161f] text-white'
                  : 'bg-white text-neutral-800 hover:bg-neutral-100'
              }`}
            >
              Car Rental
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('airport')}
              className={`px-6 sm:px-8 py-3 text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 'airport'
                  ? 'bg-[#12161f] text-white'
                  : 'bg-white text-neutral-800 hover:bg-neutral-100'
              }`}
            >
              Airport Rental
            </button>
          </div>

          {/* White Main Box */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-xl p-5 sm:p-7 text-neutral-900">
            {/* Input Form Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-neutral-100">
              
              {/* Choose a Car */}
              <div className="flex flex-col gap-1 lg:border-r lg:border-neutral-200 lg:pr-3">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-neutral-900" />
                  <span>Choose a Car <span className="text-red-500">*</span></span>
                </label>
                <div className="relative">
                  <select
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="w-full bg-transparent text-sm text-neutral-700 py-1.5 pr-8 focus:outline-none appearance-none cursor-pointer font-medium"
                  >
                    <option value="" disabled>Select Car Type</option>
                    <option value="sedan">Sedan (4 Seater)</option>
                    <option value="suv">SUV / Noah (7 Seater)</option>
                    <option value="hiace">Hiace (11 Seater)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Dynamic Field 2: Pickup / Airport */}
              <div className="flex flex-col gap-1 lg:border-r lg:border-neutral-200 lg:pr-3">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  {activeTab === 'airport' ? (
                    <Plane className="w-4 h-4 text-amber-500" />
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block ring-2 ring-amber-200" />
                  )}
                  <span>{activeTab === 'airport' ? 'Pickup Airport' : 'Pickup Location'} <span className="text-red-500">*</span></span>
                </label>
                {activeTab === 'airport' ? (
                  <div className="relative">
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full bg-transparent text-sm text-neutral-700 py-1.5 pr-8 focus:outline-none appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled>Select Airport</option>
                      <option value="dac">Hazrat Shahjalal Intl Airport (DAC)</option>
                      <option value="cgp">Shah Amanat Intl Airport (CGP)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder="Enter Pickup Location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-transparent text-sm text-neutral-700 py-1.5 focus:outline-none placeholder:text-neutral-400 font-medium"
                  />
                )}
              </div>

              {/* Drop-off Location */}
              <div className="flex flex-col gap-1 lg:border-r lg:border-neutral-200 lg:pr-3">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0052fe]" />
                  <span>Drop-off Location <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Drop-off Location"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-transparent text-sm text-neutral-700 py-1.5 focus:outline-none placeholder:text-neutral-400 font-medium"
                />
              </div>

              {/* Pickup Date & Time */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-neutral-900" />
                  <span>Pickup Date & Time <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY 00:00 PM"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  onFocus={(e) => (e.target.type = 'datetime-local')}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = 'text'
                  }}
                  className="w-full bg-transparent text-sm text-neutral-700 py-1.5 focus:outline-none placeholder:text-neutral-400 font-medium"
                />
              </div>
            </div>

            {/* Bottom Row Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5">
              
              {/* Radio Group based on active tab */}
              {activeTab === 'car' ? (
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm font-semibold">
                  {[
                    { id: 'oneway', label: 'One Way' },
                    { id: 'roundway', label: 'Round Way' },
                    { id: 'hourly', label: 'Hourly' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      onClick={() => setTripType(item.id)}
                      className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full transition-colors ${
                        tripType === item.id ? 'bg-blue-50 text-[#0052fe]' : 'text-neutral-700'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${tripType === item.id ? 'border-[#0052fe]' : 'border-neutral-300'}`}>
                        {tripType === item.id && <span className="w-2 h-2 rounded-full bg-[#0052fe]" />}
                      </span>
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 sm:gap-4 text-sm font-semibold">
                  {[
                    { id: 'from_airport', label: 'From Airport' },
                    { id: 'from_home', label: 'From Home' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      onClick={() => setAirportTripType(item.id)}
                      className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full transition-colors ${
                        airportTripType === item.id ? 'bg-blue-50 text-[#0052fe]' : 'text-neutral-700'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${airportTripType === item.id ? 'border-[#0052fe]' : 'border-neutral-300'}`}>
                        {airportTripType === item.id && <span className="w-2 h-2 rounded-full bg-[#0052fe]" />}
                      </span>
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0052fe] hover:bg-[#0042cc] text-white font-bold px-8 py-3 rounded-lg shadow-md transition-colors cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Heading & Stats Grid */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              From Everyday Rides to Meaningful Journeys
            </h2>
          </div>

          <div className="stats-grid lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
            <div className="stat-box">
              <div className="text-4xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">300,000+</div>
              <div className="text-2xl sm:text-sm font-medium text-white/90 mt-1">Trip Requests</div>
            </div>
            <div className="stat-box">
              <div className="text-4xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">850,000+</div>
              <div className="text-2xl sm:text-sm font-medium text-white/90 mt-1">Total Customers</div>
            </div>
            <div className="stat-box">
              <div className="text-4xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">35,000+</div>
              <div className="text-2xl sm:text-sm font-medium text-white/90 mt-1">Active Drivers</div>
            </div>
            <div className="stat-box">
              <div className="text-4xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">64</div>
              <div className="text-2xl sm:text-sm font-medium text-white/90 mt-1">District Covered</div>
            </div>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-28 sm:pb-32 pt-10 sm:pt-16">
        </div>
      </div>

      {/* Buildings & Car Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 h-28 sm:h-36">
        <div className="flex w-max animate-building-loop">
          <img src={buildingImg} alt="City Buildings" className="h-28 sm:h-36 object-contain" />
          <img src={buildingImg} alt="City Buildings" className="h-28 sm:h-36 object-contain" />
          <img src={buildingImg} alt="City Buildings" className="h-28 sm:h-36 object-contain" />
        </div>
      </div>

      <div className="absolute bottom-0 left-4 sm:left-10 z-10 pointer-events-none">
        <img src={movingCarGif} alt="Car" className="w-36 sm:w-52 h-auto object-contain" />
      </div>
    </div>
  )
}