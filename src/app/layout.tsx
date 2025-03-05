import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DesignSystemProvider } from '@/context/design-system-context'
import { ThemeProvider } from '@/components/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DesignSystemProvider>
            {children}
          </DesignSystemProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 