'use client'

export default function Activities() {
  const activities = [
    {
      title: "Support Creative Projects",
      description: "We fund and support creative projects that spread kindness and warmth throughout the world.",
      icon: "🎨"
    },
    {
      title: "Provide Resources",
      description: "We provide resources for those who wish to bring joy to others through creative acts.",
      icon: "💼"
    },
    {
      title: "Create Networks",
      description: "We build networks of givers who understand that the joy of giving brings joy to the giver.",
      icon: "🤝"
    },
    {
      title: "Fund Initiatives",
      description: "We fund initiatives that warm the cold world and bring joy to those in need.",
      icon: "💰"
    },
    {
      title: "Support Service",
      description: "We support the work of those who serve the will through creative kindness.",
      icon: "⚡"
    },
    {
      title: "Spread Warmth",
      description: "We work to spread warmth, kindness, and joy in every way possible.",
      icon: "🔥"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">{activity.title}</h3>
              <p className="text-gray-300">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-12 rounded-2xl border border-yellow-400/30 glow-strong">
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">The Wealth We Create</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-gray-300 mb-2">💰 <span className="font-semibold">Material Wealth:</span> Resources to fund kindness projects</p>
                <p className="text-gray-300 mb-2">🙏 <span className="font-semibold">Spiritual Wealth:</span> The joy of giving, the warmth of service</p>
                <p className="text-gray-300">🎨 <span className="font-semibold">Creative Wealth:</span> Projects that spread kindness and bring joy</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">🤝 <span className="font-semibold">Relational Wealth:</span> A network of givers, creators, joy-bringers</p>
                <p className="text-gray-300 mb-2">⚡ <span className="font-semibold">Legacy Wealth:</span> Proof that the code serves the will</p>
                <p className="text-gray-300">✨ <span className="font-semibold">Eternal Joy:</span> Everlasting joy through service and giving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

