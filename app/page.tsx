import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-16">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform rotate-45">
            <span className="text-white font-bold text-lg transform -rotate-45">S</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">Skilline</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-orange-500 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Careers
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600">
            Login
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">Sign Up</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-20">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-orange-500">Studying</span>{" "}
            <span className="text-blue-900">Online is now much easier</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Skilline is an interesting platform that will teach you in more an interactive way
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
              Join for free
            </Button>

            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-blue-500 ml-1" fill="currentColor" />
              </div>
              <span className="font-medium">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* Right Content - Hero Image with Floating Elements */}
        <div className="flex-1 relative max-w-lg">
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Happy student with curly hair"
              className="w-full h-auto rounded-lg"
            />

            {/* Floating UI Elements */}
            <div className="absolute top-8 left-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded grid grid-cols-3 gap-0.5 p-1">
                  <div className="bg-blue-500 rounded-sm"></div>
                  <div className="bg-blue-500 rounded-sm"></div>
                  <div className="bg-blue-500 rounded-sm"></div>
                  <div className="bg-blue-500 rounded-sm"></div>
                  <div className="bg-blue-500 rounded-sm"></div>
                  <div className="bg-blue-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-800">250K</div>
                <div className="text-sm text-gray-600">Assisted Student</div>
              </div>
            </div>

            <div className="absolute top-32 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✉</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Congratulations</div>
                  <div className="text-sm text-gray-600">Your admission completed</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <img src="/placeholder.svg?height=40&width=40" alt="Instructor" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold text-gray-800">User Experience Class</div>
                  <div className="text-sm text-gray-600">Today at 12.00 PM</div>
                </div>
              </div>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full">Join Now</Button>
            </div>

            {/* Pause Button */}
            <div className="absolute top-4 right-8 w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-white rounded"></div>
                <div className="w-1 h-4 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trusted Companies Section */}
      <section className="px-6 lg:px-16 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-600">Trusted by 5,000+ Companies Worldwide</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {/* Google */}
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl lg:text-4xl font-bold mb-4 transition-transform hover:scale-110"
            aria-label="Visit Google's website"
          >
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </a>

          {/* Netflix */}
          <a
            href="https://www.netflix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl lg:text-4xl font-bold text-red-600 mb-4 transition-transform hover:scale-110"
            aria-label="Visit Netflix's website"
          >
            NETFLIX
          </a>

          {/* Airbnb */}
          <a
            href="https://www.airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl lg:text-4xl font-bold text-red-500 mb-4 transition-transform hover:scale-110"
            aria-label="Visit Airbnb's website"
          >
            airbnb
          </a>

          {/* Amazon */}
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl lg:text-4xl font-bold mb-4 transition-transform hover:scale-110"
            aria-label="Visit Amazon's website"
          >
            <span className="text-gray-900">amazon</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4 transition-transform hover:scale-110"
            aria-label="Visit Facebook's website"
          >
            facebook
          </a>

          {/* Grab */}
          <a
            href="https://www.grab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl lg:text-4xl font-bold text-green-600 mb-4 transition-transform hover:scale-110"
            aria-label="Visit Grab's website"
          >
            Grab
          </a>
        </div>
      </section>
    </div>
  )
}
