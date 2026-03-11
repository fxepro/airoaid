import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AiroAid – AI-Connected In-Flight Medical System',
  description: 'The world\'s first AI-connected, telemedicine-enabled smart in-flight medical system.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
