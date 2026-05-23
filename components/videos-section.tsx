"use client"

import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Video {
  title: string
  thumbnail: string
  url: string
}

const videos: Video[] = [
  {
    title: "Medo Buć",
    thumbnail: "/images/medo-buc.jpg",
    url: "https://www.youtube.com/watch?v=VQwEyqkH-0M",
  },
  {
    title: "Medo Vozi Traktor",
    thumbnail: "/images/medo-traktor.jpg",
    url: "https://www.youtube.com/watch?v=svPqV5Mx5Lk",
  },
  {
    title: "Zeko Radi u Pekari",
    thumbnail: "/images/zeko-pekara.jpg",
    url: "https://www.youtube.com/watch?v=KCZWSvwYyb4",
  },
  {
    title: "Zeko Svemirac",
    thumbnail: "/images/zeko-svemirac.jpg",
    url: "https://www.youtube.com/watch?v=tW2NvMJpnYQ",
  },
  {
    title: "Medo Rambo Vozi Lambo",
    thumbnail: "/images/medo-lambo.jpg",
    url: "https://www.youtube.com/watch?v=58nxxR-MbJk",
  },
  {
    title: "Medo Pravi Kućicu",
    thumbnail: "/images/medo-kucica.jpg",
    url: "https://www.youtube.com/watch?v=3_NWkttUTlg",
  },
]

export function VideosSection() {
  return (
    <section id="pjesmice" className="py-20 px-4 bg-gradient-to-b from-background to-green-50/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-green-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4 animate-bounce-slow">
            <Play className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold">YouTube</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nase Pjesmice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pjevaj s nama! Svaka pjesmica je avantura puna ucenja i smijeha.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center shadow-xl transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* YouTube Badge */}
                <div className="absolute bottom-2 right-2 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full flex items-center gap-1 shadow-lg">
                  <Play className="w-3 h-3" fill="white" />
                  YouTube
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              {/* Video Info */}
              <div className="p-4 bg-card relative overflow-hidden">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">Klikni za gledanje</p>
                
                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <a
              href="https://www.youtube.com/@sumskidrugari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Gledaj na YouTube
                <ExternalLink className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
