"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

// Sample video URLs - replace these with actual videos
const videoSources = {
  people: [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  ],
  lifestyle: [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  ],
  sport: [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  ],
}

export default function VideoShowcase() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      // Animate heading
      if (headingRef.current) {
        headingRef.current.classList.add("animate-in")
      }

      // Animate button with delay
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.add("animate-in")
        }
      }, 200)

      // Animate categories with delay
      setTimeout(() => {
        if (categoriesRef.current) {
          categoriesRef.current.classList.add("animate-in")

          // Start playing videos with staggered delay
          const videos = categoriesRef.current.querySelectorAll("video")
          videos.forEach((video, index) => {
            setTimeout(
              () => {
                video.play().catch((e) => console.log("Auto-play prevented:", e))
                video.closest(".video-card")?.classList.add("animate-in")
              },
              300 + index * 150,
            )
          })
        }
      }, 400)
    }
  }, [inView])

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            HD and 4K videos that make your projects jump off the screen
          </h2>
          <Link
            href="#"
            ref={buttonRef}
            className="mt-4 md:mt-0 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-all duration-500 ease-out opacity-0 translate-y-4"
          >
            Explore all footage
          </Link>
        </div>

        <div ref={categoriesRef} className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* People Category */}
            <div>
              <h3 className="text-2xl font-bold mb-6">People</h3>
              <div className="grid gap-4">
                {videoSources.people.map((src, index) => (
                  <div
                    key={`people-${index}`}
                    className="video-card opacity-0 translate-y-4 transition-all duration-700 ease-out overflow-hidden rounded-lg shadow-lg relative group"
                  >
                    <video
                      className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 bg-black bg-opacity-50 rounded-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle Category */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Lifestyle</h3>
              <div className="grid gap-4">
                {videoSources.lifestyle.map((src, index) => (
                  <div
                    key={`lifestyle-${index}`}
                    className="video-card opacity-0 translate-y-4 transition-all duration-700 ease-out overflow-hidden rounded-lg shadow-lg relative group"
                  >
                    <video
                      className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 bg-black bg-opacity-50 rounded-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sport Category */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Sport</h3>
              <div className="grid gap-4">
                {videoSources.sport.map((src, index) => (
                  <div
                    key={`sport-${index}`}
                    className="video-card opacity-0 translate-y-4 transition-all duration-700 ease-out overflow-hidden rounded-lg shadow-lg relative group"
                  >
                    <video
                      className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 bg-black bg-opacity-50 rounded-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
