"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const logoRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      // Animate logo
      if (logoRef.current) {
        logoRef.current.classList.add("animate-in")
      }

      // Animate heading with delay
      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.classList.add("animate-in")
        }
      }, 200)

      // Animate button with delay
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.add("animate-in")
        }
      }, 400)

      // Animate image with delay
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add("animate-in")
        }
      }, 300)
    }
  }, [inView])

  return (
    <section ref={ref} className="w-full bg-[#FFF8F2]">
      <div className="flex flex-col md:flex-row">
        {/* Left content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <div ref={logoRef} className="mb-8 opacity-0 translate-y-4 transition-all duration-700 ease-out">
            <svg width="200" height="54" viewBox="0 0 200 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M97.5 40.9h-4.4v-17.6h-5.8v-3.6h16v3.6h-5.8v17.6zm18.6 0.4c-6 0-9.3-4.2-9.3-11s3.3-11 9.3-11 9.3 4.2 9.3 11-3.3 11-9.3 11zm0-3.6c3.3 0 4.7-2.9 4.7-7.3s-1.5-7.3-4.7-7.3-4.7 2.9-4.7 7.3 1.5 7.3 4.7 7.3zm23 3.6c-6 0-9.3-4.2-9.3-11s3.3-11 9.3-11 9.3 4.2 9.3 11-3.3 11-9.3 11zm0-3.6c3.3 0 4.7-2.9 4.7-7.3s-1.5-7.3-4.7-7.3-4.7 2.9-4.7 7.3 1.5 7.3 4.7 7.3zm22.8 3.2h-4.4v-21.2h4.4v2.7c1.3-2 3.5-3.1 6-3.1 4.6 0 6.9 3.1 6.9 8v13.5h-4.4v-12.8c0-3.1-1.3-4.7-4-4.7-2.6 0-4.6 1.8-4.6 5.1v12.4zm30.5-17.6h-4v10.8c0 2.6 0.9 2.9 2.6 2.9h1.5v3.8c-0.7 0.2-1.8 0.4-2.7 0.4-4.2 0-5.7-2.2-5.7-6.6v-11.3h-2.9v-3.6h2.9v-5.5h4.4v5.5h4v3.6zm14.8 17.9c-6.2 0-10.6-4.2-10.6-11s4.4-11 10.6-11c6 0 10.4 3.8 10.4 11.5v0.9h-16.4c0.2 4 2.7 6 6 6 2.6 0 4.6-1.3 5.1-3.3h4.4c-0.9 3.8-4.6 6.8-9.5 6.8zm5.7-13.3c-0.4-2.9-2.6-4.9-5.7-4.9s-5.5 2-5.8 4.9h11.5zm9.7 13h4.4v-30.4h-4.4v30.4z"
                fill="#222222"
              />
              <path
                d="M73.7 19.9c-1.8-2-4.4-3.3-7.3-3.3-6 0-10.6 4.4-10.6 12.6 0 8 4.6 12.6 10.6 12.6 2.9 0 5.5-1.3 7.3-3.3v2.9h4.4v-30.4h-4.4v8.8zm-6.4 18.3c-4.2 0-7.1-3.3-7.1-9s2.9-9 7.1-9c4 0 6.9 3.3 6.9 9s-2.9 9-6.9 9z"
                fill="#222222"
              />
              <path d="M35.8 0l-35.8 21 13.3 8 22.5-13.2 22.7 13.2 13.2-8-35.8-21z" fill="#a6e22e" />
              <path
                d="M35.8 58.5l35.8-21-13.2-7.9-22.7 13.2-22.5-13.2-13.3 7.9 35.8 21z"
                fill="#a6e22e"
                fillOpacity="0.5"
              />
            </svg>
          </div>

          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            Let's create something extraordinary.
          </h1>

          <Link
            href="#"
            ref={buttonRef}
            className="bg-[#a6e22e] hover:bg-[#95cc29] text-black px-8 py-4 rounded-md text-lg font-medium transition-all duration-500 ease-out w-fit opacity-0 translate-y-4"
          >
            Start creating
          </Link>
        </div>

        {/* Right image */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 h-[400px] md:h-auto relative opacity-0 translate-x-4 transition-all duration-700 ease-out"
        >
          <Image
            src="/invato1.jpeg"
            alt="Person holding pink balloons"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
