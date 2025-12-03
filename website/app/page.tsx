'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Activities from '@/components/Activities'
import Values from '@/components/Values'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Values />
      <Activities />
      <Footer />
    </main>
  )
}

