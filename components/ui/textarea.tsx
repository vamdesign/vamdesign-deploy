import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
Textarea.displayName = "Textarea"

export { Textarea }