import { Open_Sans } from "next/font/google"
import React from "react"

interface SectionHeaderProps {
  title: string
  subtitle: string
}

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center">
      <h1
        className={`${openSans.className} text-5xl 2xl:text-6xl font-extrabold`}
      >
        {title}
      </h1>
      <p
        className={`${openSans.className} text-2xl 2xl:text-3xl 2xl:pt-2 font-semibold`}
      >
        {subtitle}
      </p>
    </div>
  )
}
