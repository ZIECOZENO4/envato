"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const brandLogos = [
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg", // Add this file to public/logos/
    width: 180,
    height: 60,
  },
  {
    name: "Adobe",
    logo: "/logos/adobe.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Google",
    logo: "/logos/google.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Netflix",
    logo: "/logos/netflix.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Nike",
    logo: "/logos/nike.svg",
    width: 180,
    height: 60,
  },
  // Duplicate logos for seamless infinite scroll
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Adobe",
    logo: "/logos/adobe.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Google",
    logo: "/logos/google.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Netflix",
    logo: "/logos/netflix.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Nike",
    logo: "/logos/nike.svg",
    width: 180,
    height: 60,
  },
]

export default function TrustedBrands() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const primaryRef = useRef<HTMLDivElement>(null)
  const secondaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !primaryRef.current || !secondaryRef.current) return

    const scrollSpeed = 1 // pixels per frame
    let animationId: number
    let paused = false
    let position = 0

    const animate = () => {
      if (paused) {
        animationId = requestAnimationFrame(animate)
        return
      }

      if (primaryRef.current && secondaryRef.current) {
        position -= scrollSpeed
        
        // Reset position when scrolled past the width
        if (position <= -primaryRef.current.scrollWidth) {
          position = 0
        }

        primaryRef.current.style.transform = `translateX(${position}px)`
        secondaryRef.current.style.transform = `translateX(${position + primaryRef.current.scrollWidth}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    animationId = requestAnimationFrame(animate)

    // Pause animation on hover
    const handleMouseEnter = () => {
      paused = true
    }

    const handleMouseLeave = () => {
      paused = false
    }

    if (scrollerRef.current) {
      scrollerRef.current.addEventListener("mouseenter", handleMouseEnter)
      scrollerRef.current.addEventListener("mouseleave", handleMouseLeave)
    }

    // Clean up
    return () => {
      cancelAnimationFrame(animationId)
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener("mouseenter", handleMouseEnter)
        scrollerRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Trusted by top brands</h2>

        <div className="relative overflow-hidden w-full">
          <div
            ref={scrollerRef}
            className="flex items-center justify-start gap-8 md:gap-16 w-max mx-auto overflow-hidden"
          >
            <div ref={primaryRef} className="flex items-center gap-8 md:gap-16">
              {brandLogos.slice(0, 5).map((brand, index) => (
                <div key={`brand-primary-${index}`} className="flex-shrink-0 px-4 flex flex-col items-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="h-12 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="mt-2 text-sm font-medium text-gray-500">{brand.name}</span>
                </div>
              ))}
            </div>
            <div ref={secondaryRef} className="flex items-center gap-8 md:gap-16">
              {brandLogos.slice(5, 10).map((brand, index) => (
                <div key={`brand-secondary-${index}`} className="flex-shrink-0 px-4 flex flex-col items-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="h-12 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="mt-2 text-sm font-medium text-gray-500">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
