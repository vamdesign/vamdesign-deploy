"use client"

import React from "react"
import { Slider } from "@/components/ui/slider"
import { SunIcon } from "lucide-react"

interface BackgroundOpacityControlProps {
  defaultOpacity: number
  onChange: (value: number) => void
}

export function BackgroundOpacityControl({ defaultOpacity = 20, onChange }: BackgroundOpacityControlProps) {
  const handleChange = (value: number[]) => {
    onChange(value[0] / 100)
  }

  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md 
                    md:bottom-8 md:right-8
                    sm:bottom-24 sm:right-4">
      <SunIcon className="h-4 w-4 text-[#007EA7]" />
      <Slider
        defaultValue={[defaultOpacity]}
        max={100}
        step={5}
        className="w-24"
        onValueChange={handleChange}
      />
    </div>
  )
}