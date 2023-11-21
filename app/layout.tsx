import Header from '@/components/shared/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One page gym',
  description: 'One page gym',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}</body>
    </html>
  )
}
