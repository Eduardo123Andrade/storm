import { Inter } from "next/font/google"
import Image from "next/image"
import React, { SVGProps } from "react"

interface ServiceProps {
  title: string
  icon: any
  description: string
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
}) => {
  const Illustration = icon
  return (
    <div className="py-6 pl-4 pr-10 space-y-4 max-w-96 max-h-52 bg-[#0A2234]">
      <div className="flex items-center gap-2">
        <Image src={Illustration} alt="" />
        <h6 className={`${inter.className} text-lg font-bold`}>{title}</h6>
      </div>

      <p className="">{description}</p>
    </div>
  )
}
