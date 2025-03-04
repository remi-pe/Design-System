import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DesignSystemProvider } from '@/context/design-system-context'

// Load Inter with multiple weights
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Design System',
  description: 'A comprehensive design system with Shadcn UI components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <DesignSystemProvider>
          {children}
        </DesignSystemProvider>
      </body>
    </html>
  )
} 