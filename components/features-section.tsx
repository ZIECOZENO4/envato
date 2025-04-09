"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export default function FeaturesSection() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const headingRef = useRef<HTMLHeadingElement>(null)
  const feature1Ref = useRef<HTMLDivElement>(null)
  const feature2Ref = useRef<HTMLDivElement>(null)
  const feature3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      // Animate heading
      if (headingRef.current) {
        headingRef.current.classList.add("animate-in")
      }

      // Animate features with staggered delay
      const features = [feature1Ref, feature2Ref, feature3Ref]
      features.forEach((featureRef, index) => {
        setTimeout(
          () => {
            if (featureRef.current) {
              featureRef.current.classList.add("animate-in")
            }
          },
          200 + index * 150,
        )
      })
    }
  }, [inView])

  return (
    <section ref={sectionRef} className="py-16 bg-[#fff9f0]">
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          Your one-stop creative asset destination
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {/* Feature 1 */}
          <div ref={feature1Ref} className="opacity-0 translate-y-4 transition-all duration-700 ease-out flex md:block">
            <div className="w-16 h-16 bg-[#a6e22e] rounded-full flex items-center justify-center mr-4 md:mx-auto md:mb-6 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 md:text-center">Every category, covered</h3>
              <p className="text-gray-700 md:text-center">
                Take your videos from great to groundbreaking with the broadest range of categories, all in one place:
                video, audio, photos, graphics & more.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div ref={feature2Ref} className="opacity-0 translate-y-4 transition-all duration-700 ease-out flex md:block">
            <div className="w-16 h-16 bg-[#a6e22e] rounded-full flex items-center justify-center mr-4 md:mx-auto md:mb-6 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 md:text-center">Enjoy unlimited downloads</h3>
              <p className="text-gray-700 md:text-center">
                Explore new styles, test different possibilities, and play around to your heart's content with no
                restrictions or extra costs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div ref={feature3Ref} className="opacity-0 translate-y-4 transition-all duration-700 ease-out flex md:block">
            <div className="w-16 h-16 bg-[#a6e22e] rounded-full flex items-center justify-center mr-4 md:mx-auto md:mb-6 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 md:text-center">Lifetime commercial license</h3>
              <p className="text-gray-700 md:text-center">
                Ongoing commercial licenses mean more peace of mind. Any registered uses for your downloads are covered,
                always.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
