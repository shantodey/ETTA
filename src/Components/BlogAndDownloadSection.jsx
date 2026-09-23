import { ArrowRight } from 'lucide-react'
import { Card } from './ui/card'
import bikeImg from '../assets/bike.webp'
import selectImg from '../assets/Select.webp'
import nogawImg from '../assets/nogaw.webp'
import phoneHandImg from '../assets/phone_hand.png'

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

export default function BlogAndDownloadSection() {
  return (
    <>
      {/* ── Beyond Destinations Blog Section ── */}
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
              {/* Image */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Date */}
              <p className="text-xs text-neutral-400 font-medium mb-2">{blog.date}</p>
              {/* Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 leading-snug mb-2 group-hover:text-[#0052fe] transition-colors">
                {blog.title}
              </h3>
              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                {blog.excerpt}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Download Garibook Mobile App CTA ── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0052fe] rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[380px] flex items-center">
            {/* Left Content */}
            <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 max-w-md lg:max-w-lg">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Download<br />Garibook Mobile App
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
                Download our Customer, Smart Driver and Enterprise App
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-3 bg-[#efc30c] hover:bg-[#d9ae0b] text-neutral-900 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] cursor-pointer text-base"
              >
                <span>Download App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Phone Hand Image */}
            <div className="absolute right-0 bottom-0 h-full flex items-end justify-end pointer-events-none">
              <img
                src={phoneHandImg}
                alt="Garibook Mobile App"
                className="h-[110%] max-h-[480px] w-auto object-contain object-bottom select-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
