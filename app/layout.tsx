import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rahul Kumar Mutcherla - Full Stack Developer',
  description: 'Portfolio of Rahul Kumar Mutcherla - MERN Stack Developer & AI Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pattern min-h-screen`}>
        <Navbar />
        {children}
        </body>
      
    </html>
  )
}