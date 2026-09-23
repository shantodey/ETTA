
import { Card } from './ui/card'
import airportImg from '../assets/Airport.webp'
import familyTripImg from '../assets/Family trip.webp'
import tourImg from '../assets/Tour.webp'

const cards = [
  {
    id: 1,
    title: 'Airport Rentals',
    image: airportImg,
  },
  {
    id: 2,
    title: 'Family Trips',
    image: familyTripImg,
  },
  {
    id: 3,
    title: 'Long Tours',
    image: tourImg,
  },
]

export default function MoreThanMilesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-sans">
      <div className="mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          More Than Miles —<br />We Bring People Together
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((item) => (
          <Card key={item.id} className="group relative overflow-hidden rounded-3xl border-0 p-0 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer ring-0 aspect-4/3 sm:aspect-square">
            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />

            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-transparent pointer-events-none" />
            <div className="relative z-10 p-6 sm:p-7">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                {item.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
