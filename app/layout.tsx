import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Unlimited Stock Footage | Invato Elements",
  description: "Professional-quality clips, authentic scenes, cinematic shots, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> <div>
        <NavbarDemo />
        {children}
        </div> </body>
    </html>
  )
}


import './globals.css'
import { NavbarDemo } from "@/components/nav-bar"
