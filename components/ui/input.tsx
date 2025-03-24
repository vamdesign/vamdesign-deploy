import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          // Add classes to override autofill styles
          "[&:-webkit-autofill]:!bg-white [&:-webkit-autofill]:!text-[#666666] [&:-webkit-autofill_selected]:!bg-white",
          className
        )}
        ref={ref}
        style={{ 
          backgroundColor: "white", 
          color: "#666666",
          // Override browser autofill styling
          WebkitBoxShadow: "0 0 0 30px white inset !important",
          WebkitTextFillColor: "#666666 !important"
        }}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }