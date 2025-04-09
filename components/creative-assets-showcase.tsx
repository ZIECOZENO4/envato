"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"

// Define the categories with their titles and media
const categories = [
  {
    id: "stock-video",
    title: "Stock Video",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "/placeholder.svg?height=400&width=600&text=Stock+Video",
  },
  {
    id: "video-templates",
    title: "Video Templates",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "/placeholder.svg?height=400&width=600&text=Video+Templates",
  },
  {
    id: "stock-photos",
    title: "Stock Photos",
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=Stock+Photos",
  },
  {
    id: "royalty-free-music",
    title: "Royalty-Free Music",
    type: "audio",
    src: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
    image: "/placeholder.svg?height=400&width=600&text=Royalty+Free+Music",
  },
  {
    id: "sound-effects",
    title: "Sound Effects",
    type: "audio",
    src: "https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
    image: "/placeholder.svg?height=400&width=600&text=Sound+Effects",
  },
  {
    id: "graphic-templates",
    title: "Graphic Templates",
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=Graphic+Templates",
  },
  {
    id: "fonts",
    title: "Fonts",
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=Fonts",
  },
  {
    id: "graphics",
    title: "Graphics",
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=Graphics",
  },
]

export default function CreativeAssetsShowcase() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({})
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Register video and audio refs
  const registerVideoRef = (id: string, el: HTMLVideoElement) => {
    if (el) {
      videoRefs.current[id] = el
    }
  }

  const registerAudioRef = (id: string, el: HTMLAudioElement) => {
    if (el) {
      audioRefs.current[id] = el
    }
  }

  // Handle hover states
  const handleMouseEnter = (id: string, type: string) => {
    setHoveredItem(id)

    if (type === "video" && videoRefs.current[id]) {
      videoRefs.current[id].play().catch((e) => console.log("Autoplay prevented:", e))
    }

    if (type === "audio" && audioRefs.current[id]) {
      audioRefs.current[id].play().catch((e) => console.log("Autoplay prevented:", e))
    }
  }

  const handleMouseLeave = (id: string, type: string) => {
    setHoveredItem(null)

    if (type === "video" && videoRefs.current[id]) {
      videoRefs.current[id].pause()
      videoRefs.current[id].currentTime = 0
    }

    if (type === "audio" && audioRefs.current[id]) {
      audioRefs.current[id].pause()
      audioRefs.current[id].currentTime = 0
    }
  }

  useEffect(() => {
    if (inView) {
      // Animate heading
      if (headingRef.current) {
        headingRef.current.classList.add("animate-in")
      }

      // Animate subheading with delay
      setTimeout(() => {
        if (subheadingRef.current) {
          subheadingRef.current.classList.add("animate-in")
        }
      }, 200)

      // Animate button with delay
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.add("animate-in")
        }
      }, 400)

      // Animate grid items with staggered delay
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(".category-item")
        items.forEach((item, index) => {
          setTimeout(
            () => {
              item.classList.add("animate-in")
            },
            600 + index * 100,
          )
        })
      }

      // Auto-play first two videos when in view
      const firstVideoIds = categories
        .filter((cat) => cat.type === "video")
        .slice(0, 2)
        .map((cat) => cat.id)

      firstVideoIds.forEach((id) => {
        if (videoRefs.current[id]) {
          videoRefs.current[id].play().catch((e) => console.log("Autoplay prevented:", e))
        }
      })
    } else {
      // Pause all videos and audio when out of view
      Object.values(videoRefs.current).forEach((video) => {
        video.pause()
        video.currentTime = 0
      })

      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      })
    }
  }, [inView])

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
            >
              We've got your creativity covered
            </h2>
            <p
              ref={subheadingRef}
              className="text-lg text-gray-700 max-w-2xl opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100"
            >
              Access all the creative assets you'll ever need, with one great-value subscription.
            </p>
          </div>
          <Link
            href="#"
            ref={buttonRef}
            className="mt-6 md:mt-0 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-all duration-500 ease-out opacity-0 translate-y-4 transform hover:scale-105"
          >
            Explore all categories
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-item relative overflow-hidden rounded-lg border border-gray-200 transition-all duration-500 ease-out opacity-0 translate-y-8 ${
                hoveredItem === category.id ? "shadow-xl scale-[1.02]" : "shadow-md"
              }`}
              onMouseEnter={() => handleMouseEnter(category.id, category.type)}
              onMouseLeave={() => handleMouseLeave(category.id, category.type)}
            >
              <Link href="#" className="block h-full">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {category.type === "video" && (
                    <video
                      ref={(el) => el && registerVideoRef(category.id, el)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out transform hover:scale-105"
                      loop
                      muted
                      playsInline
                      poster={category.poster}
                    >
                      <source src={category.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}

                  {category.type === "image" && (
                    <Image
                      src={category.src || "/placeholder.svg"}
                      alt={category.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out transform hover:scale-105"
                    />
                  )}

                  {category.type === "audio" && (
                    <>
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out transform hover:scale-105"
                      />
                      <audio ref={(el) => el && registerAudioRef(category.id, el)} className="hidden" loop>
                        <source src={category.src} type="audio/ogg" />
                        Your browser does not support the audio element.
                      </audio>
                      {hoveredItem === category.id && (
                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-full animate-pulse">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6"
                          >
                            <path d="M9 18V5l12-2v13" />
                            <circle cx="6" cy="18" r="3" />
                            <circle cx="18" cy="16" r="3" />
                          </svg>
                        </div>
                      )}
                    </>
                  )}

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 flex items-center justify-center ${
                      hoveredItem === category.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-white font-medium px-4 py-2 bg-black bg-opacity-50 rounded-md transform transition-transform duration-300 ease-out scale-0 group-hover:scale-100">
                      Explore {category.title}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
