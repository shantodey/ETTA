import React, { useState, useRef } from 'react'
import {
  Dialog,
  DialogContent,
} from './ui/dialog'
import { Card } from './ui/card'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react'
import airport from '../assets/Airport.webp'
import familyTrip from '../assets/Family trip.webp'
import tour from '../assets/Tour.webp'

const testimonials = [
  {
    id: 1,
    name: 'Atif Haider',
    role: 'Banker',
    thumbnail: airport,
    // Replace with real YouTube embed IDs
    videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: 2,
    name: 'Mohammad Habibur Rahman',
    role: 'Banker',
    thumbnail: familyTrip,
    videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: 3,
    name: 'Sadia Afrin',
    role: 'Service Holder',
    thumbnail: tour,
    videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
]

export default function PassengersSpeakSection() {
  const [activeVideo, setActiveVideo] = useState(null)
  const scrollRef = useRef(null)

  const scrollBy = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-16 sm:py-20 font-sans" style={{ backgroundColor: '#f1f6ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-4">
              Our Passengers Speak For Us
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
              Our journey was seamless and enjoyable from start to finish. The booking
              process was straightforward, and the staff were incredibly attentive, ensuring we
              felt comfortable throughout the trip.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 flex-shrink-0 mt-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 shadow-sm transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 shadow-sm transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[340px]"
            >
              <Card className="border-0 shadow-none bg-transparent p-0 rounded-none">
                {/* Video Thumbnail with Play button */}
                <div
                  className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group mb-4"
                  onClick={() => setActiveVideo(item)}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Garibook logo badge */}
                  <div className="absolute top-3 right-3 bg-white/90 rounded-md px-2 py-1 text-[10px] font-semibold text-neutral-700">
                    garibook
                  </div>
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  {/* Watermark overlay text */}
                  <div className="absolute bottom-3 left-3 pointer-events-none">
                    <p className="text-white font-semibold text-xs leading-snug drop-shadow-md">
                      Our<br />
                      passengers<br />
                      <span className="text-[#0052fe] text-xl font-black leading-none">speak</span><br />
                      for us
                    </p>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="px-1">
                  <p className="text-base font-bold text-neutral-900">{item.name}</p>
                  <p className="text-sm text-neutral-400 font-normal">{item.role}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Shadcn Dialog Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-2xl w-full p-0 overflow-hidden rounded-2xl border-0 bg-neutral-900 shadow-2xl">
          {/* Sticky header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0052fe] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-black">G</span>
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900 leading-none">Garibook | Our passengers speak for us</p>
                <p className="text-xs text-neutral-400">Garibook</p>
              </div>
            </div>
          </div>
          {/* Iframe Player */}
          {activeVideo && (
            <div className="aspect-video w-full bg-black">
              <iframe
                src={activeVideo.videoSrc}
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                className="w-full h-full"
                title={activeVideo.name}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
