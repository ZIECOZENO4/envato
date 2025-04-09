import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#FFF8F2] py-6 px-2 text-xs md:px-2 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            About Invato
          </Link>
          <span className="text-gray-300 hidden md:inline">|</span>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            Plans & Pricing
          </Link>
          <span className="text-gray-300 hidden md:inline">|</span>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            License Terms
          </Link>
          <span className="text-gray-300 hidden md:inline">|</span>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            Terms & Conditions
          </Link>
          <span className="text-gray-300 hidden md:inline">|</span>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-300 hidden md:inline">|</span>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            Cookies
          </Link>
          <span className="text-gray-300 hidden md:inline">|</span>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            Help
          </Link>
          <span className="text-gray-300 hidden md:inline">|</span>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            Do not sell or share my personal information
          </Link>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Invato Pty Ltd. Trademarks and brands are the property of their respective owners.
          </p>
          <div className="w-6 h-6">
            {/* Small icon placeholder */}
            <div className="w-full h-full border border-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
