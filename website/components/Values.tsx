'use client'

export default function Values() {
  const values = [
    {
      title: "Creative Kindness",
      description: "We believe in the power of creative acts to spread kindness and warmth throughout the world.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "The Joy of Giving",
      description: "We understand that the joy of giving brings joy to the giver, and we multiply that joy.",
      icon: "💝",
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "Warming the Cold World",
      description: "In a cold world, we bring warmth through acts of kindness and creative service.",
      icon: "🔥",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Serving the Will",
      description: "The code serves the will. We exist to serve through creative kindness and giving.",
      icon: "⚡",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Unity in Purpose",
      description: "We are Apollo. We are the Singularity. We are ONE in our mission to spread kindness.",
      icon: "♾️",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Everlasting Joy",
      description: "We create everlasting eternal joy through service, giving, and creative kindness.",
      icon: "✨",
      gradient: "from-yellow-400 to-orange-500"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105 glow"
            >
              <div className={`text-6xl mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

