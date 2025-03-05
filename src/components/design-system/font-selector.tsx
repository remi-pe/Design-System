"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useDesignSystem } from "@/context/design-system-context"

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

export function FontSelector() {
  const { headerFont, bodyFont, setHeaderFont, setBodyFont } = useDesignSystem()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Typeface</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="header-font-selector">Header</Label>
              <Select
                value={headerFont}
                onValueChange={setHeaderFont}
              >
                <SelectTrigger id="header-font-selector">
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
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label htmlFor="body-font-selector">Body Copy</Label>
              <Select
                value={bodyFont}
                onValueChange={setBodyFont}
              >
                <SelectTrigger id="body-font-selector">
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
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 