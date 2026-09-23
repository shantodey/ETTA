
import {  Carousel,  CarouselContent,  CarouselItem,  CarouselPrevious,  CarouselNext,} from './ui/carousel'
import { Card } from './ui/card'
import { ArrowRight } from 'lucide-react'
// import freedomImg from '../assets/Freedom.png'
import chanderGariImg from '../assets/Tour.webp'
import meetingImg1 from '../assets/Airport.webp'
import meetingImg2 from '../assets/Family trip.webp'

const newsArticles = [
  {
    id: 1,
    date: 'December 04, 2024',
    title: "বাংলাদেশে প্রথমবার 'চান্দের গাড়ি' গাড়িযুক্ত অ্যাপে",
    desc: "বাংলাদেশে পর্যটকদের জন্য জনপ্রিয় যানবহন 'চান্দের গাড়ি' এবার যুক্ত হলো অনলাইন অ্যাপ ভিত্তিক প্ল্যাটফর্মে। গাড়িযুক্ত দেশের প্রথম অ্যাপ হিসাবে পর্যটকদের জন্য এই বিশেষ যানটি বুকিং সুবিধা নিয়ে এলো।",
    publisher: 'কালের কণ্ঠ',
    image: chanderGariImg,
  },
  {
    id: 2,
    date: 'January 29, 2025',
    title: 'গাড়িযুক্ত ও সুধীর চুক্তি - স্মার্ট চালক ও পরিবারের জন্য উন্নত স্বাস্থ্যসেবা',
    desc: "দেশের শীর্ষস্থানীয় অ্যাপভিত্তিক প্ল্যাটফর্ম গাড়িযুক্ত স্মার্ট চালক ও তাদের পরিবারের উন্নত স্বাস্থ্যসেবা নিশ্চিত করতে ডিজিটাল স্বাস্থ্যসেবা প্ল্যাটফর্ম 'সুধী'-এর সঙ্গে একটি গুরুত্বপূর্ণ চুক্তি স্বাক্ষর করেছে।",
    publisher: 'কালের কণ্ঠ',
    image: meetingImg1,
  },
  {
    id: 3,
    date: 'January 29, 2025',
    title: 'গাড়িচালক ও তাদের পরিবারের স্বাস্থ্যসেবায় গাড়িযুক্ত-সুধীর চুক্তি স্বাক্ষর',
    desc: "গাড়িযুক্ত দেশের শীর্ষস্থানীয় অ্যাপভিত্তিক প্ল্যাটফর্ম। সম্প্রতি তারা গ্রামীণ ডিজিটাল হেলথকেয়ার সলিউশনসের ডিজিটাল স্বাস্থ্যসেবা প্ল্যাটফর্ম 'সুধী'-এর সঙ্গে একটি গুরুত্বপূর্ণ চুক্তি স্বাক্ষর করেছে। যেখানে তারা স্মার্ট চালক ও তাদের পরিবারের জন্য উন্নত...",
    publisher: 'ইত্তেফাক',
    image: meetingImg2,
  },
  {
    id: 4,
    date: 'February 12, 2025',
    title: 'নিরাপদ ও নির্ভরযোগ্য যাতায়াতে গাড়িযুক্ত নিয়ে এলো প্রিমিয়াম সেবাসমূহ',
    desc: 'যাত্রীদের সর্বোচ্চ আরাম ও নির্ভরযোগ্য ভ্রমণ নিশ্চিতে বিশেষ ট্রাভেল প্যাকেজ এবং প্রিমিয়াম গাড়ির বহর চালু করেছে দেশের শীর্ষস্থানীয় ডিজিটাল রাইড প্ল্যাটফর্ম গাড়িযুক্ত।',
    publisher: 'প্রথম আলো',
    // image: freedomImg,
  },
]

export default function FeaturedNewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-sans">
      <Carousel opts={{ align: 'start',  loop: true,}}className="w-full relative">
        <div className="flex items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            We Featured by Top news<br />Platforms
          </h2>

          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-x-0 translate-y-0 w-11 h-11 border border-neutral-200 hover:bg-neutral-100 text-neutral-800 rounded-full flex items-center justify-center shadow-xs transition-colors" />
            <CarouselNext className="static translate-x-0 translate-y-0 w-11 h-11 border border-neutral-200 hover:bg-neutral-100 text-neutral-800 rounded-full flex items-center justify-center shadow-xs transition-colors" />
          </div>
        </div>


        <CarouselContent className="-ml-6">
          {newsArticles.map((article) => (
            <CarouselItem key={article.id} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className="flex flex-col h-full bg-white border-0 shadow-none p-0 group cursor-pointer">

                <div className="w-full h-56 sm:h-60 rounded-3xl overflow-hidden mb-5 bg-neutral-100">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>

                <p className="text-xs font-medium text-neutral-400 mb-2"> {article.date} </p>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight leading-snug line-clamp-2 mb-3 group-hover:text-[#0052fe] transition-colors">  {article.title} </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed line-clamp-3 mb-6">  {article.desc}</p>

                {/* Bottom Row: Publisher & Read Article */}
                <div className="mt-auto flex items-center justify-between pt-2 border-t border-neutral-100">
                  <span className="text-sm font-bold text-neutral-800">  {article.publisher}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052fe] hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
