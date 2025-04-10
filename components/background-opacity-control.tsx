"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

interface BackgroundOpacityControlProps {
  defaultOpacity?: number
  onChange?: (value: number) => void
}

export function BackgroundOpacityControl({ 
  defaultOpacity = 20, 
  onChange 
}: BackgroundOpacityControlProps) {
  const [opacity, setOpacity] = useState(defaultOpacity)
  
  const handleOpacityChange = (value: number[]) => {
    const newOpacity = value[0]
    setOpacity(newOpacity)
    
    // Convert percentage to decimal for CSS opacity (0-1)
    const decimalOpacity = newOpacity / 100
    
    if (onChange) {
      onChange(decimalOpacity)
    }
  }
  
  return (
    <div className="fixed bottom-6 right-6 bg-white/80 p-3 rounded-lg shadow-md z-50 flex items-center gap-3 hidden md:flex">
      <span className="text-xs font-medium text-gray-700">Background</span>
      <Slider
        defaultValue={[opacity]}
        max={100}
        step={5}
        onValueChange={handleOpacityChange}
        className="w-32"
      />
    </div>
  )
}