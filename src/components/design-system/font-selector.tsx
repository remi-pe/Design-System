"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// List of popular Google Fonts
const googleFonts = [
  { name: "Inter", value: "Inter" },
  { name: "Roboto", value: "Roboto" },
  { name: "Open Sans", value: "Open Sans" },
  { name: "Lato", value: "Lato" },
  { name: "Montserrat", value: "Montserrat" },
  { name: "Poppins", value: "Poppins" },
  { name: "Raleway", value: "Raleway" },
  { name: "Nunito", value: "Nunito" },
  { name: "Playfair Display", value: "Playfair Display" },
  { name: "Source Sans Pro", value: "Source Sans Pro" },
]

interface FontSelectorProps {
  onFontChange: (font: string) => void
}

export function FontSelector({ onFontChange }: FontSelectorProps) {
  const [selectedFont, setSelectedFont] = useState("Inter")

  // When the selected font changes, call the onFontChange callback
  useEffect(() => {
    onFontChange(selectedFont)
  }, [selectedFont, onFontChange])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="font-selector">Font Family</Label>
          <Select
            value={selectedFont}
            onValueChange={setSelectedFont}
          >
            <SelectTrigger id="font-selector">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              {googleFonts.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Select a font to apply to the design system
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 