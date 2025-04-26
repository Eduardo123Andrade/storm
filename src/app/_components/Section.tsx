"use client"
import { forwardRef } from "react"

interface SectionProps extends React.PropsWithChildren {
  className?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className }, ref) => {
    return (
      <section ref={ref} className={` h-[80vh] ${className} `}>
        {children}
      </section>
    )
  }
)
