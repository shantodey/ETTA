import { ArrowRight } from 'lucide-react'
import { Card } from './ui/card'
import bikeImg from '../assets/bike.webp'
import selectImg from '../assets/Select.webp'
import nogawImg from '../assets/nogaw.webp'

const blogs = [
  {
    id: 1,
    date: 'September 15, 2026',
    title: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা',
    excerpt: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা',
    image: bikeImg,
  },
  {
    id: 2,
    date: 'September 20, 2026',
    title: 'সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
    excerpt: 'সিলেটের-দর্শনীয়-স্থান',
    image: selectImg,
  },
  {
    id: 3,
    date: 'September 20, 2026',
    title: 'নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
    excerpt: 'নওগাঁর দর্শনীয় স্থান সমু',
    image: nogawImg,
  },
]

export default function BeyondDestinationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-2">
            Beyond Destinations
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-xl">
            Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0052fe] hover:underline flex-shrink-0 mt-1 sm:mt-2"
        >
          Show All Blogs
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="group border-0 shadow-none bg-transparent p-0 rounded-none cursor-pointer"
          >
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-neutral-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-neutral-400 font-medium mb-2">{blog.date}</p>
            <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 leading-snug mb-2 group-hover:text-[#0052fe] transition-colors">
              {blog.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
              {blog.excerpt}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
