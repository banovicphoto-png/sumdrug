"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Youtube, Music } from "lucide-react"
import { FloatingLeaves } from "./floating-leaves"
import { Sparkles } from "./sparkles"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 via-background to-yellow-50/30">
      {/* Background Decorations */}
      <FloatingLeaves />
      <Sparkles />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      
      {/* Animated Background Trees */}
      <div className="absolute bottom-0 left-0 w-32 h-48 md:w-48 md:h-64">
        <div className="absolute bottom-0 w-full h-full bg-primary/20 rounded-t-full animate-sway" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-48 md:w-48 md:h-64">
        <div className="absolute bottom-0 w-full h-full bg-primary/20 rounded-t-full animate-sway-reverse" />
      </div>

      {/* Floating music notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl md:text-3xl animate-float-up opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            {i % 2 === 0 ? "♪" : "♫"}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        {/* Animated Logo */}
        <div className="relative inline-block mb-8 group">
          <div className="animate-float">
            <Image
              src="/images/sumskidrugarilogo.png"
              alt="Sumski Drugari"
              width={320}
              height={320}
              className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              priority
            />
          </div>
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
          
          {/* Orbiting stars */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute -top-4 left-1/2 text-yellow-400 text-2xl">★</div>
          </div>
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div className="absolute top-1/2 -right-4 text-yellow-400 text-xl">★</div>
          </div>
        </div>

        {/* Title with gradient */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          Dobrodošli u{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-yellow-500 animate-gradient relative">
            šumu
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 10C50 2 150 2 198 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="text-accent"
              />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          Vesele dječije pjesmice sa šumskim prijateljima! Zapjevaj s nama i upoznaj 
          Medu, Zeku, Lisicu i Ptičicu u šumskim avanturama punim smijeha i učenja.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Youtube className="w-6 h-6" />
              <span>Gledaj na YouTube</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg font-bold transition-all duration-300 hover:scale-105 bg-transparent relative overflow-hidden group"
          >
            <a href="#pjesmice" className="flex items-center gap-2">
              <Music className="w-6 h-6" />
              <span>Nase pjesmice</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-700" />
            </a>
          </Button>
        </div>

        {/* Bouncing characters */}
        <div className="mt-12 flex items-center justify-center gap-6 text-4xl">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>🐻</span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>🐰</span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>🦊</span>
          <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>🐦</span>
        </div>
      </div>

      {/* Bottom Grass Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/30 to-transparent" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes sway-reverse {
          0%, 100% { transform: rotate(3deg); }
          50% { transform: rotate(-3deg); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(0, 20px) scale(1); }
          75% { transform: translate(-20px, -10px) scale(0.9); }
        }
        @keyframes float-up {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .animate-sway-reverse {
          animation: sway-reverse 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float-up {
          animation: float-up 10s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 8s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
