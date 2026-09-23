import React, { useState } from 'react'
import { Car, MapPin, Calendar, ArrowRight, ChevronDown } from 'lucide-react'
import movingCarGif from '../assets/Moving car.gif'
import buildingImg from '../assets/Building.png'

export default function BookingHeroSection() {
  const [activeTab, setActiveTab] = useState('car') // 'car' | 'airport'
  const [tripType, setTripType] = useState('oneway') // 'oneway' | 'roundway' | 'hourly'
  const [carType, setCarType] = useState('')
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [dateTime, setDateTime] = useState('')

  return (
    <div className="w-full relative overflow-hidden bg-[#0052fe] text-white pt-10 pb-0">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Card */}
        <div className="relative mb-16 sm:mb-20">
          {/* Top Tabs */}
          <div className="inline-flex rounded-t-2xl overflow-hidden shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('car')}
              className={`px-7 py-3 text-sm font-semibold transition-colors ${activeTab === 'car'
                  ? 'bg-[#11161d] text-white'
                  : 'bg-white text-neutral-800 hover:bg-neutral-50'
                }`}
            >
              Car Rental
            </button>
            <button type="button" onClick={() => setActiveTab('airport')}
              className={`px-7 py-3 text-sm font-semibold transition-colors ${activeTab === 'airport' ? 'bg-[#11161d] text-white' : 'bg-white text-neutral-800 hover:bg-neutral-50'}`}> Airport Rental
            </button>
          </div>

          {/* White Card Container */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-xl p-6 sm:p-8 text-neutral-900">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-neutral-100">
              {/* Choose a Car */}
              <div className="flex flex-col gap-1.5 md:border-r md:border-neutral-200 md:pr-4">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-neutral-900" />
                  <span>Choose a Car <span className="text-red-500">*</span></span>
                </label>
                <div className="relative">
                  <select
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="w-full bg-transparent text-sm text-neutral-700 py-1.5 pr-8 focus:outline-none appearance-none cursor-pointer placeholder:text-neutral-400"
                  >
                    <option value="" disabled>Select Car Type</option>
                    <option value="sedan">Sedan (4 Seater)</option>
                    <option value="suv">SUV / Noah (7 Seater)</option>
                    <option value="hiace">Hiace (11 Seater)</option>
                    <option value="luxury">Luxury Car</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Pickup Location */}
              <div className="flex flex-col gap-1.5 md:border-r md:border-neutral-200 md:pr-4">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span>Pickup Location <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Pickup Location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-transparent text-sm text-neutral-700 py-1.5 focus:outline-none placeholder:text-neutral-400"
                />
              </div>

              {/* Drop-off Location */}
              <div className="flex flex-col gap-1.5 md:border-r md:border-neutral-200 md:pr-4">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0052fe]" />
                  <span>Drop-off Location <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Drop-off Location"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-transparent text-sm text-neutral-700 py-1.5 focus:outline-none placeholder:text-neutral-400"
                />
              </div>

              {/* Pickup Date & Time */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-neutral-900" />
                  <span>Pickup Date & Time <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="w-full bg-transparent text-sm text-neutral-700 py-1.5 focus:outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>

            {/* Bottom Row: Radio Options & Continue Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5">
              {/* Radio Group */}
              <div className="flex items-center gap-6 text-sm font-semibold">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${tripType === 'oneway' ? 'border-[#0052fe]' : 'border-neutral-300'
                    }`}>
                    {tripType === 'oneway' && <span className="w-2 h-2 rounded-full bg-[#0052fe]" />}
                  </span>
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === 'oneway'}
                    onChange={() => setTripType('oneway')}
                    className="sr-only"
                  />
                  <span className={tripType === 'oneway' ? 'text-neutral-900' : 'text-neutral-700'}>One Way</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${tripType === 'roundway' ? 'border-[#0052fe]' : 'border-neutral-300'
                    }`}>
                    {tripType === 'roundway' && <span className="w-2 h-2 rounded-full bg-[#0052fe]" />}
                  </span>
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === 'roundway'}
                    onChange={() => setTripType('roundway')}
                    className="sr-only"
                  />
                  <span className={tripType === 'roundway' ? 'text-neutral-900' : 'text-neutral-700'}>Round Way</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${tripType === 'hourly' ? 'border-[#0052fe]' : 'border-neutral-300'
                    }`}>
                    {tripType === 'hourly' && <span className="w-2 h-2 rounded-full bg-[#0052fe]" />}
                  </span>
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === 'hourly'}
                    onChange={() => setTripType('hourly')}
                    className="sr-only"
                  />
                  <span className={tripType === 'hourly' ? 'text-neutral-900' : 'text-neutral-700'}>Hourly</span>
                </label>
              </div>

              {/* Continue Button */}
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 bg-[#0052fe] hover:bg-[#0042cc] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all active:scale-[0.98]"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Heading & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-28 sm:pb-32">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              From Everyday Rides to Meaningful Journeys
            </h2>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">300,000+</div>
              <div className="text-xs sm:text-sm font-medium text-white/90 mt-1">Trip Requests</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">850,000+</div>
              <div className="text-xs sm:text-sm font-medium text-white/90 mt-1">Total Customers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">35,000+</div>
              <div className="text-xs sm:text-sm font-medium text-white/90 mt-1">Active Drivers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#facc15] tracking-tight">64</div>
              <div className="text-xs sm:text-sm font-medium text-white/90 mt-1">District Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Buildings Track */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 h-28 sm:h-36">
        <div className="flex w-max animate-building-loop">
          <img src={buildingImg} alt="City Buildings" className="h-28 sm:h-36 object-contain select-none" />
          <img src={buildingImg} alt="City Buildings" className="h-28 sm:h-36 object-contain select-none" />
          <img src={buildingImg} alt="City Buildings" className="h-28 sm:h-36 object-contain select-none" />
          <img src={buildingImg} alt="City Buildings" className="h-28 sm:h-36 object-contain select-none" />
        </div>
      </div>

      {/* Static GIF Car over looping background */}
      <div className="absolute bottom-0 left-4 sm:left-10 z-10 pointer-events-none">
        <img
          src={movingCarGif}
          alt="Car"
          className="w-36 sm:w-52 h-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  )
}
