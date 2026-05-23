"use client"

import { Youtube, Bell } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingSubscribe() {
  const [isVisible, setIsVisible] = useState(false)
  const [isWiggling, setIsWiggling] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    const wiggleInterval = setInterval(() => {
      setIsWiggling(true)
      setTimeout(() => setIsWiggling(false), 1000)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearInterval(wiggleInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <a
        href="https://www.youtube.com/@sumskidrugari?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 group ${isWiggling ? "animate-wiggle" : "animate-float-button"}`}
      >
        <div className="relative">
          <Youtube className="w-6 h-6" />
          <Bell className="w-3 h-3 absolute -top-1 -right-1 animate-ring" />
        </div>
        <span className="font-bold text-sm uppercase tracking-wide">Subscribe</span>
        
        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-20" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
        </div>
      </a>

      <style jsx>{`
        @keyframes float-button {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          25% { 
            transform: translateY(-8px) rotate(2deg); 
          }
          75% { 
            transform: translateY(-4px) rotate(-2deg); 
          }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-15deg) scale(1.1); }
          20% { transform: rotate(15deg) scale(1.1); }
          30% { transform: rotate(-15deg) scale(1.1); }
          40% { transform: rotate(15deg) scale(1.1); }
          50% { transform: rotate(0deg) scale(1.1); }
        }
        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(15deg); }
          40% { transform: rotate(-15deg); }
          50% { transform: rotate(0deg); }
        }
        .animate-float-button {
          animation: float-button 3s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }
        .animate-ring {
          animation: ring 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
