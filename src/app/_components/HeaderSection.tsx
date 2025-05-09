import { Open_Sans } from "next/font/google"
import React from "react"
import { Title } from "./Title"

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
      <Title title={title} />
      <p
        className={`${openSans.className} text-2xl 2xl:text-3xl 2xl:pt-2 font-semibold`}
      >
        {subtitle}
      </p>
    </div>
  )
}
