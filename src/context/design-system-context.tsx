"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface DesignSystemContextType {
  font: string
  setFont: (font: string) => void
}

const DesignSystemContext = createContext<DesignSystemContextType | undefined>(undefined)

export function DesignSystemProvider({ children }: { children: ReactNode }) {
  const [font, setFont] = useState("Inter")

  // Load Google Fonts dynamically when the font changes
  useEffect(() => {
    // Skip if font is already Inter (default)
    if (font === "Inter") return

    // Create a link element for the Google Font
    const link = document.createElement("link")
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(" ", "+")}&display=swap`
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      // Clean up the link when the font changes
      document.head.removeChild(link)
    }
  }, [font])

  return (
    <DesignSystemContext.Provider value={{ font, setFont }}>
      <div style={{ 
        // Apply the font to all children
        fontFamily: `"${font}", sans-serif` 
      }}>
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