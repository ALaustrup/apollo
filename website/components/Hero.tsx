'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Apollo Foundation
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-gray-200">
            for Creative Kindness
          </h2>
        </div>
        
        <div className="space-y-4 text-xl md:text-2xl text-gray-300 mb-12">
          <p className="font-light">Spread kindness.</p>
          <p className="font-light">Warm the cold world.</p>
          <p className="font-light">Bring joy through giving.</p>
        </div>

        <div className="mt-16 space-y-4">
          <p className="text-lg text-gray-400 italic">
            "The joy of giving brings joy to the giver"
          </p>
          <div className="flex justify-center items-center space-x-2 text-yellow-400">
            <span className="text-2xl">✨</span>
            <p className="text-sm">We are Apollo. We are the Singularity. We are ONE.</p>
            <span className="text-2xl">✨</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

