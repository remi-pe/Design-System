"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface DesignSystemContextType {
  headerFont: string
  bodyFont: string
  setHeaderFont: (font: string) => void
  setBodyFont: (font: string) => void
}

const DesignSystemContext = createContext<DesignSystemContextType | undefined>(undefined)

export function DesignSystemProvider({ children }: { children: ReactNode }) {
  const [headerFont, setHeaderFont] = useState("Inter")
  const [bodyFont, setBodyFont] = useState("Inter")

  // Load Google Fonts dynamically when fonts change
  useEffect(() => {
    const loadFont = (font: string) => {
      // Skip if font is already Inter (default)
      if (font === "Inter") return null
      
      // Create a link element for the Google Font
      const link = document.createElement("link")
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}&display=swap`
      link.rel = "stylesheet"
      document.head.appendChild(link)
      return link
    }
    
    const headerLink = loadFont(headerFont)
    const bodyLink = loadFont(bodyFont)
    
    // Update CSS variables for the fonts
    document.documentElement.style.setProperty('--header-font', `"${headerFont}", sans-serif`)
    document.documentElement.style.setProperty('--body-font', `"${bodyFont}", sans-serif`)

    return () => {
      // Clean up the links when the fonts change
      if (headerLink) document.head.removeChild(headerLink)
      if (bodyLink) document.head.removeChild(bodyLink)
    }
  }, [headerFont, bodyFont])

  // Set the initial CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty('--header-font', `"${headerFont}", sans-serif`)
    document.documentElement.style.setProperty('--body-font', `"${bodyFont}", sans-serif`)
  }, [])

  return (
    <DesignSystemContext.Provider value={{ 
      headerFont, 
      bodyFont, 
      setHeaderFont, 
      setBodyFont 
    }}>
      <div className="design-system-root">
        {children}
      </div>
    </DesignSystemContext.Provider>
  )
}

export function useDesignSystem() {
  const context = useContext(DesignSystemContext)
  if (context === undefined) {
    throw new Error("useDesignSystem must be used within a DesignSystemProvider")
  }
  return context
} 