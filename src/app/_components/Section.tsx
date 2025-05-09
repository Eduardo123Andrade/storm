"use client"
import { forwardRef } from "react"

interface SectionProps extends React.PropsWithChildren {
  className?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className }, ref) => {
    return (
      <section ref={ref} className={`min-h-[70vh] ${className}`}>
        {children}
      </section>
    )
  }
)
