"use client"
import { useEffect, useRef } from "react"
import FeaturesSection from "@/components/features-section"
import VideoShowcase from "@/components/video-showcase"
import SubscriptionBenefits from "@/components/subscription-benefits"
import InfiniteBrandCarousel from "@/components/infinite-brand-carousel"
import CreativeAssetsShowcase from "@/components/creative-assets-showcase"
import HeroSection from "@/components/hero-section"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  const imagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple animation for the images to fade in and slightly move up
    const images = imagesRef.current?.querySelectorAll(".stock-image") || []
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("opacity-100")
        img.classList.remove("translate-y-4")
      }, 100 * index)
    })
  }, [])

  return (
    <div className="h-auto w-screen flex flex-col">
      {/* Main content */}
      <main className="h-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Other sections from previous implementations */}
        <CreativeAssetsShowcase />
        <InfiniteBrandCarousel />
        <FeaturesSection />
        <VideoShowcase />
        <SubscriptionBenefits />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
