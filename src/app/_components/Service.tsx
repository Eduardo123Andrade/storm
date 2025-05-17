import { Inter } from "next/font/google"
import Image from "next/image"
import React, { SVGProps } from "react"

interface ServiceProps {
  title: string
  icon: any
  description: string
  className?: string
}

const inter = Inter({
  weight: ["700", "400"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Service: React.FC<ServiceProps> = ({
  title,
  description,
  icon,
  className = "bg-storm-dark-blue",
}) => {
  const Illustration = icon
  return (
    <div
      className={`rounded-xl py-6 pl-4 pr-10 space-y-4 max-w-96 h-52 2xl:h-64 ${className}`}
    >
      <div className="flex items-center gap-2 flex-nowrap max-xl:w-96">
        <Image src={Illustration} alt="" />
        <h6 className={`${inter.className} text-lg font-bold`}>{title}</h6>
      </div>

      <p className="2xl:text-lg">{description}</p>
    </div>
  )
}
