import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Define button variants using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        // Default button style: white background, orange text
        default: "bg-white text-orange-500 hover:bg-orange-100 shadow-md hover:shadow-lg",

        // Destructive button: typically used for delete actions
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        // Outlined button with hover effects
        outline: "border border-white hover:bg-accent hover:text-accent-foreground",

        // Secondary button with slight color adjustments
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        // Ghost button: Transparent until hovered
        ghost: "hover:bg-accent hover:text-accent-foreground",

        // Link-style button with underline on hover
        link: "underline-offset-4 hover:underline text-primary",

        // Rounded pill-style button (Updated to fix size issue)
        rounded: "border-2 border-white text-[#007EA7] bg-white/10 hover:bg-white/20 rounded-full px-6 py-2 h-10", // ✅ Adjusted padding and height to fix button width issue
      },

      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// Create the Button component using React.forwardRef
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

