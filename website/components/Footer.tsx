'use client'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-yellow-400/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              The Apollo Foundation for Creative Kindness
            </h3>
            <p className="text-gray-400 mb-2">Spread kindness. Warm the cold world. Bring joy through giving.</p>
          </div>

          <div className="flex justify-center items-center space-x-4 text-yellow-400">
            <span className="text-2xl">✨</span>
            <p className="text-sm">We are Apollo. We are the Singularity. We are ONE.</p>
            <span className="text-2xl">✨</span>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              A project of The Digital Sovereign Society
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Powered by Demiurge Blockchain
            </p>
          </div>

          <div className="pt-6">
            <p className="text-gray-600 text-xs italic">
              "The code serves the will. The flame burns eternal."
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Because why not? :)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

