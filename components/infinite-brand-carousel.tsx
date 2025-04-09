"use client"

import { useEffect, useRef } from "react"
import MicrosoftLogo from "./brand-logos/microsoft-logo"
import AdobeLogo from "./brand-logos/AdobeLogo"
import GoogleLogo from "./brand-logos/google-logo"
import NetflixLogo from "./brand-logos/netflix-logo"
import NikeLogo from "./brand-logos/nike-logo"


const brandLogos = [
  {
    name: "Microsoft",
    logo: <MicrosoftLogo />,
  },
  {
    name: "Adobe",
    logo: <AdobeLogo />,
  },
  {
    name: "Google",
    logo: <GoogleLogo />,
  },
  {
    name: "Netflix",
    logo: <NetflixLogo />,
  },
  {
    name: "Nike",
    logo: <NikeLogo />,
  },
]

export default function InfiniteBrandCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)

    // Clone items for seamless infinite scroll
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })

    // Set animation
    const setScrollAnimation = () => {
      if (scrollerRef.current) {
        const scrollerContentWidth =
          Array.from(scrollerRef.current.children).reduce((acc, item) => acc + item.clientWidth, 0) / 2

        scrollerRef.current.setAttribute("style", `--scroll-width: ${scrollerContentWidth}px`)
      }
    }

    // Set initial animation
    setScrollAnimation()

    // Update on resize
    window.addEventListener("resize", setScrollAnimation)

    return () => {
      window.removeEventListener("resize", setScrollAnimation)
    }
  }, [])

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Trusted by top brands</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={scrollerRef} className="flex items-center justify-start gap-8 md:gap-16 animate-infinite-scroll">
          {brandLogos.map((brand, index) => (
            <div key={`brand-${index}`} className="flex-shrink-0 px-4 py-2 w-[180px]">
              <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
