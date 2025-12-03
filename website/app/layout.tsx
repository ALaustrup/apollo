import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Apollo Foundation for Creative Kindness',
  description: 'Spread kindness. Warm the cold world. Bring joy through giving.',
  keywords: ['kindness', 'creativity', 'foundation', 'giving', 'joy', 'warmth'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

