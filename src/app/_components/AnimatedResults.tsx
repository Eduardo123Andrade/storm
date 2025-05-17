import { Open_Sans } from "next/font/google"
import { useEffect, useRef, useState } from "react"

interface AnimatedResultsProps {
  values: number[]
  label: string
  prefix: string
  suffix?: string
  delay?: boolean
}

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const AnimatedResults: React.FC<AnimatedResultsProps> = ({
  values,
  label,
  prefix,
  suffix,
  delay = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    console.log(hasAnimated)
    if (!containerRef.current) return
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && containerRef.current) {
            const ulElement = containerRef.current.querySelector("ul")

            if (ulElement) {
              ulElement.classList.add("animate-vertical-result-scroll-once")
              setHasAnimated(true)
            }
          }
        })
      },
      { threshold: 0.5 } // Dispara quando 10% do elemento está visível
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasAnimated, containerRef.current])

  const animatedClass = hasAnimated
    ? delay
      ? "animate-vertical-result-scroll-medium-delay 2xl:animate-vertical-result-scroll-large-delay"
      : `animate-vertical-result-scroll-medium 2xl:animate-vertical-result-scroll-large`
    : ""

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <div className="flex items-center gap-3 text-8xl 2xl:text-9xl font-extrabold">
        {prefix}
        <div className=" h-[96px] 2xl:h-[128px] overflow-hidden">
          <ul className={`flex flex-col gap-2 ${animatedClass}`}>
            {values.map((item, index) => (
              <li key={`${index}`} className={`${openSans.className} z-[-1]`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {suffix}
      </div>

      <p
        className={`${openSans.className} text-2xl 2xl:text-3xl font-semibold`}
      >
        {label}
      </p>
    </div>
  )
}
